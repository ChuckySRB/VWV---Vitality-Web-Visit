import express from "express"
import User from "../models/users"

export class UsersCotroller{
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        User.findOne({'username': username, 'password': password}, (err, user) => {
            if(err) console.log(err);
            else res.json(user)
        })
    }

    register = (req: express.Request, res: express.Response)=>{

        let name =  req.body.name
        let surname = req.body.surname
        let username = req.body.username
        let password = req.body.password
        let type = req.body.type
        let email = req.body.email
        let phone = req.body.phone
        // let image = req.body.image
        let doc_info = null
        if (type == "doctor"){
            doc_info = {
                license: req.body.license,
                specialization: req.body.specialization,
                department: req.body.department
            }
        }
        let user = new User({
            username: username,
            email: email,
            password: password,
            type: type,
            phone: phone,
            name: name,
            surname: surname,
            doctor_info: doc_info
        })

        user.save((err, resp)=>{
            if(err) {
                console.log(err);
                res.status(400).json({"message": "error"})
            }
            else res.json({"message": "ok"})
        })
    }
}