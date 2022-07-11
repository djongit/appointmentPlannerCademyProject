import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    
      <form onSubmit={handleSubmit} >
        
        <p>Contact name</p>
       <input 
            value = {name}
            name = "name" 
            type = "text"
            onChange = {(event)=>setName(event.target.value)}
            placeholder=""
            required
            
        />
        <p>Contact phone number (07XXXXXXXXX)</p>
       <input
          value = {phone}
          type = "tel"
          name = "phone"
          placeholder=""
          pattern="^07([\d]{3})[(\D\s)]?[\d]{3}[(\D\s)]?[\d]{3}$"
          onChange = {(event)=>setPhone(event.target.value)}
          required
       />
       <p>Contact email</p>
       <input
          type = "email"
          name = "email"
          value = {email}
          onChange = {(event)=>setEmail(event.target.value)}
          placeholder=""
       />
       
       <input
          
          type = "submit"
          value="Add Contact"
        />
      </form>
       
    
   
 
  );
};
