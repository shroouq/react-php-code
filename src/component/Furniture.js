import React from "react";

export default function Furniture(props) {
  return (
    <div >
        <div className="group">
        <label >Height (CM)</label>
        <span>{props.runHandleInvalid2}</span>
          <input
            id="height"
            name="height"
            className="data"
            onChange={props.runHandleChange}
            onInvalid={props.runHandleInvalid2}
            onKeyPress={props.handlenumeric} 
            onPaste={props.handlenumeric}
          />
        </div>
        
      <br />
        <div className="group">
          <label >Width (CM)</label>
          <input
            id="width"
            name="width"
            className="data"
            onChange={props.runHandleChange}
            onInvalid={props.runHandleInvalid3}
            onKeyPress={props.handlenumeric} 
            onPaste={props.handlenumeric}
          />
        <span>{props.runHandleInvalid3}</span>
        </div>
        
      <br />
      <div className="group">
          <label >Length (CM)</label>
          <input
            id="length"
            name="length"
            className="data"
            onChange={props.runHandleChange}
            onInvalid={props.runHandleInvalid1}
            onKeyPress={props.handlenumeric} 
            onPaste={props.handlenumeric}
          />
        <span>{props.runHandleInvalid1}</span>
        </div>
        
      <div className="text">
        Please, provide dimensions in CM
      </div>
    </div>
  );
}