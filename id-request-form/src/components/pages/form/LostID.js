import React from 'react'

const LostID = ({ file, setfile }) => {   
    return (
        <div>
            <div className="form-control" id="lost">
                <div class="d-xs-block d-md-flex">
                    <div class="mx-auto mb-2 bg-info">
                        <label htmlFor="imageInput">Upload Bank Receipt:</label><br />
                        <input type="file" id="bankreciept" name="imageInput"
                            value={file.selectedBankReciept} onChange={(e) => setfile({ ...file, selectedBankReciept: e.target.value })} accept="image/*" required /><br />
                        <small id="fileHelp" class="form-text text-muted">Accepted formats: JPEG, PNG, GIF.</small>
                    </div>
                    <div class="mx-auto  bg-info">
                        <label htmlFor="imageInput">Upload Scan of Police Statement:</label><br />
                        <input type="file" id="policestatement" name="imageInput" accept="image/*"
                            value={file.selectedPoliceStatement} onChange={(e) => setfile({ ...file, selectedPoliceStatement: e.target.value })} required /><br />
                        <small id="fileHelp" class="form-text text-muted">Accepted formats: JPEG, PNG, GIF.</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LostID