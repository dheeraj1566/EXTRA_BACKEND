import {formDetails} from "../models/modelschema.js"

export async function postData(req, res) {
    try {
        
        const { id, name, fName, email, password, phone, address } = req.body;

        // const existingUser = await formDetails.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).json({ message: "Email already registered" });
        // }
        const newData = new formDetails({
            id,
            name,
            fName,
            email,
            password,
            phone,
            address
        });

        await newData.save();
        res.status(201).json({ message: "Data Saved Successfully", data: newData });
    } catch (error) {
        res.status(500).json({ message: "Error saving data", error: error.message });
    }
}
