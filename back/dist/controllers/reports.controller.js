"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsController = void 0;
const reports_1 = __importDefault(require("../models/reports"));
class ReportsController {
    constructor() {
        this.addReport = (req, res) => {
            const { checkup, reason_for_coming, diagnose, therapy, next_checkup, } = req.body;
            // Create a new report instance
            const newReport = new reports_1.default({
                checkup,
                reason_for_coming,
                diagnose,
                therapy,
                next_checkup,
            });
            // Save the new report to the database
            newReport.save((err, savedReport) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to add report' });
                }
                // If successful, send the saved report as a response
                res.json({ message: 'success' });
            });
        };
        this.allMyReports = (req, res) => {
            // get all reports where 
        };
    }
}
exports.ReportsController = ReportsController;
//# sourceMappingURL=reports.controller.js.map