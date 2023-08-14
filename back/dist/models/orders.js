"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Order = new Schema({
    id: {
        type: Number
    },
    user: {
        type: String
    },
    size: {
        type: String
    },
    status: {
        type: String
    },
    extras: [String]
});
exports.default = mongoose_1.default.model('Orders', Order, 'orders');
//# sourceMappingURL=orders.js.map