import React, { useState, useEffect, } from "react";
import $ from "jquery";
import { Link } from 'react-router-dom';
import "../App.css";
import DvdItem from "./DvdItem";
import BookItem from "./BookItem";
import Furnitureitem from "./FurnitureItem";

function Home() {

  const [item, setItem] = useState([])
  // get list of products from database
  useEffect(() => {
    fetch("http://localhost/php/includes/index.php")
      .then(res => res.json())
      .then(
        (result) => {
          setItem(result);
        })
  }, []);



  //Delete check items
  function handleDelete(e) {
    e.preventDefault();

    const form = $(e.target);
    console.log(form);
    $.ajax({
      type: "POST",
      url: "http://localhost/php/includes/index.php",
      data: form.serialize(),
      dataType: "json",
      encode: true,
      success(data) {
        console.log(data);
      },
    })
    window.location.reload(false);
  }

  const [error1, setError1] = useState({});

  function validData() {
    let attribute = {}
    attribute.size = "Size: "

    setError1({ ...attribute });
  }




  return (
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
          {item.map(item => {
            return (
              <div className="item">
                <input className="delete-checkbox" type="checkbox" name="deletepro[]" value={item.id} />

                {item.type === "DVD" && <DvdItem
                  sku={item.sku}
                  name={item.name}
                  price={item.price}
                  size={item.size} />}

                {item.type === "Book" && <BookItem
                  sku={item.sku}
                  name={item.name}
                  price={item.price}
                  weight={item.weight} />}



                {item.type === "Furniture" && <Furnitureitem
                  sku={item.sku}
                  name={item.name}
                  price={item.price}
                  dimensions={item.dimensions} />}

              </div>
            )
          }

          )}

        </div>
      </form>
    </div>
  )
};

export default Home;
