const router = require("express").Router();
const restaurantController = require("../controllers/restaurantController");
router.post("/create", restaurantController.addRestaurant);
router.get("/showAll", restaurantController.getAllRestaurants);
router.get("/showAll/:id", restaurantController.getOneRestaurant);
router.delete("/:id", restaurantController.deleteOneRestaurant);
router.put("/:id",restaurantController.updateOneRestaurant)
router.post("/send", restaurantController.sendOrderToAgent);
module.exports = router;
