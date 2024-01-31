import React from 'react'

const DamagedID = ({file,setfile}) => {
    return (
        <div>
            <div class="form-control" id="damage">
                <div class="text-center form-group bg-info" >
                    <label htmlFor="imageInput">Upload Scan of Damaged ID:</label><br />
                    <input type="file" id="damagedid" name="imageInput" accept="image/*"
                        value={file.selectedDamagedID} onChange={(e) => setfile({ ...file, selectedDamagedID: e.target.value })} required /><br />
                    <small id="fileHelp" class="form-text text-muted">Accepted formats: JPEG, PNG, GIF.</small>
                </div>

            </div>
        </div>
    )
}

export default DamagedID