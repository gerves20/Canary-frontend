import React from 'react'

const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick}) => {
  return (
    <tr scope="row">
        <td>{contact.fullName}</td>
        <td>{contact.address}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
        <td>
        <button  type="submit" className={"sumbit"} onClick={(event)=>handleEditClick(event, contact)} class="btn btn-outline-dark btn-lg">Edit</button>
        <button  type="submit" className={"sumbit"} onClick={()=>handleDeleteClick(contact.id)} class="btn btn-outline-dark btn-lg">Delete</button>
        </td>
    </tr>
  )
}

export default ReadOnlyRow