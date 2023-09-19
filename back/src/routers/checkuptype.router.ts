import express from "express"
import { CheckUpTypesCotroller } from "../controllers/checkuptypes.controller"

const checkUpTypesRouter = express.Router();

checkUpTypesRouter.route('/add').post((req,res)=>new CheckUpTypesCotroller().addCheckUpType(req, res))
checkUpTypesRouter.route('/confirm').post((req,res)=>new CheckUpTypesCotroller().confirmCheckUpType(req, res))
checkUpTypesRouter.route('/getMy').post((req,res)=>new CheckUpTypesCotroller().getCheckUpTypes(req, res))

export default checkUpTypesRouter