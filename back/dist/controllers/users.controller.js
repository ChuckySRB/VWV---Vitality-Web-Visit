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
        this.register = (req, res) => {
            let name = req.body.name;
            let surname = req.body.surname;
            let username = req.body.username;
            let password = req.body.password;
            let type = req.body.type;
            let email = req.body.email;
            let phone = req.body.phone;
            // let image = req.body.image
            let doc_info = null;
            if (type == "doctor") {
                doc_info = {
                    license: req.body.license,
                    specialization: req.body.specialization,
                    department: req.body.department
                };
            }
            let user = new users_1.default({
                username: username,
                email: email,
                password: password,
                type: type,
                phone: phone,
                name: name,
                surname: surname,
                doctor_info: doc_info
            });
            user.save((err, resp) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else
                    res.json({ "message": "ok" });
            });
        };
    }
}
exports.UsersCotroller = UsersCotroller;
//# sourceMappingURL=users.controller.js.map