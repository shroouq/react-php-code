<?php

include_once("db.php");
include_once("db_connect.php");


class Delete extends Connect
{
    //function to delete product from database
    public function delete($extract_pro)
    {
        $this->deleteProduct($extract_pro);
    }
}
