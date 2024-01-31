
import React from 'react'
import axios from 'axios'
import '../requestform.css'
import { useState } from 'react';
import FormInput from './pages/form/Index';
import { useNavigate } from 'react-router-dom';
import '../components/common/common.css'
import { useSelector } from 'react-redux';
function Requestform() {
    // declaring variables using useState hook
    const [name, setname] = useState({ firstName: '', fatherName: '', gFatherName: '' });
    const [branchName, setbranchName] = useState("Head Office");
    const [reasonForRequest, setreasonForRequest] = useState("new");
    const [address, setaddress] = useState({ subCity: '', woreda: '', houseNo: '' });
    const [mobNo, setmobNo] = useState();
    const [file, setfile] = useState({
        selectedPhoto: null, selectedBankReciept: null,
        selectedPoliceStatement: null, selectedDamagedID: null
    })
    const navigate =useNavigate()
    // declaring to access file input objects
    var photoFile = document.getElementById('photo');
    var bankfile = document.getElementById('bankreciept');
    var policefile = document.getElementById('policestatement');
    var damagedID = document.getElementById('damagedid');

    const x = {
        data: "",
        contentType: "",
        path: ""
    }

    const user=useSelector(state=>state.user.user)

    function validateMobileNumber(mobileNumber) {
        // Define a regex pattern for a 10-digit mobile number (adjust as needed)
        const mobileNumberPattern = /^(09|07)[0-9]{8}$/;
        // Test if the provided mobile number matches the pattern
        const isValid = mobileNumberPattern.test(mobileNumber);       
        return true;
    }

    // handling request submission
    function submitFormData() {
        const requestData = new FormData();
        requestData.append('firstName', name.firstName);
        requestData.append('fatherName', name.fatherName);
        requestData.append('gFatherName', name.gFatherName);
        requestData.append('branchName', branchName);
        requestData.append('reasonForRequest', reasonForRequest);
        requestData.append('subCity', address.subCity);
        requestData.append('woreda', address.woreda);
        requestData.append('houseNo', address.houseNo);
        requestData.append('mobNo', mobNo);
        if (file.selectedPhoto) {
            requestData.append('photo', photoFile.files[0]);
        }
        

        if (file.selectedBankReciept) {
            requestData.append('scanOfBankReciept', bankfile.files[0]);
        } else {
            requestData.append('scanOfBankReciept', x);
        }

        if (file.selectedPoliceStatement) {
            requestData.append('scanOfPoliceStatement', policefile.files[0]);
        }
        else {
            requestData.append('scanOfPoliceStatement', x);
        }

        if (file.selectedDamagedID) {
            requestData.append('scanOfDamagedID', damagedID.files[0]);
        }
        else { requestData.append('scanOfDamagedID', x); }

        if (validateMobileNumber(mobNo)) {
            axios.post('requests/sendRequest', requestData)
                .then(response => {
                    // Handle the successful response
                    alert("Request Sent Successfully");
                    window.location.reload();
                    document.getElementById('reason').selectedValue = 'new';
                })
                .catch(error => {                    
                    alert(error);
                });
        }
        else {
            alert("Enter Your Correct number and must be start with 09 or 07")
        }
    }
    return (
        <div className='container'>
            {user?<FormInput
                name={name} branchName={branchName} reasonForRequest={reasonForRequest} address={address} mobNo={mobNo}
                file={file} setname={setname} setbranchName={setbranchName} setreasonForRequest={setreasonForRequest}
                setaddress={setaddress} setmobNo={setmobNo} setfile={setfile} submitFormData={submitFormData} />:
                navigate('/login')}
        </div>
    );
}
export default Requestform
