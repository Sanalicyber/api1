var http = require('http')
var express = require('express')
var bodyPars = require('body-parser')

var version = { "version": "1.0.0" }

var app = express();

app.use(bodyPars.urlencoded({extended: true}))
app.use(bodyPars.json())

app.post('/', (req, res) => {
    res.send("version:1.0.0")
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`${process.env.PORT}`)
}) 