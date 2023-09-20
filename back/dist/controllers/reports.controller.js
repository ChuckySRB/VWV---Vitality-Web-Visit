"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsController = void 0;
const reports_1 = __importDefault(require("../models/reports"));
const checkups_1 = __importDefault(require("../models/checkups"));
class ReportsController {
    constructor() {
        this.addReport = (req, res) => {
            const { checkup, reason_for_comming, diagnose, therapy, next_checkup, } = req.body;
            // Create a new report instance
            const newReport = new reports_1.default({
                checkup,
                reason_for_comming,
                diagnose,
                terrapy: therapy,
                next_checkup,
            });
            // Save the new report to the database
            newReport.save((err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to add report' });
                }
                let checkUpId = checkup._id;
                // Update the status of the checkup with the provided _id to 'canceled'
                checkups_1.default.findByIdAndUpdate(checkUpId, { $set: { status: 'done' } }, { new: true }, (err) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ error: 'Failed to cancel checkup' });
                    }
                    // If successful, send the updated checkup as a response
                    res.json({ message: 'success' });
                });
            });
        };
        this.allMyReports = (req, res) => {
            let username = req.body.username;
            // Find all reports where report.checkup.patient = username
            reports_1.default.find({ 'checkup.patient': username }, (reportErr, reports) => {
                if (reportErr) {
                    console.error(reportErr);
                    return res.status(500).json({ error: 'Failed to retrieve reports' });
                }
                // Return the checkups and reports as JSON response
                res.json(reports);
            });
        };
    }
}
exports.ReportsController = ReportsController;
//# sourceMappingURL=reports.controller.js.map