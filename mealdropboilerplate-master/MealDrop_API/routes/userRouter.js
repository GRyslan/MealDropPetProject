const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyJWT} = require("../middlewares/authMiddleware");
router.get("/", verifyJWT,userController.getAllUsers);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
module.exports = router;
