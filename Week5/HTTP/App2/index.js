const express = require('express')
const app = express()

app.use(express.json());

//age checker middlewear simulation
// const isOldEnough = (age) =>{
//     if( age >= 14) {
//         return true;
//     } else {
//         return false;
//     }
// }

const isOldEnoughMiddleWear = (req,res,next) =>{
    const age = Number(req.query.age);
    if(age >= 14){
        next();
    } else {
        res.json({msg: "Sorry you are not old enough"});
    }
}

app.get("/ride1", isOldEnoughMiddleWear, (req,res)=>{
    
    res.json({msg: "You have successfully ridden the ride 1"});
        
});

app.get("/ride2", isOldEnoughMiddleWear, (req,res)=>{
    
    res.json({msg: "You have successfully ridden the ride 2"});
        
});
app.listen(3000);