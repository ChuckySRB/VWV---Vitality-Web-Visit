"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const extras_controller_1 = require("../controllers/extras.controller");
const extrasRouter = express_1.default.Router();
extrasRouter.route('/').get((req, res) => new extras_controller_1.ExtrasCotroller().getAll(req, res));
exports.default = extrasRouter;
//# sourceMappingURL=extras.router.js.map