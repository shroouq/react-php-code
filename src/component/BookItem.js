import React from 'react';

export default function BookItem(props) {
  return (

    <div className="product">
      {props.sku}
      <br />
      {props.name}
      <br />
      {props.price} $
      <br />
      Weight: {props.weight} KG

    </div>
  )
}
