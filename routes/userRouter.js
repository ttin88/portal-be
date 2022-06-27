const userController = require("../controllers/userController.js");

const router = require("express").Router();

router.post("/user", userController.addUser);
router.get("/users", userController.getAllUsers);
router.get("/user/:id", userController.getSingleUser);

module.exports = router;
