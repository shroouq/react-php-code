<?php

include_once("../classes/db.php");
include_once ("../classes/db_connect.php");
include_once("../classes/setData.php");
include("../classes/contr_data.php");
include("../classes/get_products.php");
include("../classes/prodcttype.php");


    //check for the post request to add product
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $data = new Product();

    
        $data->setSku($_REQUEST['sku']);
        $data->setName($_REQUEST['name']);
        $data->setPrice($_REQUEST['price']);
        $data->setHeight($_REQUEST['height']);
        $data->setWidth($_REQUEST['width']);
        $data->setSize($_REQUEST['size' ]);
        $data->setWeight($_REQUEST['weight']);
        $data->setLength($_REQUEST['length']);
        $data->setType($_REQUEST['productType']);


        $sku= $data->getSku() ;
        $name= $data->getName() ;
        $price = $data->getPrice();
        $type = $data->getType();
        $height= $data->getHeight() ;
        $width = $data->getWidth() ;
        $size = $data->getSize() ;
        $weight = $data->getWeight();
        $length = $data->getLength() ;
        $dimensions="";
        $dimensions= $height . "x" . $width ."x" .$length;
        

        $addproduct = new Datadd();

        $addproduct->attribute( $sku, $name, $price ,$type, $size, $weight, $dimensions);
        
    }

    //check for the get request to get data from database

    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $connect = new Get();
        $products = $connect->getdata();
        print_r($products);
        
    }


?>
