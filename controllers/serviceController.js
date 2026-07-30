const Service = require("../models/Service");

exports.createService = async (req, res) => {
    const service = await Service.create(req.body);
    res.json(service);
};

exports.getServices = async (req, res) => {
    const services = await Service.find();
    res.json(services);
};

exports.updateService = async (req, res) => {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

exports.deleteService = async (req, res) => {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted" });
};
