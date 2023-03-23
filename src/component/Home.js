import React, { useState  , useEffect, } from "react";
import $ from "jquery";
import {Link } from 'react-router-dom';
import "../App.css";

function Home(){

    const [item, setItem] = useState([])
     // get list of products from database
    useEffect(()=>{
        fetch("https://scandiweb22.000webhostapp.com/php/includes/index.php")
        .then(res=>res.json())
        .then(
        (result)=>{
           setItem(result);
        })
      },[]);

    const[data, setData]= useState({
        sku:[], });



     //get checked items
    function handleChange(e){
        const { value, checked } = e.target;
        const {sku}= data;
        if (checked) {
            setData({
              sku: [...sku, value],
            });
          }
          else {
            setData({
              sku: sku.filter((e) => e !== value),
            });
            }
    };
       
      //Delete check items
       function handleDelete(e){
        e.preventDefault();

        const form = $(e.target);
        $.ajax({
          type: "POST",
          url: "https://scandiweb22.000webhostapp.com/php/includes/delete.php",
          data: form.serialize(),
          dataType: "json",
          encode: true,
          success(data) {
                    setData(data);
                },
           })
               window.location.reload(false);
       }


  return(
        <div >
            <form action=""
                id="product_form"
                method="POST"
                onSubmit={handleDelete}>
            <nav >
              <div className="nav" >
              <Link className="nav_name" to="/">Product List</Link>
              <div>
              <Link to="/Add"><button className="button1" > ADD </button> </Link>
              <button type="submit" name="deletepro" className="button2" id="delete_product"> MASS DELETE </button>
              </div>
              </div>
            </nav>
                    
                <div className="container">
                   { item.map(item=>{
                    if(item.type==="DVD"){
                    return(
                            <div className="item">
                            <input className="delete-checkbox" type="checkbox"  name="deletepro[]" value={item.id} onChange={handleChange} />
                            <div className="product">
                            {item.sku}
                            <br/>
                            {item.name}
                            <br/>
                            {item.price } $
                            <br/>
                            Size: {item.size} MB

                            </div>
                            </div>
                    )}
                    else if(item.type ==="Furniture"){
                     return( <div className="item">
                            <input className="check" type="checkbox" name="deletepro[]" value={item.sku} onChange={handleChange} />
                            <div className="product">
                            {item.sku}
                            <br/>
                            {item.name}
                            <br/>
                            {item.price } $
                            <br/>
                            Dimension: {item.dimensions} 
                            </div>
                            </div>
                   )}
                   else if(item.type ==="Book"){
                    return(
                      <div className="item">
                            <input className="check" type="checkbox" name="deletepro[]" value={item.sku} onChange={handleChange} />
                            <div className="product">
                            {item.sku}
                            <br/>
                            {item.name}
                            <br/>
                            {item.price } $
                            <br/>
                            weight: {item.weight} KG
                            </div>
                            </div>
                    )
                   }
                    
                  })}
                
                </div>
           </form>  
        </div>
    )  
};

export default Home;