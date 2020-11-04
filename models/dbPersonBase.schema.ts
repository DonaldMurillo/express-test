import mongoose from 'mongoose';
import { Employee } from  './dbPersonBase.model'

interface IEmployee extends Employee {

};

interface employeeModelInterface extends mongoose.Model<EmployeeDoc> {
  build(attr: IEmployee): EmployeeDoc;
};

interface EmployeeDoc extends mongoose.Document {

};

const employeeSchema = new mongoose.Schema<Employee>({
    _id: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    createdBy: { type: String, required: true },
    createdOn: { type: Date, required: true },
    modifiedBy: { type: String, required: true },
    modifiedOn: { type: Date, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phones: { type: [String], required: true },
    adresses: { type: [String], required: true },
    fax: { type: Number },
    company: { type: String },
    img: { type: String },
    role: { type: String, required: true },
    cellPhone: { type: String, required: true }
});

employeeSchema.statics.build = (attr: IEmployee) => {
  return new EmployeeController(attr);
};


const EmployeeController = mongoose.model<EmployeeDoc, employeeModelInterface>('Employee', employeeSchema);

EmployeeController.build({
    _id: 'admin',
    isActive: true,
    createdBy: 'admin',
    createdOn: new Date(),
    modifiedBy: 'admin',
    modifiedOn: new Date(),
    name: 'admin',
    email: 'a@a.com',
    phones: ['1'],
    addresses: ['Calle Falsa # 123'],
    fax: '1',
    company: 'Axis Development',
    img: 'https://unpkg.com/ionicons@5.2.3/dist/svg/person-circle-outline.svg',
    role: 'admin',
    cellPhone: '1',
});

export { EmployeeController, employeeSchema }