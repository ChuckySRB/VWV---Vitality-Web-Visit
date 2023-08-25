"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("../controllers/users.controller");
const userRouter = express_1.default.Router();
userRouter.route('/login').post((req, res) => new users_controller_1.UsersCotroller().login(req, res));
userRouter.route('/register').post((req, res) => new users_controller_1.UsersCotroller().register(req, res));
exports.default = userRouter;
//# sourceMappingURL=users.router.js.map