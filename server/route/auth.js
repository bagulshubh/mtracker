const express = require("express");
const router = express.Router();

const {signup , login , getUser} = require("../controller/Auth")
const {auth}  = require("../middleware/authMiddleware")

router.post("/signup",signup);
router.post("/login",login);
router.get("/",auth,getUser);

module.exports = router;
