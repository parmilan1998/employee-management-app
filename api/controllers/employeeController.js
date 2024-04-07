import Employee from '../models/employee.js'
import Attendence from '../models/attendence.js'

// Create employee endpoint
export const addEmployee = async (req, res) => {
  try {
    const {
      employeeID,
      employeeName,
      designation,
      joinDate,
      dataOfBirth,
      salary,
      activeEmployee,
      phoneNumber,
      address,
    } = req.body

    // Create a new employee
    const newEmployee = new Employee({
      employeeID,
      employeeName,
      designation,
      joinDate,
      dataOfBirth,
      salary,
      activeEmployee,
      phoneNumber,
      address,
    })

    // Save the employee information
    const employee = await newEmployee.save()

    res.status(201).json({
      message: 'employe created successfully',
      employee: employee,
    })
  } catch (error) {
    console.log('Error add an employee', error)
    res.status(500).json({
      message: 'Failed to add an employee',
    })
  }
}

//fetch employee endpoint
export const getEmployee = async (req, res) => {
  try {
    const employees = await Employee.find()
    res.status(201).json({
      count: employees.length,
      data: employees,
    })
  } catch (error) {
    console.log('Error to get employee', error)
    res.status(500).json({
      message: 'Failed to get employee information',
    })
  }
}
