
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

//TODO: CREATE FUNCTION TO CREATE DB OBJECT