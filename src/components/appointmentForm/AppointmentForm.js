import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
const contName = () =>{
  return contacts.map((cont)=>cont.name);
}
  return (
    <form onSubmit={handleSubmit}>
      
      <p>Title</p>
      <input 
          value = {title}
          onChange = {(e)=> setTitle(e.target.value)}
          name ="title"
          type = "text"
      />
      <p>Appointment date</p>
      <input 
          value={date}
          onChange ={(e)=> setDate(e.target.value)}
          name = "date"
          type = "date"
          min ={getTodayString()}
      />
      
      <p>Choose the time please</p>
      <input
          value = {time}
          onChange = {(e)=>{setTime(e.target.value)}}
          name = "time"
          type = "time"
      />
      <ContactPicker 
          name = "contact"
          value = {contact}
          sistersBrothers = {contName()}
          onChange = {(e)=>setContact(e.target.value)}
      
      />
      <input 
        type = "submit"
        value = "Submit"
      />
    </form>
    
  );
};
