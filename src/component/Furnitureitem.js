import React from 'react';

export default function FurnitureItem(props){
  return(
    
    <div className="product">
    {props.sku}
    <br/>
    {props.name}
    <br/>
    {props.price } $
    <br/>
    Dimensions: {props.dimensions}

    </div>
  )
}
