import express, { Response } from "express"
import CheckUp from "../models/checkups"

export class CheckUpsCotroller{
    getAllCheckUps = (req: express.Request, res: express.Response)=>{
        CheckUp.find({}, (err, checkups)=>{
            if(err) console.log(err)
            else res.json(checkups)
        })
    }
    
    createCheckUp = (req: express.Request, res: express.Response)=>{
        
    }

    getMyCheckUps = (req: express.Request, res: express.Response)=>{
        const type = req.body.type;
        const user = req.body.user;
        if (type == 'doctor'){
            CheckUp.find({'doctor':user}).exec((err, checkUps)=>{
                if (err) console.log(err)
                else res.json(checkUps)
            })
        }
        else {
            CheckUp.find({'patient':user}).exec((err, checkUps)=>{
                if (err) console.log(err)
                else res.json(checkUps)
            })
        }
    }
    allMyReportsAndCheckUps = (req: express.Request, res: express.Response)=>{
        
    }
    cancelCheckUp = (req: express.Request, res: express.Response)=>{
        
    }
}