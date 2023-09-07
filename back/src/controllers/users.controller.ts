import express from "express"
import User from "../models/users"

export class UsersCotroller{
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        User.findOne({'username': username, 'password': password}, (err, user) => {
            if(err) console.log(err);
            else if (user.status != "active") {
                console.log("User not active!")
                res.json({'message': "User not active!"})
            }
            else res.json({
                username: user.username,
                email: user.email,
                type: user.type,
                phone: user.phone,
                name: user.name,
                surname: user.surname,
                doctor_info: user.doctor_info,
                image: user.image,
                status: "pending"   
            })

        })
    }

    register = (req: express.Request, res: express.Response)=>{
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&][A-Za-z\d@$!%*?&]*$/;

        //Provera Username
        let username = req.body.username
        let email = req.body.email
        
        User.findOne({ $or: [{'username': username}, { 'email': email }] }, (err, user) => {
            if (user){
                console.log("User already in the database!")
                res.json({"message": "User already in the database!"})
            }
            else{
                 // Provera lozinke
                let password = req.body.password
                let isValidRegex = passwordRegex.test(password);
                let lenght = password.length
                let isNotValidLenght = lenght < 8 || lenght > 12
                let isValidDouble = true
                
                for(let i = 0, j = 1; j < lenght; i++, j++){
                    if (password[i] == password[j]){
                        isValidDouble = false
                        break
                    }
                }

                if (!isValidRegex || isNotValidLenght || !isValidDouble) {
                    console.log("Password is not valid.")
                    res.json({"message": "Password is not strong enough!"})
                }
                else{
                    let type = req.body.type
                    let phone = req.body.phone
                    let name =  req.body.name
                    let surname = req.body.surname
                    let image = req.body.image
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
                        doctor_info: doc_info,
                        image: image
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
        })
    }
}