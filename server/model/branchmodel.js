const mongoose=require('mongoose')

const branchmodel=new mongoose.Schema({
    branchId:
    {
    type:String,
    required:true,
    unique:true
    },
    name:
    {
        type:String,
        required:true,
        unique:true
    }

})

const branchmodelexport=mongoose.model('branchmodel',branchmodel)
module.exports=branchmodelexport