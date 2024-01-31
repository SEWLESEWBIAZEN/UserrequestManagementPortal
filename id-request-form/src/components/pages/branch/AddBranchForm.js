import React, { useState } from "react";
import { addBranch ,fetchBranches} from "../../../slices/BranchSlice";
import { useDispatch } from "react-redux";
import Branches from "./Branches";

const AddBranchForm = ({
    exist,
    updateForm, setupdateForm,
    branchId, setbranchId,    
    update, setupdate,
    updatebranch, cancelUpdate, DeleteBranch
}) => {
    const [name, setname] = useState("")
    const [id, setid] = useState(0);

    const dispatch=useDispatch()
   

    //handling edit link event when clicked
    function EditBranch(branch) {
        setupdate(true)
        setupdateForm({ _id: branch._id, name: branch.name, branchId: branch.branchId })
    }   

    // adding a new branch function
    function createBranch() {      
             
        try {
            //check for duplicate
            if (exist(name) === 1) {
                alert(name + " Branch Exist")
                setname("")
                return
            }
            //calling dispatch function
            const newBranch={branchId:branchId,name:name}
            dispatch(addBranch(newBranch))            
            alert("Branch is created successfully")   
                 
            setid(id + 1)
           setbranchId("ad" + id)
            setname("")
            
        }

        catch (error) {
            alert(error)
        }
    }
    return (
        <div className="d-xs-block d-md-flex flex-wrap">
            
            <div className="mb-4 mx-2">
                <h1>
                    Add New Branch Form
                </h1>
                <form className="form-control shadow" onSubmit={update ? ()=>updatebranch(updateForm) : createBranch}>
                    <table>
                        <tr>
                            <td><label htmlFor="branchname"> Branch Name:</label></td>
                            <td><input type="text" placeholder="Enter Branch Name" required value={update ? updateForm.name : name}
                                onChange={(e) => update ? setupdateForm({ ...updateForm, name: e.target.value }) : setname(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td> <label htmlFor="branchId" >Branch ID:</label></td>
                            <td><input type="text" placeholder={branchId} required value={update ? updateForm.branchId : branchId} onChange={(e) => update ? setupdateForm({ ...updateForm, branchId: e.target.value }) : setbranchId(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><button type="submit" className="btn btn-primary">{update ? "Update" : "Add"}</button></td>
                            <td>...............</td>
                            <button type="button" className="btn btn-danger" onClick={update ? cancelUpdate : () => {
                                setbranchId("");
                                setname("");
                            }}>{update ? "Cancel" : "Clear"}</button>
                        </tr>
                    </table>
                </form>                
            </div>
            <div>
                <h2 className="text-center"> Branch List</h2>
                {
                    <Branches update={update} exist={exist}
                        setupdate={setupdate}
                        EditBranch={EditBranch} DeleteBranch={DeleteBranch} />
                }
            </div>
            
        </div>
    )
}
export default AddBranchForm