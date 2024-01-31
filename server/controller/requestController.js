const dotev = require('dotenv');
const requestmodel = require('../model/RequestModel.js');
const fs = require('fs')

dotev.config()
//handling the request
const sendRequest = async (req, res) => {

    try {
        const { firstName, fatherName, gFatherName,
            branchName, reasonForRequest, subCity, woreda,
            houseNo, mobNo } = req.body;

        if (!req.files) {
            return res.status(400).json({ success: false, message: 'File not uploaded' });
        }

        const existingRequest = await requestmodel.findOne({mobNo });
        if (existingRequest) {
            return res.status(409).json({ success: false, message: 'Request already exists' });
        }
        let photoFile;

        let bankReceiptFile_data;
        let bankReceiptFile_contentType;
        let bankReceiptFile_path;
        let policeStatementFile_data;
        let policeStatementFile_contentType;
        let policeStatementFile_path;
        let damagedIDFile_data;
        let damagedIDFile_contentType;
        let damagedIDFile_path;

        //handling how to store to a database     
        if (req.files.photo) {
            photoFile = req.files.photo[0]
        }

        if (req.files.scanOfBankReciept) {
            bankReceiptFile_data = fs.readFileSync("uploads/" + req.files.scanOfBankReciept[0].filename)
            bankReceiptFile_contentType = req.files.scanOfBankReciept[0].mimetype
            bankReceiptFile_path = req.files.scanOfBankReciept[0].path
        }
        else {
            bankReceiptFile_data = ""
            bankReceiptFile_contentType = ""
            bankReceiptFile_path = ""
        }
        if (req.files.scanOfPoliceStatement) {
            policeStatementFile_data = fs.readFileSync("uploads/" + req.files.scanOfPoliceStatement[0].filename)
            policeStatementFile_contentType = req.files.scanOfPoliceStatement[0].mimetype
            policeStatementFile_path = req.files.scanOfPoliceStatement[0].path
        }
        else {
            policeStatementFile_data = ""
            policeStatementFile_contentType = ""
            policeStatementFile_path = ""
        }

        if (req.files.scanOfDamagedID) {
            damagedIDFile_data = fs.readFileSync("uploads/" + req.files.scanOfDamagedID[0].filename)
            damagedIDFile_contentType = req.files.scanOfDamagedID[0].mimetype
            damagedIDFile_path = req.files.scanOfDamagedID[0].path
        }
        else {
            damagedIDFile_data = ""
            damagedIDFile_contentType = ""
            damagedIDFile_path = ""
        }
        //creating request model instance
        const request = new requestmodel({
            name: { firstName, fatherName, gFatherName },
            branchName,
            reasonForRequest,
            photo: {
                data: fs.readFileSync("uploads/" + photoFile.filename),
                contentType: photoFile.mimetype,
                path: photoFile.path
            },
            scanOfBankReciept: {
                data: bankReceiptFile_data,
                contentType: bankReceiptFile_contentType,
                path: bankReceiptFile_path
            },


            scanOfPoliceStatement: {
                data: policeStatementFile_data,
                contentType: policeStatementFile_contentType,
                path: policeStatementFile_path
            },


            scanOfDamagedID: {
                data: damagedIDFile_data,
                contentType: damagedIDFile_contentType,
                path: damagedIDFile_path
            },


            address: { subCity, woreda, houseNo },
            mobNo
        });
       
        // Save the user to the database
        await request.save();

        res.status(201).json(request);

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = sendRequest;
