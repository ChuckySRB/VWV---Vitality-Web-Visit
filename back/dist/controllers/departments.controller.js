"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsController = void 0;
const department_1 = __importDefault(require("../models/department"));
class DepartmentsController {
    constructor() {
        this.addDepartment = (req, res) => {
            const newDepartmentData = req.body; // Assuming you're sending the new department data in the request body
            // Create a new Department instance using the provided data
            const newDepartment = new department_1.default(newDepartmentData);
            // Save the new department to the database
            newDepartment.save((err, savedDepartment) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to add department' });
                }
                // If successful, send the saved department as a response
                res.json(savedDepartment);
            });
        };
        this.allDepartments = (req, res) => {
            department_1.default.find({}, (err, departments) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to get departments' });
                }
                // If successful, send the departments as a response
                res.json(departments);
            });
        };
        this.deleteDepartment = (req, res) => {
            const { department } = req.body;
            // Delete the department with the provided name
            department_1.default.deleteOne({ name: department }, (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to delete department' });
                }
                // If successful, send a success message as a response
                res.json({ message: 'Department deleted successfully' });
            });
        };
    }
}
exports.DepartmentsController = DepartmentsController;
//# sourceMappingURL=departments.controller.js.map