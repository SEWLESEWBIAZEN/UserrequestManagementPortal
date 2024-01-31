const branchmodel=require('../model/branchmodel')
const dotev =require('dotenv')
dotev.config()

const addbranch=async(req,res)=>{
    try{
       
        const {branchId,name}=req.body;
        const newbranch= new branchmodel({branchId,name});
    
        const branchexist= await branchmodel.findOne({name});        
        if (branchexist) {
            return res.status(409).json({ success: false, message: 'The Branch with this name is opened!' });
        }
       await newbranch.save();
       
       res.status(201).json(newbranch)

    }catch(error){
        console.log(error)

        res.status(500).json({success:false,message:"can not save the data"})
    }

}
const getbranches=async(req,res)=>{
    try{
        const branches=await branchmodel.find();
        res.json({branches})
    }
    catch(error){
res.send(error)
    }
}

const getlastaddedbranch=async(req,res)=>{
    try
    {
        const lastbranch= await branchmodel.find({}).sort({ _id: -1 }).limit(1);;
        res.json({lastbranch})

    }
    catch(error){
        res.send(error)
    }
}

const updatebranch=async(req,res)=>{
    try{
        const _id=req.params.id;
        const{branchId,name}=req.body;
        const result=await branchmodel.findByIdAndUpdate(_id,{
            name:name,branchId:branchId

        });
        res.json({result:result})
    }
    catch(error){
        res.json(error)
    }
}

const deletebranch=async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await branchmodel.findByIdAndDelete(_id);
        res.json({result:result})
    }
    catch(error){
        res.json({success:false,message:'Unable to delete'})
    }
}
module.exports={addbranch:addbranch,getbranches:getbranches,
    getlastaddedbranch:getlastaddedbranch,updatebranch:updatebranch,
deletebranch:deletebranch}