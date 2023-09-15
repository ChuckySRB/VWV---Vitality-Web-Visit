import express from "express"
import { CheckUpsCotroller } from "../controllers/checkups.controller"

const checkupsRouter = express.Router();

//checkupsRouter.route('/create').post((req, res) => new CheckUpsCotroller().createCheckUp(req, res))
checkupsRouter.route('/mycheckups').post((req,res)=>new CheckUpsCotroller().getMyCheckUps(req, res))
checkupsRouter.route('/all').post((req,res)=>new CheckUpsCotroller().getAllCheckUps(req, res))

export default checkupsRouter