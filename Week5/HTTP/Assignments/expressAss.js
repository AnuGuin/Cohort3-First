const express = require('express');
const app = express();
app.use(express.json());

app.get("/sum", function(req, res) {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let result = a + b;
    res.status(200).send({The_result_is: result});
});

app.get("/multiply", function(req, res) {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let result = a * b;
    res.status(200).send({The_result_is: result});
});


app.get("/divide", function(req, res) {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let result = a / b;
    res.status(200).send({The_result_is: result.toFixed(2)});
});

app.get("/subtract", function(req, res) {
    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let result = a - b;
    res.status(200).send({The_result_is: result});
});

app.listen(3000);