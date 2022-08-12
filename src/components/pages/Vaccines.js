import {React,Fragment} from 'react';
import './Profile.css';
import { nanoid } from "nanoid";
import data from './mock-data.json';
import Table from 'react-bootstrap/Table'
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import LoggedInNavbar from '../LoggedInNavbar';

const  Vaccines = () =>{

    const[contacts, setContacts] = useState(data);
    const[addFormData, setAddFormData] = useState({
vax_id:'',
name_of_vax:'',
date:'',
vax_provider:''});

const [editContactId, setEditContactId] = useState(null);

const [editFormData, setEditFormData] = useState({
    vax_id:'',
    name_of_vax:'',
    date:'',
    vax_provider:''

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
        vax_id: addFormData.vax_id,
        name_of_vax: addFormData.name_of_vax,
        date: addFormData.date,
        vax_provider: addFormData.vax_provider,
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
        vax_id: contact.vax_id,
        name_of_vax: contact.name_of_vax,
        date: contact.date,
        vax_provider: contact.vax_provider,
      };
  
      setEditFormData(formValues);
}

const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      vax_id: editFormData.vax_id,
      name_of_vax: editFormData.name_of_vax,
      date: editFormData.date,
      vax_provider: editFormData.vax_provider,
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
        <LoggedInNavbar/>
      <h1 id="vaxt">Your Vaccines</h1>
      <div id="nav" class="nav">
        
      <Link className={"link"} to="/vaccines"><button type="button" id="links-4" class="btn btn-link">Vaccines</button></Link>
        <Link  className={"link"} to="/profile"><button type="button" id="links" class="btn btn-link">Profile</button></Link>
        <Link className={"link"} to="/settings"><button button type="button" id="links" class="btn btn-link">Settings</button></Link>
        <Link className={"link"} to="/dashboard"><button button type="button" id="links" class="btn btn-link">Notifications</button></Link>
        </div>
             
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
                           name="vax_id"
                           required="required"
                           placeholder="Enter your vax id..."
                           onChange={handleAddFormChange}>
                    </input>
                    <input type="text"
                    id="floatingInput"
                           name="name_of_vax"
                           required="required"
                           placeholder="Enter the name of vax..."
                           onChange={handleAddFormChange}>
                    </input>
                    <input type="date"
                    id="floatingInput"
                           name="date"
                           required="required"
                           placeholder="Enter the date..."
                           onChange={handleAddFormChange}>
                    </input>
                    <input type="text"
                           name="vax_provider"
                           id="floatingInput"
                           required="required"
                           placeholder="Enter your vax provider..."
                           onChange={handleAddFormChange}>
                    </input>
                    <button  type="submit" className={"sumbit"} class="btn btn-outline-dark btn-lg">Add</button>
                </form>

             </div>
             

        </div>
       
        


    )

}

export default Vaccines;