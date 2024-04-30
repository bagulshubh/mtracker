const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        reqired:true,
    },
    emailVerityToken:{
        type:String,
        required:false,
        default:""
    },
    token:{
        type:String,
        default:""
    },
    password:{
        type:String,
        required:true
    },
    accounts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Account"
    }],
    createAt:{
        type:Date,
        default:Date.now()
    },

})

module.exports = mongoose.model("User",userSchema);

