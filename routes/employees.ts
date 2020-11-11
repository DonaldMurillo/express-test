import express, { Request, Response } from 'express';
import { initializeEntry } from '../models/dbBase.model';
import { Employee } from '../models/dbPersonBase.model';
import { EmployeeController } from '../models/employee.schema'

const router = express.Router();
const path: string = '/api/v1/employees';

router.get(path, async (req: Request, res: Response) => {
    const employees = await EmployeeController.find();
    const allEmployees = employees.map(e => {
            let val = JSON.parse(JSON.stringify(e)); // {prop: 'val', pop2: 'val2}
            delete val.__v;
            return val as Employee;
        }
    );
    return res.status(200).send(allEmployees);
});

router.post(path + '/add', async (req: Request, res: Response) => {
    //TODO: ADD A METHOD TO GENERATE CREATED/MODIFIED INFO
    const newEmp  = {...req.body, ...initializeEntry()} as Employee;
    console.log(newEmp);
    const employee = EmployeeController.build(newEmp);
    await employee.save().catch((e => {
        console.log(e);
        return res.status(500).send("Error creating employee")
    }));

    return res.status(201).send(employee);
});

export { router as employeeRouter }