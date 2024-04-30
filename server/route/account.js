const express = require("express");
const router = express.Router();

const {createAccount,createEntry,getAllAccounts,getAccountById} = require("../controller/Account")
const {auth} = require("../middleware/authMiddleware")

router.post("/create",auth,createAccount);
router.post("/entry",auth,createEntry);
router.get("/:id",auth,getAccountById)
router.get("/",auth,getAllAccounts)

module.exports = router;
