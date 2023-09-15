"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Depetartment model
const Department = new mongoose_1.Schema({
    name: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('Department', Department, 'departments');
//# sourceMappingURL=department.js.map