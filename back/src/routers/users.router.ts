import express from "express";
import { UsersCotroller } from "../controllers/users.controller";

const userRouter = express.Router()
userRouter.route('/login').post(
    (req, res) => new UsersCotroller().login(req, res)
)
userRouter.route('/register').post(
    (req, res) => new UsersCotroller().register(req, res)
)
userRouter.route('/confirm').post(
    (req, res) => new UsersCotroller().confirmUser(req, res)
)
userRouter.route('/change/data').post(
    (req, res) => new UsersCotroller().changeData(req, res)
)
userRouter.route('/doctor/update/checkups').post(
    (req, res) => new UsersCotroller().updateCheckUps(req, res)
)
userRouter.route('/doctors').get(
    (req, res) => new UsersCotroller().allDoctors(req, res)
)
userRouter.route('/doctors').post(
    (req, res) => new UsersCotroller().getDoctor(req, res)
)

export default userRouter