import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../../requestform.css'
import LostID from "./LostID";
import DamagedID from "./DamagedID";
import { useDispatch, useSelector } from "react-redux";
import { fetchBranches } from "../../../slices/BranchSlice";

function FormInput(props) {
    //fetching passed props from parent component requestform.js and assign to contant values
    const { name, branchName, reasonForRequest, address, mobNo,
        file, setname, setbranchName, setreasonForRequest,
        setaddress, setmobNo, setfile, submitFormData } = props;
    //constants
    const dispatch=useDispatch()
    const branches=useSelector(state=>state.branches.data)
    //function for clearing form
    function clearForm() {
        setname({ firstName: "", fatherName: "", gFatherName: "" });
        setaddress({ subCity: "", woreda: "", houseNo: "" })
        setmobNo("")
        window.location.reload(true);
    }    
    
    useEffect(() => {
       dispatch(fetchBranches)
    }, [dispatch])


    return (
        <div >
            <section className="row text-center" >
                <h1>ID Request Form</h1>
            </section>
            <section class="row shadow body1">
                <form className="form-control">
                    <div class="form-control my-2 d-block">
                        <p className='text-align-left'>Full Name:</p>
                        <div className='d-xs-block d-md-flex nameInput'>
                            <div className='m-2 '>
                                <label htmlFor="firstName"></label>
                                <input type="text" id="firstName" name="firstName" placeholder='First Name'
                                    value={name.firstName} onChange={(e) => setname({ ...name, firstName: e.target.value })}
                                    required />
                            </div>
                            <div className='m-2'>
                                <label htmlFor="fatherName"></label>
                                <input type="text" id="fatherName" name="fatherName" placeholder='Father Name'
                                    value={name.fatherName} onChange={(e) => setname({ ...name, fatherName: e.target.value })} required />
                            </div>
                            <div className='m-2'>
                                <label htmlFor="gfatherName"></label>
                                <input type="text" id="gfName" name="gfName" placeholder='Grandfather Name'
                                    value={name.gFatherName} onChange={(e) => setname({ ...name, gFatherName: e.target.value })} required />
                            </div>
                            <div class="form-group ms-5 text-align-left">
                                <label htmlFor="branch">Branch:</label>
                                <select id="branch" name="branch" value={branchName}
                                    onChange={(e) => setbranchName(e.target.value)} required>
                                    {branches && branches.map(branch => {
                                        return <option value={branch.name} key={branch._id}>{branch.name}</option>
                                    }
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="d-xs-block d-md-flex form-control">
                        <div class="form-control mx-md-3 mb-xs-3">
                            <label htmlFor="reasonforrequest">Reason For request:</label>
                            <select id="reason" name="reason" value={reasonForRequest} onChange={(e) => setreasonForRequest(e.target.value)} required>
                                <option value="New">New </option>
                                <option value="Lost">Lost</option>
                                <option value="Damage">Damage</option>
                            </select>
                        </div>
                        <div class=" form-control ml-md-5">
                            <label htmlFor="imageInput">Upload Your Photo:</label><br />
                            <input type="file" id="photo" name="imageInput" accept="image/*"
                                value={file.selectedPhoto} onChange={(e) => setfile({ ...file, selectedPhoto: e.target.value })} required /><br />
                            <small id="fileHelp" class="form-text text-muted">Accepted formats: JPEG, PNG, GIF.</small>
                        </div>
                    </div>
                    {(reasonForRequest === "Lost") && <LostID file={file} setfile={setfile} />}
                    {(reasonForRequest === "Damage") && <DamagedID file={file} setfile={setfile} />}

                    <div class="form-control my-2 d-block">
                        <p className='text-align-left'>Residence Address:</p>
                        <div className='d-md-flex'>
                            <div className='m-2'>
                                <label htmlFor="sub city"></label>
                                <input type="text" id="subcity" name="subcity" placeholder="Sub City" required
                                    value={address.subCity} onChange={(e) => setaddress({ ...address, subCity: e.target.value })} />
                            </div>
                            <div className='m-2'>
                                <label htmlFor="Keb wereda"></label>
                                <input type="text" id="kebworeda" name="kebworeda" placeholder="Keb/Woreda" required
                                    value={address.woreda} onChange={(e) => setaddress({ ...address, woreda: e.target.value })} />
                            </div>
                            <div className='m-2'>
                                <label htmlFor="house No"></label>
                                <input type="text" id="houseno" name="houseno" placeholder="House No."
                                    value={address.houseNo} onChange={(e) => setaddress({ ...address, houseNo: e.target.value })} />
                            </div>
                            <div className='m-2'>
                                <label htmlFor="Mobile"></label>
                                <input type="tel" id="mobno" name="mobno" required
                                    placeholder="Mobile Number"
                                    value={mobNo} onChange={(e) => setmobNo(e.target.value)} />                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary " onClick={() => submitFormData()}>Submit</button>
                        <button type="button" class="btn btn-danger " onClick={() => clearForm()}> Clear</button>
                    </div>

                </form>
            </section>
        </div >
    )
}
export default FormInput