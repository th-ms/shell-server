const express = require('express')
const bodyParser = require('body-parser')
var multer = require('multer')
var upload = multer()

const app = express()

// Imports used for reading the body data of different POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(upload.array()); 
app.use(express.static('public'));

// Method to handle POST requests to simulated end-point
// Returns JSON object with request data
app.post('/api/submit', (req, res) => {
    res.json({
        headers: req.headers,
        ip: req.ip,
        body: req.body
    })
})


// Method to handle GET requests to simulated end-point
// Returns JSON object with request data
app.get('/api/submit', (req, res) => {
    res.json({
        headers: req.headers,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress
    })
})

app.listen(process.env.PORT || 3000)