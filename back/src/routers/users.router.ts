import express from "express";
import { UsersCotroller } from "../controllers/users.controller";

const userRouter = express.Router()
userRouter.route('/login').post(
    (req, res) => new UsersCotroller().login(req, res)
)
userRouter.route('/register').post(
    (req, res) => new UsersCotroller().register(req, res)
)
userRouter.route('/doctors').get(
    (req, res) => new UsersCotroller().allDoctors(req, res)
)
export default userRouter