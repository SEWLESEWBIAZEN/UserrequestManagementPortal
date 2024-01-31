
const dotev=require('dotenv')
const mongoose=require("mongoose");
dotev.configDotenv();
const CONNECTDB=async()=>{
    try{
        const url=process.env.MONGO_URI;
        const conn=await mongoose.connect(url);
        console.log("mongodb connected!")
    }
    catch(err){
        console.log(err)
        process.exit();
    }
}

module.exports=CONNECTDB;