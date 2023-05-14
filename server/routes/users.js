var express = require("express");
var UserController = require("../controllers/userController");

var router = express();

router.get("/", UserController.getAllUsers);

module.exports = router;
