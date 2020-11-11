import { getSupportedCodeFixes } from 'typescript';
import { v4 as uuidv4 } from 'uuid';
//TODO: LOOK INTO UUID
//TODO: LOOK INTO DATE

export interface DbBase {
    _id: string;
    isActive: boolean;
    createdBy: string;
    createdOn: Date;
    modifiedBy: string;
    modifiedOn: Date;
} 

export const initializeEntry = (employeeId: string = 'admin'): DbBase => {
    return {
        _id: uuidv4(),
        isActive: true,
        createdOn: new Date(),
        createdBy: employeeId,
        modifiedOn: new Date(),
        modifiedBy: employeeId
    }
}







//TODO: CREATE FUNCTION TO UPDATE DB OBJECT