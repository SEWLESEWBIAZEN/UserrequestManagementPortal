import React, { useState, useEffect } from "react";
import axios from "axios";
import AddBranchForm from "./AddBranchForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteBranch, updateBranch, fetchBranches } from "../../../slices/BranchSlice";
import './home.css'


const Branch = () => {
    const branches = useSelector((state) => state.branches.data)
    // console.log(branches)
    const [branchId, setbranchId] = useState("")
    //declaring a varable that holds new data of a branch to be updated
    const [updateForm, setupdateForm] = useState({
        _id: null,
        branchId: "",
        name: ""
    })
    const [update, setupdate] = useState(false)
    const [id, setid] = useState(0);
    const dispatch = useDispatch();


    //a function that checks a newly added branch has a duplicate or not
    function exist(bname) {
        let branchexist = 0;
        branches.forEach((b) => {
            if (b.name.toLowerCase() === bname.toLowerCase()) {
                branchexist = 1; // You should declare branchexist somewhere before using it.
            }
        });
        return branchexist
    }
    //fetching lastly added branch based on its timestamp
    const fetchlastbranch = async () => {
        const res = await axios.get('branch/getlastbranch');
        let lastbranchid = res.data.lastbranch[0].branchId
        let number = lastbranchid.match(/\d+/g).map(Number);
        setid(number[0] + 1)

    }

    useEffect(() => {
        dispatch(fetchBranches)
        fetchlastbranch();
        setbranchId("ad" + id)
    }, [id,dispatch]);


    // cancelling update
    function cancelUpdate() {
        setupdateForm({ ...updateForm, branchId: "", name: "" });
        setupdate(0);
    }
    //branch update function
    function updatebranch(updateForm) {
        try {
            if (exist(updateForm.name)) {
                alert(updateForm.name + " branch exists!")
                return
            }
            //calling a dispatch function
            dispatch(updateBranch(updateForm))
            alert("branch updated successfully!")

        }
        catch (error) {
            alert(error)
        }
    }
    //delete branch function
    function DeleteBranch(branch) {
        //ask for confirmition
        const shouldDelete = window.confirm(`Are you sure you want to delete ${branch.name} branch?`);
        if (shouldDelete) {
            try {
                //calling a dispatch function             
                dispatch(deleteBranch(branch._id))
                alert(`SUCCESS! ${branch.name} branch is deleted`)
                //refreshing
                window.location.reload()

            }
            catch (error) {
                alert(error)
            }
        }
    }
    return (
        <div className="container">
            <AddBranchForm
                updateForm={updateForm}
                setupdateForm={setupdateForm}
                update={update}
                setupdate={setupdate}
                setbranchId={setbranchId}
                branches={branches}
                branchId={branchId}
                updatebranch={updatebranch}
                cancelUpdate={cancelUpdate}
                DeleteBranch={DeleteBranch}
                exist={exist} />
        </div>
    )
}
export default Branch