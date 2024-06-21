const express = require("express");
const router = express.Router();

const {createAccount,createEntry,getAllAccounts,getAccountById , deleteAccount , getEntry, editEntry, deleteEntry} = require("../controller/Account")
const {auth} = require("../middleware/authMiddleware")

router.post("/create",auth,createAccount);
router.post("/entry",auth,createEntry);
router.get("/entry/:id",getEntry);
router.get("/:id",auth,getAccountById);
router.get("/",auth,getAllAccounts);
router.delete("/:id",auth,deleteAccount);
router.put("/entry/:id",editEntry);
router.delete("/entry/:id",deleteEntry);

module.exports = router;
