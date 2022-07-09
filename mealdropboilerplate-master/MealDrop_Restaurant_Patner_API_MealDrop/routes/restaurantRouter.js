const router = require("express").Router();
const restaurantController = require("../controllers/restaurantController");
router.post("/create", restaurantController.addRestaurant);
router.post("/send", restaurantController.sendOrderToAgent);
module.exports = router;
