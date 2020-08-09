const dotenv = require('dotenv');
dotenv.config();

const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const aylien = require("aylien_textapi");


app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY

});

app.post('/post', sendData)

function sendData(req, res) {
    textapi.sentiment({
        'url': req.body.URL
    },
    function (error,response) {
        res.send(response)
        console.log(response)
    });
}

