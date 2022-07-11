import React from "react";


export const ContactPicker = (props) => {
  return (
    <div>
       <p>Choose contact please</p>
    
    <select onChange = {props.onChange}> 
      <option key = {-1} value = {""} selected = "selected">No contacts selected </option>
      {props.sistersBrothers.map((itm) => <option 
                                                            
                                                            value = {itm}
                                                            key = {itm}
                                                >{itm}</option>)}
    
    </select>
  
    </div>
   );
};
