const mongoose=require('mongoose')

const requestmodel=new mongoose.Schema({
   
    name:
    {
    firstName:
    {
        type:String,
        required:true
    },
    fatherName:
    {
        type:String,
        required:true
    },
    gFatherName:
    {
        type:String,
        required:true
    },
    },
    reasonForRequest:
    {
        type:String,
        required:true
    },
    branchName:
    {
        type:String,
        required:true

    },
    address:{
        subCity:{
            type:String,
            required:false
        },
        woreda:{
            type:String,
            required:false
        },
        houseNo:{
            type:String,
            required:false
        },

    },
    
    photo:
    {
        Data:Buffer,
        contentType:String,
        path:String
        
    },
    scanOfPoliceStatement:
    {
        Data:Buffer,
        contentType:String,
        path:String
      
    },
    scanOfBankReciept:
    { 
        Data:Buffer,
        contentType:String,
        path:String
       
    },
    scanOfDamagedID:
    {
        Data:Buffer,
        contentType:String,
        path:String
       
    },
    mobNo:
    {
        type:String,
        required:true
        
    },
    date:
    {
        type:Date,
        default:Date.now
    }
});
const RequestModel = mongoose.model('requestmodel', requestmodel);

module.exports = RequestModel;