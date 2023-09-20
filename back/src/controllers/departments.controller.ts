import express, { Response } from "express"
import Department from "../models/department"
import Specialization from "../models/specialization"

export class DepartmentsController{


    addDepartment = (req: express.Request, res: express.Response)=>{
        const newDepartmentData = req.body; // Assuming you're sending the new department data in the request body

        // Create a new Department instance using the provided data
        const newDepartment = new Department(newDepartmentData);

        // Save the new department to the database
        newDepartment.save((err) => {
            if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to add department' });
            }

            // If successful, send the saved department as a response
            res.json({message:"success"});
        });
    }
    allDepartments = (req: express.Request, res: express.Response)=>{
        Department.find({}, (err, departments) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: 'Failed to get departments' });
            }
        
            // If successful, send the departments as a response
            res.json(departments);
        });
    }
    deleteDepartment = (req: express.Request, res: express.Response)=>{
        const { department } = req.body; 
        
        // Delete the department with the provided name
        Department.deleteOne({ name: department }, (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to delete department' });
          }
      
          // If successful, send a success message as a response
          res.json({ message: 'Department deleted successfully' });
        });
    }

    allSpezializations = (req: express.Request, res: express.Response)=>{
      Specialization.find({}, (err, specs) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to get specializations' });
          }
      
          // If successful, send the departments as a response
          res.json(specs);
      });
  }
  addSpezialization = (req: express.Request, res: express.Response)=>{
    const newSpec = req.body
    
    // Create a new Specialization instance using the provided data
    const spec = new Specialization(newSpec);

    // Save the new Specialization to the database
    spec.save((err) => {
        if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to add department' });
        }

        // If successful, send the saved Specialization as a response
        res.json({message:"success"});
    });
}
}