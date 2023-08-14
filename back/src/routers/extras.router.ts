import express from "express"
import { ExtrasCotroller } from "../controllers/extras.controller"

const extrasRouter = express.Router();

extrasRouter.route('/').get(
    (req, res) => new ExtrasCotroller().getAll(req, res)
)

export default extrasRouter