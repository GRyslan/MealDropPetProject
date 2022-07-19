const router = require("express").Router();
const restaurantController = require("../controllers/restaurantController");
router.post("/create", restaurantController.addRestaurant);
router.get("/showAll", restaurantController.getAllRestaurants);
router.post("/send", restaurantController.sendOrderToAgent);
module.exports = router;
