const express = require('express');

let user = [{
    name: "John",
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

const app = express(); // creating an instance of express named app
app.use(express.json()); // important it acts as a middlewear.

app.get("/", (req, res)=>{
    const userKidney = user[0].kidneys;
    //console.log(userKidney);
    let numberofKidneys = userKidney.length;
    let numberofHealthyKidneys = userKidney.filter(kidney => kidney.healthy === true).length;
    let numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;
    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    });
})

app.post("/", (req, res)=>{
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({healthy:isHealthy});
    res.json({
        msg: "Done!"});
})

app.put("/", (req, res)=>{
    for(let i = 0; i < user[0].kidneys.length; i++){
        user[0].kidneys[i].healthy = true;
    }
    res.json({msg: "Request Sent"});
})

app.delete("/", (req, res)=>{
    let newLealthyKidney = [];
    for(let i = 0; i < user[0].kidneys.length; i++){
        if(user[0].kidneys[i].healthy){
            newLealthyKidney.push({healthy: true});
        }
        user[0].kidneys = newLealthyKidney;
        res.json({msg: "Unhealthy Kidney is removed"});
    }
})

app.listen(3000);