import Service from "../models/Service.js";

export const createService = async (req, res) => {
    try {
        const service = await Service.create(req.body);
        res.status(201).json(service);
    } catch (error) {
        console.error("Create Service Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        console.error("Get Services Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const updateService = async (req, res) => {
    try {
        const updated = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        console.error("Update Service Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const deleteService = async (req, res) => {
    try {
        await Service.findByIdAndDelete(req.params.id);
        res.json({ message: "Service deleted" });
    } catch (error) {
        console.error("Delete Service Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
