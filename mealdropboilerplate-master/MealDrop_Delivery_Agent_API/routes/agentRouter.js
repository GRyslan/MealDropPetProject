const router = require("express").Router();
const agentController = require("../controllers/agentController");
router.post("/create", agentController.addAgent);
router.get("/showAll", agentController.getAllOrders);
module.exports = router;
