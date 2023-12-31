"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orders_controller_1 = require("../controllers/orders.controller");
const ordersRouter = express_1.default.Router();
ordersRouter.route('/user').post((req, res) => new orders_controller_1.OrdersCotroller().getOrders(req, res));
ordersRouter.route('/make').post((req, res) => new orders_controller_1.OrdersCotroller().makeOrder(req, res));
ordersRouter.route('/accept').post((req, res) => new orders_controller_1.OrdersCotroller().acceptOrder(req, res));
exports.default = ordersRouter;
//# sourceMappingURL=orders.router.js.map