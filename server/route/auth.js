const express = require("express");
const router = express.Router();

const {signup , login , getUser} = require("../controller/Auth")
const {uploadScanner} = require("../controller/User")
const {auth}  = require("../middleware/authMiddleware")

router.post("/signup",signup);
router.post("/login",login);
router.get("/",auth,getUser);
router.post("/scanner",auth,uploadScanner);

module.exports = router;
