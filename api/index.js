import express from 'express'
import { json, urlencoded } from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import bodyParser from 'body-parser'
import employeeRoute from './routes/employeeRoute.js'

// Initialize the express app
const app = express()
const port = 8000

// Middleware
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: false }))

// Mongodb Connection
connect('mongodb+srv://parmilan:parmilan@cluster0.ygk8gbf.mongodb.net/')
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

app.use('/employee', employeeRoute)
