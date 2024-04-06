const mongoose = require('mongoose')

const attendenceSchema = new mongoose.Schema({
  employeeID: {
    type: 'string',
    required: true,
  },
  employeeName: {
    type: 'string',
    required: true,
  },
  date: {
    type: 'date',
    required: true,
  },
  status: {
    type: 'string',
    required: true,
  },
})

const Attendence = mongoose.model('Attendence', attendenceSchema)
module.exports = Attendence
