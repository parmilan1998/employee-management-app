import Router from 'express'
import { addEmployee, getEmployee } from '../controllers/employeeController.js'

const router = Router()

router.route('/').post(addEmployee)
router.route('/').get(getEmployee)

export default router
