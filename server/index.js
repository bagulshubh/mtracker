const express = require('express');
const app = express();

const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const database = require('./config/dbconfig');

const authRouter = require("./route/auth");
const accountRouter = require("./route/account");

database.connect();

const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());

app.use("/auth",authRouter);
app.use("/account",accountRouter);

app.get("/",()=>{
    return res.json({
		success:true,
		message:'Your server is up and running....'
	});
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})
