import express, { Request, Response } from 'express';
import { Employee } from '../models/dbPersonBase.model';
import { EmployeeController } from '../models/dbPersonBase.schema'

const router = express.Router();
const path: string = '/api/v1/employees';

router.get(path, async (req: Request, res: Response) => {
    const employees = await EmployeeController.find();
    const allEmp = employees.map(e => {
            let val = JSON.parse(JSON.stringify(e)); // {prop: 'val', pop2: 'val2}
            delete val.__v;
            return val as Employee;
        }
    );
    return res.status(200).send(allEmp);
});

router.post(path, async (req: Request, res: Response) => {
    //TODO: ADD A METHOD TO GENERATE CREATED/MODIFIED INFO
    const newEmp  = {...req.body} as Employee;
    console.log(newEmp);
    const employee = EmployeeController.build(newEmp);
    await employee.save().catch((e => {
        console.log(e);
        return res.status(500).send("Error creating employee")
    }));

    return res.status(201).send(employee);
});

export { router as employeeRouter }