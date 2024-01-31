// requestRouter.js
const express = require('express');
const multipleupload =require( '../controller/multipleupload.js');
const sendRequest =require( '../controller/requestController.js')

const requestRouter = express.Router();

requestRouter.post('/sendRequest',multipleupload.fields([{ name: 'photo',maxCount:1 },
{ name: 'scanOfBankReciept',maxCount:1 }, { name: 'scanOfPoliceStatement' ,maxCount:1},
 { name: 'scanOfDamagedID' ,maxCount:1}]) , sendRequest)
module.exports= requestRouter
