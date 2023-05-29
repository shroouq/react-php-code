<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
class Connect extends Db
{
    //put data into database


    public function setUser($data)
    {

        $columnString = implode(',', array_keys($data));
        $valueString = implode(',', array_fill(0, count($data), '?'));
        $sql= "INSERT INTO product ({$columnString}) VALUES ({$valueString})";
        $stmt = $this->connect()->prepare($sql);
        $s = $stmt->execute(array_values($data));

        foreach($data as $key => $value) {
            $s->bindParam(':' . $key, $array[$key]);
        }
        return true;

    }

    //get data from database
    public function getProduct()
    {

        $sql1= "SELECT * FROM product ORDER BY ID";
        $stmt1= $this->connect()->prepare($sql1);
        $stmt1->execute();
        $array = $stmt1->fetchAll();
        return json_encode($array);

    }

    //delete from database
    public function deleteProduct($pro)
    {
        $sql2= "DELETE FROM product WHERE ID IN ($pro )";
        //$stmt->bind_param("i", $id);
        $stmt2 = $this->connect()->prepare($sql2);
        $stmt2->execute();


    }

    //check if sku is exist
    public function checkSku($sku)
    {

        $sql3= "SELECT sku FROM product WHERE SKU='".$sku."'";
        $stmt3= $this->connect()->prepare($sql3);
        $stmt3->execute();
        $result= $stmt3->rowCount();
        return $result;


    }

}
