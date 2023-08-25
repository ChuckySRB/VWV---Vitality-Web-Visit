"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// CheckUp model
const CheckUp = new mongoose_1.Schema({
    patient: { type: String },
    doctor: { type: String },
    type: { type: String },
    datetime: { type: Date },
    duration: { type: String },
    status: { type: String }
});
exports.default = (0, mongoose_1.model)('CheckUp', CheckUp, 'checkups');
//# sourceMappingURL=checkups.js.map