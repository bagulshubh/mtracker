const redisClient = require("../config/redisClient");
const {promisify} = require("util");


const redisGetAsync = promisify(redisClient.get).bind(redisClient);


exports.userCache = async(req,res,next)=>{
    try{
        //console.log("Into userCache")
        const skip = req.params.skip;
        
        if(skip === "true"){
            //do not access the cahce
            next();
            return;
        }

        let user = await redisGetAsync("user");
        user = JSON.parse(user);
        //console.log(user);
        if(user){
            return res.status(200).json({
                success:true,
                message:"From redis",
                body:user
            })
        }
        else{
            next();
        }

    } catch(err){
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}
