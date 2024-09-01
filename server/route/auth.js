const express = require("express");
const router = express.Router();

const {signup , login  } = require("../controller/Auth")
const {uploadScanner ,getUser} = require("../controller/User")
const {auth}  = require("../middleware/authMiddleware");
const { userCache } = require("../middleware/redisMiddleware");

router.post("/signup",signup);
router.post("/login",login);
router.get("/:skip",auth,getUser);
router.post("/scanner",auth,uploadScanner);

module.exports = router;
