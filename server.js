const express = require('express')
const app = express()
const connectDB = require('./db')

app.listen(3000)
console.log(`server on port ${3000}`)

var conexion = connectDB()