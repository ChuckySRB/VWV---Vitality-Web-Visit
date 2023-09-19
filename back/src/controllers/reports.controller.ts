import express, { Response } from "express"
import Report from "../models/reports"

export class ReportsController{
    addReport = (req: express.Request, res: express.Response)=>{
        const {
            checkup,
            reason_for_coming,
            diagnose,
            therapy,
            next_checkup,
          } = req.body;
        
          // Create a new report instance
          const newReport = new Report({
            checkup,
            reason_for_coming,
            diagnose,
            therapy,
            next_checkup,
          });
        
          // Save the new report to the database
          newReport.save((err, savedReport) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: 'Failed to add report' });
            }
        
            // If successful, send the saved report as a response
            res.json({message: 'success'});
          });
    }
    allMyReports = (req: express.Request, res: express.Response)=>{
        // get all reports where 
    }
}