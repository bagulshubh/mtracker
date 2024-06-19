const Account = require("../modules/account");
const User = require("../modules/user");
const Entry = require("../modules/entry");


//#region Account
exports.createAccount = async(req,res)=>{
    try{

        const userId = req.userId;
        const {name} = req.body;
        const {totalAmount} = req.body || 0;

        if(!name){
            return res.status(400).json({
                success:false,
                message:"Name of account is required"
            })
        }

        if(!userId){
            return res.status(401).json({
                success:false,
                message:"Unauthorized access"
            })
        }
        const user = await User.findById(userId);

        if(!user){
            return res.status(200).json({
                success:false,
                message:"User does not exist"
            })
        }

        const account = await Account.create({
            userId,
            name,
            totalAmount,            
        })

        user.accounts.push(account);
        await user.save();
        await user.populate("accounts");

        return res.status(201).json({
            success:true,
            message:"Account Created Successfully",
            user
        })

    } catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

exports.getAllAccounts = async(req,res)=>{

    try{

        const userId = req.userId;

        const accounts = await Account.find({userId:userId});

        return res.status(200).json({
            success:true,
            body:accounts
        })

    }catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }

}

exports.getAccountById = async(req,res) =>{
    try{

        const id = req.params.id;

        const account = await Account.findById(id).populate("entry");
        //console.log(account)

        return res.status(200).json({
            success:true,
            body:account
        })

    } catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

// #endregion

// #region Entry
exports.createEntry = async(req,res) =>{

    try{

        const userId = req.userId;
        const {accountId , amount , details , note } = req.body;

        if(!accountId || !amount){
            return res.status(402).json({
                success:false,
                message:"All filds are required"
            })
        }

        const user = await User.findById(userId);

        if(!user){
            return res.status(402).json({
                success:false,
                message:"User does not exists"
            })
        }

        const account = await Account.findById(accountId);
        
        if(!account){
            return res.status(402).json({
                success:false,
                messgage:"Account does not exists"
            })
        }

        const entry = new Entry({
            userId,
            accountId,
            amount,
            details,
            note
        })
        await entry.save();

        account.totalAmount = parseInt(account.totalAmount) + parseInt(amount);
        account.entry.push(entry)
        account.updateAt = Date.now();
        await account.save();

        return res.status(201).json({
            success:true,
            account
        })

    } catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }

}



