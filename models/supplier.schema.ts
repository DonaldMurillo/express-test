import mongoose from 'mongoose';
import { Supplier, SupplierContact } from  './dbPersonBase.model'
import { PersonBase } from './dbBase.schema'

interface ISupplier extends Supplier {

};

interface supplierModelInterface extends mongoose.Model<SupplierDoc> {
  build(attr: ISupplier): SupplierDoc;
};

interface SupplierDoc extends mongoose.Document {

};

const supplierContactSchema = new mongoose.Schema<SupplierContact>({
    ...PersonBase,
    role: { type: String, required: true },
    cellPhone: { type: String, required: true }
})

const supplierSchema = new mongoose.Schema<Supplier>({
    ...PersonBase,
    items: { type: [String], required: true },
    website: { type: String },
    contacts: [supplierContactSchema]
    // contacts: { type: [supplierContactSchema]}
});

supplierSchema.statics.build = (attr: ISupplier) => {
  return new SupplierController(attr);
};


const SupplierController = mongoose.model<SupplierDoc, supplierModelInterface>('Supplier', supplierSchema);

SupplierController.build({
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
    items: [],
    website: 'google.com',
    contacts: []
});

export { SupplierController, supplierSchema }