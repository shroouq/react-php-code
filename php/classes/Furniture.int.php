<?php

class Furniture implements producttype
{
    public function __construct($sku, $name, $price, $type, $size, $weight, $dimensions)
    {
        $this -> sku = $sku;
        $this -> price = $price;
        $this -> name = $name;
        $this -> type = $type;
        $this -> dimensions = $dimensions;


    }
  public function addproduc()
  {

      $data= array('sku'=>$this->sku,'name'=>$this->name,'price'=>$this->price , 'type'=>$this->type , 'dimensions'=>$this->dimensions);
      $addproduct = new Contr();
      $addproduct->addpro($this->sku, $data);
  }
}



