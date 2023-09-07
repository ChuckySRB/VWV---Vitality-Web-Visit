"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// User model
const User = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    name: { type: String },
    surname: { type: String },
    doctor_info: {
        license: { type: String },
        specialization: { type: String },
        department: { type: String }
    },
    image: { type: String },
    status: { type: String }
});
exports.default = (0, mongoose_1.model)('User', User, 'users');
//# sourceMappingURL=users.js.map