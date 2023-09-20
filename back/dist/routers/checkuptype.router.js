"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const checkuptypes_controller_1 = require("../controllers/checkuptypes.controller");
const checkUpTypesRouter = express_1.default.Router();
checkUpTypesRouter.route('/add').post((req, res) => new checkuptypes_controller_1.CheckUpTypesCotroller().addCheckUpType(req, res));
checkUpTypesRouter.route('/confirm').post((req, res) => new checkuptypes_controller_1.CheckUpTypesCotroller().confirmCheckUpType(req, res));
checkUpTypesRouter.route('/getMy').post((req, res) => new checkuptypes_controller_1.CheckUpTypesCotroller().getCheckUpTypes(req, res));
exports.default = checkUpTypesRouter;
//# sourceMappingURL=checkuptype.router.js.map