const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController.cjs")
const authMiddleware = require("../controllers/auth.cjs")

router.post("/register",controller.postUsers)
router.post("/login",controller.getUsers)
router.get("/users",authMiddleware,controller.getData)


module.exports= router