import mongoose from 'mongoose'

const attendanceSchema = new mongoose.Schema({
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

const Attendance = mongoose.model('Attendance', attendanceSchema)
export default Attendance
