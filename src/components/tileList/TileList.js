import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = (props) => {
  
  return (
    <div>
      {props.tileValue.map((item, index) => {
        return <Tile  key = {index} tile = {item}/>
        
      })}
    </div>
  );
};
