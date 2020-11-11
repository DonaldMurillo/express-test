
export const base = {
    _id: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    createdBy: { type: String, required: true },
    createdOn: { type: Date, required: true },
    modifiedBy: { type: String, required: true },
    modifiedOn: { type: Date, required: true },
}

export const PersonBase = {
    ...base,
    name: { type: String, required: true },
    email: { type: String, required: true },
    phones: { type: [String], required: true },
    adresses: { type: [String], required: true },
    fax: { type: Number },
    company: { type: String },
    img: { type: String },
}