const express = require('express')
const bodyParser = require('body-parser')
var multer = require('multer')
var upload = multer()

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/api/submit', (req, res) => {
    res.json({
        headers: req.headers,
        ip: req.ip,
        body: req.body
    })
})

app.get('/api/submit', (req, res) => {
    res.json({
        headers: req.headers,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || req.ip
    })
})

app.listen(process.env.PORT || 3000)