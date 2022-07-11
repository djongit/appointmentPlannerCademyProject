import React, { useState, useEffect } from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

const [dublicated, setDub] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // !dublicated && props.helloNewCont({
    //   name,
    //   phone,
    //   email
    // });
    // setName("");
    // setPhone("");
    // setEmail("");
    
   if (!dublicated) {
     props.helloNewCont({
       name,
       phone,
       email
     });
     setName("");
     setPhone("");
     setEmail("");
   }

    
    
    
    
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props

  */
useEffect(()=>{
const check = props.contList.some(checkName => checkName.name === name);
setDub(check);
}, [props.contList, name])
  
  return (
    <div>
      <section>
        <h2>Add Contact</h2>  
        <ContactForm 
            
            name = {name}
            phone = {phone}
            email = {email}
           
            
            setName = {setName}
            setPhone = {setPhone}
            setEmail = {setEmail}
            handleSubmit= {handleSubmit}
        />      
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tileValue = {props.contList}/>
      </section>
    </div>
  );
};
