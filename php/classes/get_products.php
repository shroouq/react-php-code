<?php

include_once("db.php");
include_once ("db_connect.php");

//function to get data from database

class Get extends Connect{

    public function getdata(){

    $products = $this->getProduct();
        print_r($products);
    }
}  
?>
        
