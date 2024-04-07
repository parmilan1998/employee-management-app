import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
  employeeID: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  joinDate: {
    type: String,
    required: true,
  },
  dataOfBirth: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  activeEmployee: {
    type: Boolean,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

const Employee = mongoose.model('Employee', employeeSchema)
export default Employee
