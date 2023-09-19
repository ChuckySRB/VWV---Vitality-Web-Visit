import express from "express"
import { DepartmentsController } from "../controllers/departments.controller"

const departmentRouter = express.Router();

departmentRouter.route('/add').post((req,res)=>new DepartmentsController().addDepartment(req, res))
departmentRouter.route('/all').get((req,res)=>new DepartmentsController().allDepartments(req, res))
departmentRouter.route('/delete').post((req,res)=>new DepartmentsController().deleteDepartment(req, res))

export default departmentRouter