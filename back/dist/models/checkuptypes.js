"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// CheckUp model
const CheckUpType = new mongoose_1.Schema({
    specialization: { type: String },
    name: { type: String },
    duration: { type: Number },
    cost: { type: Number },
    status: { type: String }
});
exports.default = (0, mongoose_1.model)('CheckUpType', CheckUpType, 'checkuptypes');
//# sourceMappingURL=checkuptypes.js.map