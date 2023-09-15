"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkups_controller_1 = require("../controllers/checkups.controller");
const checkupsRouter = express_1.default.Router();
//checkupsRouter.route('/create').post((req, res) => new CheckUpsCotroller().createCheckUp(req, res))
checkupsRouter.route('/mycheckups').post((req, res) => new checkups_controller_1.CheckUpsCotroller().getMyCheckUps(req, res));
checkupsRouter.route('/all').post((req, res) => new checkups_controller_1.CheckUpsCotroller().getAllCheckUps(req, res));
exports.default = checkupsRouter;
//# sourceMappingURL=checkups.router.js.map