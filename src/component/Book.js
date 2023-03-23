import React from "react";

export default function Book(props) {
  return (
    <div >
        <div className="group">
          <label htmlFor="weight">Weight (KG)</label>
          <input
            id="weight"
            name="weight"
            className="data"
            onChange={props.runHandleChange}
            onInvalid={props.runHandleInvalid}
            onKeyPress={props.handlenumeric} 
            onPaste={props.handlenumeric}
          />
        <span>{props.runHandleInvalid}</span>
        </div>
        
      <div className="text">
        Please, provide weight in kg
      </div>
    </div>
  );
}