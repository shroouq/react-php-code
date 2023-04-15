<?php

include_once("db_connect.php");

class Contr extends Connect {

    //add product to database if the sku is not exist
    public function addpro($sku,  $data){
        if($this->check($sku) == false){
            print_r("false");
            exit();
        }
       else{
            $this->setUser($data);
            exit();
       }
    }
    //get result from database if sku is exist or not
    private function check($sku){
        $result= $this->checkSku($sku);
        if($result > 0 ){
            return false;
        }
        else{

            return true;}
        }
    }

            
