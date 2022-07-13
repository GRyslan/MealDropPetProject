const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyJWT} = require("../middlewares/authMiddleware");
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.post("/refresh",userController.refresh)
router.get("/", verifyJWT, userController.getAllUsers);
module.exports = router;
