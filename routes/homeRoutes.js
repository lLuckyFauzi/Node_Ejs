const express = require("express");
const router = express.Router();
const homeController = require("../controller/home");

router.get("/", homeController.sendMessage);
router.post("/", homeController.newTodo);

module.exports = router;
