"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckUpTypesCotroller = void 0;
const checkuptypes_1 = __importDefault(require("../models/checkuptypes"));
class CheckUpTypesCotroller {
    constructor() {
        this.addCheckUpType = (req, res) => {
            const { specialization, name, duration, cost, } = req.body;
            const status = 'pending';
            // Create a new CheckUpType instance
            const newCheckUpType = new checkuptypes_1.default({
                specialization,
                name,
                duration,
                cost,
                status,
            });
            // Save the new checkup type to the database
            newCheckUpType.save((err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to add checkup type' });
                }
                // If successful, send the saved checkup type as a response
                res.json({ message: 'success' });
            });
        };
        this.confirmCheckUpType = (req, res) => {
            const checkUpTypeId = req.body._id; // Assuming you're sending the _id of the checkup type to confirm in the request body
            // Update the status of the checkup type with the provided _id to 'confirmed'
            checkuptypes_1.default.findByIdAndUpdate(checkUpTypeId, { $set: { status: 'confirmed' } }, { new: true }, (err, updatedCheckUpType) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to confirm checkup type' });
                }
                // If successful, send the updated checkup type as a response
                res.json(updatedCheckUpType);
            });
        };
        this.getCheckUpTypes = (req, res) => {
            const specialization = req.body.specialization; // Assuming you're passing the specialization as a query parameter
            // Find all confirmed checkup types for the provided specialization
            checkuptypes_1.default.find({ specialization: specialization, status: 'confirmed' }, (err, confirmedCheckUpTypes) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to get confirmed checkup types' });
                }
                // If successful, send the confirmed checkup types as a response
                res.json(confirmedCheckUpTypes);
            });
        };
    }
}
exports.CheckUpTypesCotroller = CheckUpTypesCotroller;
//# sourceMappingURL=checkuptypes.controller.js.map