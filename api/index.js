const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Initialize the express app
const app = express()
const port = 8000

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Mongodb Connection
mongoose
  .connect('mongodb+srv://parmilan:parmilan@cluster0.ygk8gbf.mongodb.net/')
  .then(() => {
    console.log('Mongodb Connected Successfully..')
  })
  .catch((error) => {
    console.log('Mongodb connection failed', error)
  })

// Listen the port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
