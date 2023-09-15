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
                else if (user.status != "active") {
                    console.log("User not active!");
                    res.json({ 'message': "User not active!" });
                }
                else
                    res.json({
                        username: user.username,
                        email: user.email,
                        type: user.type,
                        phone: user.phone,
                        name: user.name,
                        surname: user.surname,
                        doctor_info: user.doctor_info,
                        image: user.image,
                        status: "pending"
                    });
            });
        };
        this.register = (req, res) => {
            const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&][A-Za-z\d@$!%*?&]*$/;
            //Provera Username
            let username = req.body.username;
            let email = req.body.email;
            users_1.default.findOne({ $or: [{ 'username': username }, { 'email': email }] }, (err, user) => {
                if (user) {
                    console.log("User already in the database!");
                    res.json({ "message": "User already in the database!" });
                }
                else {
                    // Provera lozinke
                    let password = req.body.password;
                    let isValidRegex = passwordRegex.test(password);
                    let lenght = password.length;
                    let isNotValidLenght = lenght < 8 || lenght > 12;
                    let isValidDouble = true;
                    for (let i = 0, j = 1; j < lenght; i++, j++) {
                        if (password[i] == password[j]) {
                            isValidDouble = false;
                            break;
                        }
                    }
                    if (!isValidRegex || isNotValidLenght || !isValidDouble) {
                        console.log("Password is not valid.");
                        res.json({ "message": "Password is not strong enough!" });
                    }
                    else {
                        let type = req.body.type;
                        let phone = req.body.phone;
                        let name = req.body.name;
                        let surname = req.body.surname;
                        let image = req.body.image;
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
                            doctor_info: doc_info,
                            image: image
                        });
                        user.save((err, resp) => {
                            if (err) {
                                console.log(err);
                                res.status(400).json({ "message": "error" });
                            }
                            else
                                res.json({ "message": "ok" });
                        });
                    }
                }
            });
        };
        this.allDoctors = (req, res) => {
            users_1.default.find({ 'type': 'doctor' }).select('-password').exec((err, doctors) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ "message": "error" });
                }
                else {
                    res.json(doctors);
                }
            });
        };
    }
}
exports.UsersCotroller = UsersCotroller;
//# sourceMappingURL=users.controller.js.map