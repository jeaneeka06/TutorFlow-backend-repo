const router = require("express").Router();
const { getAISuggestions } = require("../controllers/aiController");

router.post("/", getAISuggestions);

module.exports = router;
