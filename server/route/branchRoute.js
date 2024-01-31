const express=require('express')
const branchcontroller =require("../controller/branchcontroller.js")
const branchRouter=express.Router()

branchRouter.post('/addbranch',branchcontroller.addbranch)
branchRouter.get('/getbranches',branchcontroller.getbranches)
branchRouter.get('/getlastbranch',branchcontroller.getlastaddedbranch)
branchRouter.put('/updatebranch/:id',branchcontroller.updatebranch)
branchRouter.delete('/deletebranch/:id',branchcontroller.deletebranch)
module.exports=branchRouter
