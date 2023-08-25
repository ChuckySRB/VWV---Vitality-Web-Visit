import express from "express"
import { CheckUpsCotroller } from "../controllers/checkups.controller"

const checkupsRouter = express.Router();

//checkupsRouter.route('/create').post((req, res) => new CheckUpsCotroller().createCheckUp(req, res))
//checkupsRouter.route('/get').post((req,res)=>new CheckUpsCotroller().getCheckUp(req, res))
checkupsRouter.route('/all').post((req,res)=>new CheckUpsCotroller().getAllCheckUps(req, res))

export default checkupsRouter