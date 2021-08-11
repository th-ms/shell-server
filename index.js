const express = require('express')
const app = express()

app.post('/api/submit', (req, res) => {
    res.json({
        headers: req.headers,
        ip: req.ip
    })
})

app.get('/api/submit', (req, res) => {
    res.json({
        headers: req.headers,
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || req.ip
    })
})

app.listen(process.env.PORT || 3000)