"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtrasCotroller = void 0;
const extras_1 = __importDefault(require("../models/extras"));
class ExtrasCotroller {
    constructor() {
        this.getAll = (req, res) => {
            extras_1.default.find({}, (err, extras) => {
                if (err)
                    console.log(err);
                else
                    res.json(extras);
            });
        };
    }
}
exports.ExtrasCotroller = ExtrasCotroller;
//# sourceMappingURL=extras.controller.js.map