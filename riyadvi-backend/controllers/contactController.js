import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {

    try {

        const contact = new Contact(req.body);

        await contact.save();

        res.status(201).json({
            success: true,
            message: "Contact saved successfully",
            data: contact
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

};