import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
        <td>
        <input
          type="text"
          required="required"
          placeholder="Enter your vax..."
          name="vax_id"
          onChange={handleEditFormChange}
          value={editFormData.vax_id}></input>
        </td>
        <td>
        <input
          type="text"
          required="required"
          placeholder="Enter your vax name..."
          name="name_of_vax"
          onChange={handleEditFormChange}
          value={editFormData.name_of_vax}></input>
        </td>
        <td>
        <input
          type="text"
          required="required"
          placeholder="Enter the date of vax..."
          name="date"
          onChange={handleEditFormChange}
          value={editFormData.date}></input>
        </td>
        <td>
        <input
          type="text"
          required="required"
          placeholder="Enter the name of vax provider..."
          name="vax_provider"
          onChange={handleEditFormChange}
          value={editFormData.vax_provider}></input>
        </td>
        <td>
        <button  type="submit" className={"sumbit"} class="btn btn-outline-dark btn-lg">Save</button>
        <button  type="submit" onClick={handleCancelClick} className={"sumbit"} class="btn btn-outline-dark btn-lg">Cancel</button>
        </td>
       
    </tr>
  )
}

export default EditableRow