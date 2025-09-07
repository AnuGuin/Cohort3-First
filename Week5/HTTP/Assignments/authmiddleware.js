const express = require('express');
const app = express();
const VALID_API_KEY = '100xdevs_cohort3_super_secret_valid_api_key'; // key is 100xdevs-api-key use that API key for authenticate user


// Middleware to check for a valid API key
function authenticateAPIKey(req, res, next) {
    //  authenticate APIKey here
    const validapi = req.header('100xdevs-api-key');
    if(validapi && validapi === VALID_API_KEY) {
        next();
    } else {
        return res.status(400).send({msg: 'Please enter a valid api key'});
    }
}

app.use(authenticateAPIKey);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

app.listen(3000, () => {
    console.log("App is listening to port 3000");
});

module.exports = app;