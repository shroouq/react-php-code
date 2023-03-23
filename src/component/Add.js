import React, { useState } from "react";
import '@szhsin/react-menu/dist/index.css';
import $ from "jquery";
import {  useNavigate } from "react-router-dom";
import Dvd from "./Dvd";
import Furniture from "./Furniture";
import Book from "./Book";
import "../App.css";

function Add(props){

  const [error1,setError1]= useState({});
  const [ error2, setError2]= useState("");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
  });

  const[data, setData]= useState({
    sku: "",
    name: "",
    price: "",
    productType: "",
    size: "",
    height: "",
    width: "",
    length: "",
    weight: "",
        
  })
  //handle errors
  function validData(){
    let err = {}
    if(data.sku ===''){
      err.sku= 'please: submit the SKU'
    }
    if(data.name ===''){
      err.name= 'please: submit the NAME'
    }
    if(data.price ===''){
      err.price ='please:submit the PRICE'
    }
    if(data.productType ===''){
      err.productType = 'please select DATATYPE'
    }
    if(data.productType ==='DVD' && data.size===''){
      err.size='please: submit the SIZE'
    }
    if(data.productType ==='Book' && data.weight ===''){
      err.weight='please: submit the weight'
    }
    if(data.productType ==='Furniture' && data.length==='' ){
      err.length='please: submit required dimensions'
    } 
    if(data.productType ==='Furniture' && data.height==='' ){
      err.length='please: submit required dimensions'
    } 
    if(data.productType ==='Furniture' && data.width===''  ){
      err.length='please: submit required dimensions'
    } 

    setError1({...err})
    return Object.keys(err).length <1;
  }
  
  //cancel add produuct and back to home page
  const handleCancel=()=>{
    navigate('/', {replace: true})
  }
  const handleChang=(e)=>{
      const { name, value, type, checked } = e.target;
      setData({ ...data, [e.target.name]: e.target.value });
      setFormData((setData) => {
        return {
          ...setData,
          [name]: type === "checkbox" ? checked : value,
        };
      });
  
    }

    //handle numeric value only
    const handlenumeric =(e) =>{ 
      !/[0-9]/.test(e.key) && e.preventDefault()
    }
    
    //send data when submit to php page
  const submitForm=(e)=>{
    e.preventDefault();
    
    let isvalid= validData()
    if (isvalid){
   
      //const form = $(e.target);
      let formData = $("#product_form").serializeArray();
      let postData = formData.concat($.trim(data));


    $.ajax({
      type: "POST",
      url: "https://scandiweb22.000webhostapp.com/php/includes/index.php",
     // dataType: 'json',
      data: postData,
      complete:function(data) {
        let value2= $.trim(data.responseText)
        if($.trim(data.responseText)=="false"){
          console.log(value2)
        setError2("sku is exist");}
          else {
            console.log(data.responseText)
            setError2("");
            navigate('/', {replace: true});
          }}
       });
      }
        };
     
      

    return(
     <div >

     <form action=""
            id="product_form"
            method="POST"
            onSubmit={submitForm}>
         <nav className="nav">
           <div className="nav_name" to="/">Product Add</div>
           <div>
              <button className="button1" type="submit" name="add" > Save </button>
              <button  className="button2" type="submit" onClick={handleCancel}> Cancel </button>
          </div>
        </nav>
        <div className="form-container">
        <div className="group">
            <label className="label">
                SKU
            </label>
            <input id="sku" className="data" type="text" name="sku" onChange={handleChang}  />
            <span>{error1.sku}</span>
            <span>{error2}</span>
            </div>
            <div className="group">
            <label className="label">Name</label>
            <input id="name" className="data" type="text" name="name" onChange={handleChang}  />
            <span>{error1.name}</span>
            </div>
            <div className="group">
            <label className="label">Price</label>
            <input id="price" className="data" type="text" name="price" onChange={handleChang} onKeyPress ={handlenumeric} on onPaste ={handlenumeric} />
            <span>{error1.price}</span>
            </div>
            <div className="group">
            <label  > Type  Switcher </label>
            <select
                  id="productType"
                  name="productType"
                  onChange={handleChang}
                >
                   <option id="" name="" value="">
                    Select A Product
                  </option>
                  <option id="DVD" name="DVD" value="DVD">
                    DVD
                  </option>
                  <option id="Furniture" value="Furniture">
                    Furniture
                  </option>
                  <option id="Book" value="Book">
                    Book
                  </option>
                </select>
                <span>{error1.productType}</span>
                </div>

                {formData.productType === "DVD" && (
                <Dvd
                  runHandleChange={handleChang}
                  getDVDValue={formData.size}
                  runHandleInvalid={error1.size}
                  handlenumeric={handlenumeric}
                />
              )}
              {formData.productType === "Furniture" && (
                <Furniture
                  runHandleChange={handleChang}
                  getFurnitureHeight={formData.height}
                  getFurnitureWidth={formData.width}
                  getFurnitureLength={formData.length}
                  runHandleInvalid1={error1.length}
                  runHandleInvalid2={error1.height}
                  runHandleInvalid3={error1.width}
                  handlenumeric={handlenumeric}
                />
              )}

              {formData.productType === "Book" && (
                <Book
                  runHandleChange={handleChang}
                  getBookValue={formData.weight}
                  runHandleInvalid={error1.weight}
                  handlenumeric={handlenumeric}
                />
              )}
               

               </div>
        </form>
       
    </div>
    )
      
};

export default Add;