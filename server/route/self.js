const express = require("express");
const router = express.Router();

const {getSelf, addEntry} = require("../controller/Self");
const {auth} = require("../middleware/authMiddleware");

router.get("/",auth,getSelf);
router.post("/:selfId",auth,addEntry);

module.exports = router;
