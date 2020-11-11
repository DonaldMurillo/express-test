import express, { Request, Response } from 'express';
import { initializeEntry } from '../models/dbBase.model';
import { Supplier, SupplierContact } from '../models/dbPersonBase.model';
import { SupplierController } from '../models/supplier.schema'

const router = express.Router();
const path: string = '/api/v1/suppliers';

router.get(path, async (req: Request, res: Response) => {
    const suppliers = await SupplierController.find();
    const allSuppliers = suppliers.map(e => {
            let val = JSON.parse(JSON.stringify(e)); // {prop: 'val', pop2: 'val2}
            delete val.__v;
            return val as Supplier;
        }
    );
    return res.status(200).send(allSuppliers);
});

router.post(path + '/add', async (req: Request, res: Response) => {
    //TODO: ADD A METHOD TO GENERATE CREATED/MODIFIED INFO
    //TODO: RECIEVE EMPLOYEE INFO AND USE IT IN initializeEntry(user)
    let newSupplier= { ...req.body, ...initializeEntry() } as Supplier;
    newSupplier = {...newSupplier, contacts: newSupplier.contacts?.map(c => {return {...c, ...initializeEntry()}})}
    console.log(newSupplier);
    const supplier = SupplierController.build(newSupplier);
    await supplier.save().catch((e => {
        console.log(e);
        return res.status(500).send("Error creating supplier")
    }));

    return res.status(201).send(supplier);
});

//TODO: ADD AND REMOVE ITEMS TO LIST
//TODO: ADD AND REMOVE CONTACTS FROM LIST
//TODO: UPDATE CONTACTS
//TODO: UPDATE COMPANY

export { router as supplierRouter }