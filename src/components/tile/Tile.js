import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {
        Object.values(props.tile).map((itm, indx)=>{
          return <p key = {indx} className = {indx === 0 ? "tile-title": "tile"} >{itm}</p>
        })
      }
    </div>
  );
};
