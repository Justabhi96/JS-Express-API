const express = require('express')
const app = express()
const port = process.env.PORT || 80

app.get('', (req, res) => {
    var today = new Date()
    res.write(today)
    res.end()
    
})

app.listen(port)