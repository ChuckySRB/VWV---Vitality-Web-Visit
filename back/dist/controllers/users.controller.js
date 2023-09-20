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
                else if (!user) {
                    res.json({ 'message': "Wrong Password or Username!" });
                }
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
                        image: user.image
                    });
            });
        };
        this.getDoctor = (req, res) => {
            let username = req.body.username;
            users_1.default.findOne({ 'username': username, 'type': 'doctor' }, (err, user) => {
                if (err)
                    console.log(err);
                else if (!user) {
                    res.json({ 'message': "Doktor sa datim korisnickim imenom ne postoji!" });
                }
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
                        image: user.image
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
                    let status = "active";
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
                        if (!image) {
                            image = (type == 'user') ? "../../../assets/image/user_default.png" : "../../../assets/image/doctor_default.png";
                        }
                        let doc_info = null;
                        if (type == "doctor") {
                            doc_info = {
                                license: req.body.license,
                                specialization: req.body.specialization,
                                department: req.body.department,
                                checkups: []
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
                            image: image,
                            status: status
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
        this.confirmUser = (req, res) => {
            const { username } = req.body;
            // Update the user status to 'active'
            users_1.default.updateOne({ username }, { status: 'active' }, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to confirm user' });
                }
                if (result.nModified === 0) {
                    // If no user was updated, it means the user with the provided username was not found
                    return res.status(404).json({ error: 'User not found' });
                }
                // User confirmation was successful
                res.json({ message: 'User confirmed successfully' });
            });
        };
        this.changeData = (req, res) => {
            // change the data of the user where username = body.username: name, surname, username, image, phone, if body.role = doctor  change (specialization, licence-code))
            // if some of the provided parameters are empty or "", dont change them
            const { username, name, surname, image, phone, role, specialization, licenseCode, } = req.body;
            // Create an object to hold the fields that need to be updated
            const updatedFields = {};
            // Check and update the fields if they are not empty or undefined
            if (name !== undefined && name !== '') {
                updatedFields.name = name;
            }
            if (surname !== undefined && surname !== '') {
                updatedFields.surname = surname;
            }
            if (image !== undefined && image !== '') {
                updatedFields.image = image;
            }
            if (phone !== undefined && phone !== '') {
                updatedFields.phone = phone;
            }
            if (role === 'doctor') {
                // If the user is a doctor, update specialization and licenseCode
                if (specialization !== undefined && specialization !== '') {
                    updatedFields['doctor_info.specialization'] = specialization;
                }
                if (licenseCode !== undefined && licenseCode !== '') {
                    updatedFields['doctor_info.license'] = licenseCode;
                }
            }
            // Update the user data where username matches
            users_1.default.updateOne({ username }, { $set: updatedFields }, (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ error: 'Failed to update user data' });
                }
                if (result.nModified === 0) {
                    // If no user was updated, it means the user with the provided username was not found
                    return res.status(404).json({ error: 'User not found' });
                }
                // User data update was successful
                res.json({ message: 'User data updated successfully' });
            });
        };
        this.updateCheckUps = (req, res) => {
            // where username = body.username, doctor_info.checkups = body.checkups
            const { username, checkups } = req.body;
            // Ensure that both `username` and `checkups` are provided
            if (!username || !checkups) {
                return res.status(400).json({ message: 'Username and checkups data are required.' });
            }
            // Update the checkups field for the user with the provided username
            users_1.default.updateOne({ username }, { 'doctor_info.checkups': checkups }, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Internal server error.' });
                }
                if (result.nModified === 0) {
                    return res.status(404).json({ message: 'User not found or checkups field not modified.' });
                }
                return res.status(200).json({ message: 'Checkups updated successfully.' });
            });
        };
    }
}
exports.UsersCotroller = UsersCotroller;
//# sourceMappingURL=users.controller.js.map