"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// CheckUp model
const Report = new mongoose_1.Schema({
    checkup: { patient: { type: String },
        doctor: { type: String },
        type: {
            _id: { type: String },
            specialization: { type: String },
            name: { type: String },
            duration: { type: Number },
            cost: { type: Number },
            status: { type: String }
        },
        datetime: { type: Date },
        status: { type: String } },
    reason_for_comming: { type: String },
    diagnose: { type: String },
    terrapy: { type: String },
    next_checkup: { type: Date }
});
exports.default = (0, mongoose_1.model)('Report', Report, 'reports');
//# sourceMappingURL=reports.js.map