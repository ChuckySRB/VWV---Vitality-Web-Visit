import express, { Response } from "express"
import CheckUpType from "../models/checkuptypes"

export class CheckUpTypesCotroller{
    addCheckUpType = (req: express.Request, res: express.Response)=>{
        const {
            specialization,
            name,
            duration,
            cost,
          } = req.body;
        
        const status = 'pending'

        // Create a new CheckUpType instance
        const newCheckUpType = new CheckUpType({
            specialization,
            name,
            duration,
            cost,
            status,
          });
        
        // Save the new checkup type to the database
        newCheckUpType.save((err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to add checkup type' });
          }
      
          // If successful, send the saved checkup type as a response
          res.json({message:'success'});
        });
    }
    confirmCheckUpType = (req: express.Request, res: express.Response) => {
        const checkUpTypeId = req.body._id; // Assuming you're sending the _id of the checkup type to confirm in the request body
        const status = req.body.status;
        // Update the status of the checkup type with the provided _id to 'confirmed'
        CheckUpType.findByIdAndUpdate(
          checkUpTypeId,
          { $set: { status: status } },
          { new: true },
          (err, updatedCheckUpType) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: 'Failed to confirm checkup type' });
            }
      
            // If successful, send the updated checkup type as a response
            res.json(updatedCheckUpType);
          }
        );
    };
      
    getCheckUpTypes = (req: express.Request, res: express.Response)=>{
        const specialization = req.body.specialization; // Assuming you're passing the specialization as a query parameter

        // Find all confirmed checkup types for the provided specialization
        CheckUpType.find({ specialization: specialization, status: 'confirmed' }, (err, confirmedCheckUpTypes) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to get confirmed checkup types' });
          }
      
          // If successful, send the confirmed checkup types as a response
          res.json(confirmedCheckUpTypes);
        });
    }
    allCheckUpTypes = (req: express.Request, res: express.Response)=>{
      CheckUpType.find({}, (err, checkups) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to get checkups' });
          }
      
          // If successful, send the checkups as a response
          res.json(checkups);
      });
    }
}