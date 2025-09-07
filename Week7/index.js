import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { UserModel, TodoModel } from './db.js';
import bcrypt from 'bcrypt';
import {z} from 'zod';

const port = 3000;
const app = express();
const JWT_SECRET = "mysupersecretkey"

async function connectDB() {
    try {
        await mongoose.connect("URI");
        console.log("Connected to MongoDB");
    } catch (e) {
        console.error("MongoDB connection error:", e.message);
        process.exit(1);
    }
}
connectDB();



app.use(express.json());

app.post('/signup', async (req, res)=> {

    const requiredBody = z.object({
        username: z.string(),
        email: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    })

    const parsedDatawithSafety = requiredBody.safeParse(req.body);
    if(!parsedDatawithSafety){
        res.send("Incorrect Format");
        return;
    }

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
        username: username,
        email: email,
        password: hashedPassword
    });

    res.status(200).send({message: "You are Signed Up"});
})

app.post('/signin', async (req, res)=> {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({ email: email })

    if(!user) {
        res.status(403).send({message: "The user does not exist"})
    }

    const passwordMatch = bcrypt.compare(password, user.password);

    //console.log(user);

    if(passwordMatch){
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET)
        res.status(200).send({message: "You are Signed In", token: token})
    } else {
        res.status(403).send({message: "Invalid credentials"})
    }
})

function auth (req,res,next) {
    const token = req.headers.authorization;
    const decoded_data = jwt.verify(token, JWT_SECRET);

    if(decoded_data){
        req.userId = decoded_data.id;
        next();
    } else {
        res.status(403).send({message: "Invalid Credentials"})
    }
}

app.post('/todo', auth, async (req, res)=> {
    const description = req.body.description;
    const done = req.body.done;
    const userId = req.userId;
    console.log
        try {
            await TodoModel.create({
                description:description, 
                done: done, 
                userId: userId})

            res.status(200).send({message: "Todo Created"})    
        } catch (e) {
            res.status(500).send({message: "Error creating Todo"})
        }  
})    

app.get('/todos', auth, async (req, res) => {
    const userId = req.userId;
    try {
        const todos = await TodoModel.find({ userId });
        if (todos && todos.length > 0) {
            res.status(200).json(todos);
        } else {
            res.status(404).send({ message: "No todos found" });
        }
    } catch (e) {
        res.status(500).send({ message: "Error fetching todos", error: e.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
