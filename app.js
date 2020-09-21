const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.get('', (req, res) => {
    res.send("A Simple API for time.")
})


app.get('/today', (req, res) => {
    var today = new Date()

    res.send(today)
})


app.get('/tommorow', (req, res) => {
    var tommorow = new Date();
    tommorow.setDate(tommorow.getDate() + 1);

    res.send(tommorow)
})

app.listen(port)
