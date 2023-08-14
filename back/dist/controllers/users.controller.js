"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCotroller = void 0;
const users_1 = __importDefault(require("../models/users"));
class UsersCotroller {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            users_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.test = (req, res) => {
            users_1.default.findOne({ 'username': 'ana' }, (err, user) => {
                if (err || !user)
                    res.send("Nema Ane :(");
                else
                    res.send(user.password);
            });
        };
    }
}
exports.UsersCotroller = UsersCotroller;
//# sourceMappingURL=users.controller.js.map