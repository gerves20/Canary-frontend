import {React,Fragment} from 'react';
import './Profile.css';
import { nanoid } from "nanoid";
import data from './mock-data.json';
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';

const  Vaccines = () =>{

    const[contacts, setContacts] = useState(data);
    const[addFormData, setAddFormData] = useState({fullName:'',
address:'',
phoneNumber:'',
email:''});

const [editContactId, setEditContactId] = useState(null);

const [editFormData, setEditFormData] = useState({
    fullName:'',
    address:'',
    phoneNumber:'',
    email:''

});






const handleAddFormChange = (e) =>{
    e.preventDefault();

    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
};

const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

const handleAddFormSubmit = (e) =>{
    e.preventDefault();


    const newContact ={
        id: nanoid(),
        fullName: addFormData.fullName,
        address: addFormData.address,
        phoneNumber: addFormData.phoneNumber,
        email: addFormData.email,
    };
    

    const newContacts = [...contacts,newContact];
    setContacts(newContacts);
};

// const newContacts = [ ...contacts,newContact ];
// setContacts(newContacts);


const handleEditClick = (e, contact) =>{
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
        fullName: contact.fullName,
        address: contact.address,
        phoneNumber: contact.phoneNumber,
        email: contact.email,
      };
  
      setEditFormData(formValues);
}

const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

    return(
        <div>
             <h1>Your Vaccines</h1>

             <div className="app-container">
                <form onSubmit={handleEditFormSubmit}>
                <table class="table table-striped">
                    <thead>
                        <tr scope="row">
                        <th scope="col">ID Number</th>
                        <th scope="col">Name of Vaccination</th>
                        <th scope="col">Date</th>
                        <th scope="col">Name of Provider</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact)=> (
                    <Fragment> 
                        {editContactId === contact.id? (
                            <EditableRow  editFormData={editFormData}  handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/> 

                        ) :(
                            <ReadOnlyRow contact={contact} handleEditClick={handleEditClick}  handleDeleteClick={handleDeleteClick}/>

                        )}
                        
                        
                    </Fragment>
                       
                        ))}
                    </tbody>
                </table>
                </form>
                <h2>Add a Vaccine</h2>
                <form className={"vaccine"} onSubmit={handleAddFormSubmit}>
                    <input type="text"
                            id="floatingInput"
                           name="fullName"
                           required="required"
                           placeholder="Enter a name..."
                           onChange={handleAddFormChange}>
                    </input>
                    <input type="text"
                    id="floatingInput"
                           name="address"
                           required="required"
                           placeholder="Enter a address..."
                           onChange={handleAddFormChange}>
                    </input>
                    <input type="text"
                    id="floatingInput"
                           name="phoneNumber"
                           required="required"
                           placeholder="Enter a phone number..."
                           onChange={handleAddFormChange}>
                    </input>
                    <input type="text"
                           name="email"
                           id="floatingInput"
                           required="required"
                           placeholder="Enter a email..."
                           onChange={handleAddFormChange}>
                    </input>
                    <button  type="submit" className={"sumbit"} class="btn btn-outline-dark btn-lg">Add</button>
                </form>

             </div>
             

        </div>
       
        


    )

}

export default Vaccines;