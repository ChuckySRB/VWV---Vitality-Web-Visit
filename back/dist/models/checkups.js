"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// CheckUp model
const CheckUp = new mongoose_1.Schema({
    patient: { type: String },
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
    status: { type: String }
});
exports.default = (0, mongoose_1.model)('CheckUp', CheckUp, 'checkups');
//# sourceMappingURL=checkups.js.map