const express = require("express");
const router = express.Router();
const homeController = require("../controller/home");

router.get("/home", homeController.sendMessage);
router.post("/home", homeController.newTodo);

module.exports = router;
