import React from 'react';

export default function DvdItem(props){
  return(
    
    <div className="product">
    {props.sku}
    <br/>
    {props.name}
    <br/>
    {props.price } $
    <br/>
    Size: {props.size} MB

    </div>
  )
}
