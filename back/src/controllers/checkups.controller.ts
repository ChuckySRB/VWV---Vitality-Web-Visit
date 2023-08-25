import e from "express"
import express, { Response } from "express"
import CheckUp from "../models/checkups"

export class CheckUpsCotroller{
    getAllCheckUps = (req: express.Request, res: express.Response)=>{
        CheckUp.find({}, (err, checkups)=>{
            if(err) console.log(err)
            else res.json(checkups)
        })
    }   

    /*
    getOrders = (req: express.Request, res: express.Response)=>{
        let user = req.body.user
        if (user == null){
            Orders.find({}, (err, orders)=>{
                if (err) console.log(err)
                else
                    res.json(orders)
            })
        }
        else {

            Orders.find({'user': user}, (err, orders)=>{
                if (err) console.log(err)
                else
                    res.json(orders)
            })
    }   
    }

    acceptOrder = (req: express.Request, res: express.Response)=>{
        Orders.updateOne({'id': req.body.id}, {$set:{'status': req.body.status}}, (err, resp)=>{
            if (err) console.log(err)
            else res.json({'message': 'Dodato'})
        })
    }
    makeOrder = (req: express.Request, res: express.Response)=>{
        let user = req.body.user
        let size = req.body.size
        let extras = req.body.extras 
        for (let i of extras){
            Extras.findOne({"name":i}, (err, extra)=>{
                if(err) console.log(err)
                else if (extra){
                    let num = extra.amount-1
                    Extras.updateOne({"name":i}, {$set:{"amount":num}}, (err, resp)=>{
                        if(err) console.log(err)  
                    })
                }
                else console.log(i)
                
            })
        }

        Orders.aggregate(
            [{
                $group:{
                    _id: null,
                    maxId:{
                        $max: '$id'
                    }
                },
                
            }, {
                $project:{
                    _id: 0
                }
            }], (error, max_order) =>{
                if (error) console.log(error)
                else{

                    console.log(max_order)
                    let ID = max_order[0].maxId+1
                    let order = new Orders(
                    {
                        id: ID,
                        user: user,
                        size: size,
                        status: "nova",
                        extras: extras,
                    }
                )
            
                    order.save((err, resp)=>{
                        if(err){
                            console.log(err)
                            res.json({"message": "error"})
                        }
                        else res.json({"message": "Dodata"})
                    })}
                }
        )

        
    }
    */
}