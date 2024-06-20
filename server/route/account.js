const express = require("express");
const router = express.Router();

const {createAccount,createEntry,getAllAccounts,getAccountById , deleteAccount} = require("../controller/Account")
const {auth} = require("../middleware/authMiddleware")

router.post("/create",auth,createAccount);
router.post("/entry",auth,createEntry);
router.get("/:id",auth,getAccountById);
router.get("/",auth,getAllAccounts);
router.delete("/:id",auth,deleteAccount);

module.exports = router;
