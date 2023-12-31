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
userRouter.route('/confirm').post((req, res) => new users_controller_1.UsersCotroller().confirmUser(req, res));
userRouter.route('/change/data').post((req, res) => new users_controller_1.UsersCotroller().changeData(req, res));
userRouter.route('/doctor/update/checkups').post((req, res) => new users_controller_1.UsersCotroller().updateCheckUps(req, res));
userRouter.route('/doctors').get((req, res) => new users_controller_1.UsersCotroller().allDoctors(req, res));
userRouter.route('/patients').get((req, res) => new users_controller_1.UsersCotroller().allPatients(req, res));
userRouter.route('/doctor').post((req, res) => new users_controller_1.UsersCotroller().getDoctor(req, res));
exports.default = userRouter;
//# sourceMappingURL=users.router.js.map