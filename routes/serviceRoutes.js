const router = require("express").Router();
const {
    createService,
    getServices,
    updateService,
    deleteService
} = require("../controllers/serviceController");

router.post("/", createService);
router.get("/", getServices);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

module.exports = router;
