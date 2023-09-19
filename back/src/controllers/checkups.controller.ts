import express, { Response } from "express"
import CheckUp from "../models/checkups"
import Report from "../models/reports"

export class CheckUpsCotroller{
    getAllCheckUps = (req: express.Request, res: express.Response)=>{
        CheckUp.find({}, (err, checkups)=>{
            if(err) console.log(err)
            else res.json(checkups)
        })
    }
    
    createCheckUp = (req: express.Request, res: express.Response)=>{
        const { patient, doctor, type, datetime} = req.body; 
        const status = "scheduled"
        // Create a new CheckUp instance based on your CheckUp model
        const newCheckUp = new CheckUp({
            patient,
            doctor,
            type,
            datetime,
            status,
        });

        // Save the new CheckUp document to the database
        newCheckUp.save((err) => {
            if (err) {
            // Handle the error if the save operation fails
            console.error(err);
            return res.status(500).json({ error: 'Failed to create CheckUp' });
            }
            
            // If successful, send the created CheckUp document as a response
            res.status(201).json({message: 'success'});
        });
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
        const username = req.params.username; // Assuming you're sending the username as a route parameter

        // Find all checkups where checkup.patient = username && checkup.status = 'scheduled'
        CheckUp.find({ patient: username, status: 'scheduled' }, (checkUpErr, checkUps) => {
            if (checkUpErr) {
            console.error(checkUpErr);
            return res.status(500).json({ error: 'Failed to retrieve checkups' });
            }

            // Find all reports where report.checkup.patient = username
            Report.find({ 'checkup.patient': username }, (reportErr, reports) => {
            if (reportErr) {
                console.error(reportErr);
                return res.status(500).json({ error: 'Failed to retrieve reports' });
            }

            // Return the checkups and reports as JSON response
            res.json({ checkups: checkUps, reports: reports });
            });
        });
    }
    
    cancelCheckUp = (req: express.Request, res: express.Response)=>{
        const checkUpId = req.body._id; // Assuming you're sending the _id of the checkup to cancel in the request body

        // Update the status of the checkup with the provided _id to 'canceled'
        CheckUp.findByIdAndUpdate(
            checkUpId,
            { $set: { status: 'canceled' } },
            { new: true },
            (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to cancel checkup' });
            }

            // If successful, send the updated checkup as a response
            res.json({message: 'success'});
            }
        );
    }
}