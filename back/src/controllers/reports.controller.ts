import express, { Response } from "express"
import Report from "../models/reports"
import CheckUp from "../models/checkups"

export class ReportsController{
    addReport = (req: express.Request, res: express.Response)=>{
        const {
            checkup,
            reason_for_comming,
            diagnose,
            therapy,
            next_checkup,
          } = req.body;
        
          // Create a new report instance
          const newReport = new Report({
            checkup,
            reason_for_comming,
            diagnose,
            terrapy: therapy,
            next_checkup,
          });
        
          // Save the new report to the database
          newReport.save((err) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: 'Failed to add report' });
            }
            let checkUpId=checkup._id
            // Update the status of the checkup with the provided _id to 'canceled'
            CheckUp.findByIdAndUpdate(
              checkUpId,
              { $set: { status: 'done' } },
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
          });
    }
    allMyReports = (req: express.Request, res: express.Response)=>{
        let username = req.body.username
        // Find all reports where report.checkup.patient = username
        Report.find({ 'checkup.patient': username }, (reportErr, reports) => {
          if (reportErr) {
              console.error(reportErr);
              return res.status(500).json({ error: 'Failed to retrieve reports' });
          }

          // Return the checkups and reports as JSON response
          res.json(reports);
          });
    }
}