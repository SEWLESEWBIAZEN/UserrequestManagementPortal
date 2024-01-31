const mongoose=require('mongoose')

const user=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true
    },
    password:
    {
        type:String,
        required:true
    }

})
const User=mongoose.model('usermodel',user)
module.exports=User