"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersCotroller = void 0;
const orders_1 = __importDefault(require("../models/orders"));
const extras_1 = __importDefault(require("../models/extras"));
class OrdersCotroller {
    constructor() {
        this.getOrders = (req, res) => {
            let user = req.body.user;
            if (user == null) {
                orders_1.default.find({}, (err, orders) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(orders);
                });
            }
            else {
                orders_1.default.find({ 'user': user }, (err, orders) => {
                    if (err)
                        console.log(err);
                    else
                        res.json(orders);
                });
            }
        };
        this.acceptOrder = (req, res) => {
            orders_1.default.updateOne({ 'id': req.body.id }, { $set: { 'status': req.body.status } }, (err, resp) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'Dodato' });
            });
        };
        this.makeOrder = (req, res) => {
            let user = req.body.user;
            let size = req.body.size;
            let extras = req.body.extras;
            for (let i of extras) {
                extras_1.default.findOne({ "name": i }, (err, extra) => {
                    if (err)
                        console.log(err);
                    else if (extra) {
                        let num = extra.amount - 1;
                        extras_1.default.updateOne({ "name": i }, { $set: { "amount": num } }, (err, resp) => {
                            if (err)
                                console.log(err);
                        });
                    }
                    else
                        console.log(i);
                });
            }
            orders_1.default.aggregate([{
                    $group: {
                        _id: null,
                        maxId: {
                            $max: '$id'
                        }
                    },
                }, {
                    $project: {
                        _id: 0
                    }
                }], (error, max_order) => {
                if (error)
                    console.log(error);
                else {
                    console.log(max_order);
                    let ID = max_order[0].maxId + 1;
                    let order = new orders_1.default({
                        id: ID,
                        user: user,
                        size: size,
                        status: "nova",
                        extras: extras,
                    });
                    order.save((err, resp) => {
                        if (err) {
                            console.log(err);
                            res.json({ "message": "error" });
                        }
                        else
                            res.json({ "message": "Dodata" });
                    });
                }
            });
        };
    }
}
exports.OrdersCotroller = OrdersCotroller;
//# sourceMappingURL=orders.controller.js.map