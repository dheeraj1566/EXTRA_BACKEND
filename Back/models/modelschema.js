import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    id: { type: String},
    name: { type: String},
    fName: { type: String},
    email: { type: String},
    password: { type: String},
    phone: { type: String},
    address: { type: String}
});

export const formDetails = mongoose.model("formDetails", formSchema);
