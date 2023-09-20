import express, { Response } from "express"
import Department from "../models/department"

export class DepartmentsController{


    addDepartment = (req: express.Request, res: express.Response)=>{
        const newDepartmentData = req.body; // Assuming you're sending the new department data in the request body

        // Create a new Department instance using the provided data
        const newDepartment = new Department(newDepartmentData);

        // Save the new department to the database
        newDepartment.save((err, savedDepartment) => {
            if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to add department' });
            }

            // If successful, send the saved department as a response
            res.json(savedDepartment);
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
}