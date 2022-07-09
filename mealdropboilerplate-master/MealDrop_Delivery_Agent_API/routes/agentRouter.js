const router = require("express").Router();
const agentController = require("../controllers/agentController");
router.post("/create", agentController.addAgent);

module.exports = router;
