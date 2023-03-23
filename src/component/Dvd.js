import React from "react";


export default function DVD(props) {
  return (
    <div>
        <div className="group">

          <label >Size (MB)</label>
          <input
            id="size"
            name="size"
            className="data"
            onChange={props.runHandleChange}
            onInvalid={props.runHandleInvalid}
            onKeyPress={props.handlenumeric} 
            onPaste={props.handlenumeric}
          />
        <span>{props.runHandleInvalid}</span>
        </div>

        
      <div className="text">
                   Please, provide size in MB
      </div>
    </div>
  );
}