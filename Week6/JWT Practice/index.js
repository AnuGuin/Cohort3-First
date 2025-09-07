const express  = require('express')
const jwt = require('jsonwebtoken') 
const path = require('path');
const JWT_SECRET = "USER_APP"; // stored in the environment
const app = express();
const port = 3000;

app.use(express.json());

const users = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.post('/signup', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    users.push({username, password});
    
    res.status(200).send({
        message:"You are signed up"});
})


app.post('/signin', (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const user  =  users.find(u => u.username === username && u.password === password);
    if (user) {
        //const token = generateToken(); //This is handled by the json library
        const token = jwt.sign({
            username: user.username
        }, JWT_SECRET)
        //user.token = token; //we dont need to store this token in db
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
})

function auth(req, res, next){
    const token = req.headers.authorization;
    if(token){
        try{
            const decoded_info = jwt.verify(token,JWT_SECRET);
            req.user = decoded_info;
            next();
        } catch(err){
            res.status(401).send({
                message: "Invalid or expired token"});
        }
    } else {
        res.status(401).send({
            message: "Please Signup"});
    }
}

app.get("/me", auth, (req, res) => {
    const user = req.user;
    res.send({
        username: user.username
    })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})