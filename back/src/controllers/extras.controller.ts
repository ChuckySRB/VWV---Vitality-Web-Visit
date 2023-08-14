import express from "express"
import Extras from "../models/extras"

export class ExtrasCotroller{
    getAll = (req: express.Request, res: express.Response) => {
        Extras.find({}, (err, extras) => {
            if (err) console.log(err)
            else res.json(extras)
        })
    }
}