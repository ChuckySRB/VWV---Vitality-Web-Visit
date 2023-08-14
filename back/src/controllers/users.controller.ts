import express from "express"
import Users from "../models/users"

export class UsersCotroller{
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        Users.findOne({'username': username, 'password': password}, (err, user) => {
            if(err) console.log(err);
            else res.json(user)
        })
    }

    test = (req: express.Request, res: express.Response)=>{
        Users.findOne({'username': 'ana'}, (err, user)=>{
            if(err || !user)  res.send("Nema Ane :(")
            else res.send(user.password)
        })
    }
}