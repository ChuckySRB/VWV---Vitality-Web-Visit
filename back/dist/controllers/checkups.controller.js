"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckUpsCotroller = void 0;
const checkups_1 = __importDefault(require("../models/checkups"));
const reports_1 = __importDefault(require("../models/reports"));
class CheckUpsCotroller {
    constructor() {
        this.getAllCheckUps = (req, res) => {
            checkups_1.default.find({}, (err, checkups) => {
                if (err)
                    console.log(err);
                else
                    res.json(checkups);
            });
        };
        this.createCheckUp = (req, res) => {
            const { patient, doctor, type, datetime } = req.body;
            const status = "scheduled";
            // Create a new CheckUp instance based on your CheckUp model
            const newCheckUp = new checkups_1.default({
                patient,
                doctor,
                type,
                datetime,
                status,
            });
            // Save the new CheckUp document to the database
            newCheckUp.save((err) => {
                if (err) {
                    // Handle the error if the save operation fails
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to create CheckUp' });
                }
                // If successful, send the created CheckUp document as a response
                res.status(201).json({ message: 'success' });
            });
        };
        this.getMyCheckUps = (req, res) => {
            const type = req.body.type;
            const user = req.body.username;
            if (type == 'doctor') {
                checkups_1.default.find({ 'doctor': user, 'status': 'scheduled' }).exec((err, checkUps) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(checkUps);
                });
            }
            else {
                checkups_1.default.find({ 'patient': user, 'status': 'scheduled' }).exec((err, checkUps) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(checkUps);
                });
            }
        };
        this.allMyReportsAndCheckUps = (req, res) => {
            const username = req.body.username; // Assuming you're sending the username as a route parameter
            // Find all checkups where checkup.patient = username && checkup.status = 'scheduled'
            checkups_1.default.find({ patient: username, status: 'scheduled' }, (checkUpErr, checkUps) => {
                if (checkUpErr) {
                    console.error(checkUpErr);
                    return res.status(500).json({ error: 'Failed to retrieve checkups' });
                }
                // Find all reports where report.checkup.patient = username
                reports_1.default.find({ 'checkup.patient': username }, (reportErr, reports) => {
                    if (reportErr) {
                        console.error(reportErr);
                        return res.status(500).json({ error: 'Failed to retrieve reports' });
                    }
                    // Return the checkups and reports as JSON response
                    res.json({ checkups: checkUps, reports: reports });
                });
            });
        };
        this.cancelCheckUp = (req, res) => {
            const checkUpId = req.body._id; // Assuming you're sending the _id of the checkup to cancel in the request body
            // Update the status of the checkup with the provided _id to 'canceled'
            checkups_1.default.findByIdAndUpdate(checkUpId, { $set: { status: 'canceled' } }, { new: true }, (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to cancel checkup' });
                }
                // If successful, send the updated checkup as a response
                res.json({ message: 'success' });
            });
        };
    }
}
exports.CheckUpsCotroller = CheckUpsCotroller;
//# sourceMappingURL=checkups.controller.js.map