import express from "express"
import { OrdersCotroller } from "../controllers/orders.controller"

const ordersRouter = express.Router();

ordersRouter.route('/user').post((req, res) => new OrdersCotroller().getOrders(req, res))
ordersRouter.route('/make').post((req,res)=>new OrdersCotroller().makeOrder(req, res))
ordersRouter.route('/accept').post((req,res)=>new OrdersCotroller().acceptOrder(req, res))

export default ordersRouter