const express = require('express');
const app = express();

const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const database = require('./config/dbconfig');
const cors = require("cors")
const fileUpload = require("express-fileupload")
const {cloudinaryConnect} = require("./config/cloudinary");
const authRouter = require("./route/auth");
const accountRouter = require("./route/account");

database.connect();

const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"*",
 		credentials:true,
    })
)

app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);

cloudinaryConnect();

app.use("/auth",authRouter);
app.use("/account",accountRouter);

app.get("/",()=>{
    return `<h1>Working..</h1>`
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})
