<?php
include_once("../classes/db.php");
include_once ("../classes/db_connect.php");
include("../classes/delete_product.php");

//check for the request to delete product
if(isset($_POST['deletepro'])) {
        $alldeletepro= $_POST['deletepro'];
        $extract_pro= implode(',' , $alldeletepro);
        $delete = new Connect();
        $delete->deleteProduct($extract_pro);
    }
