"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const departments_controller_1 = require("../controllers/departments.controller");
const departmentRouter = express_1.default.Router();
departmentRouter.route('/add').post((req, res) => new departments_controller_1.DepartmentsController().addDepartment(req, res));
departmentRouter.route('/all').get((req, res) => new departments_controller_1.DepartmentsController().allDepartments(req, res));
departmentRouter.route('/delete').post((req, res) => new departments_controller_1.DepartmentsController().deleteDepartment(req, res));
exports.default = departmentRouter;
//# sourceMappingURL=departments.router.js.map