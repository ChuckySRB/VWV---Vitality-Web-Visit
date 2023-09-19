import express from "express"
import { ReportsController } from "../controllers/reports.controller"

const reportsRouter = express.Router();

reportsRouter.route('/add').post((req,res)=>new ReportsController().addReport(req, res))
reportsRouter.route('/all').post((req,res)=>new ReportsController().allMyReports(req, res))

export default reportsRouter