<?php

include_once("contr_data.php");
include_once("setData.php");


interface producttype
{
    public function addproduc();
}


class Book implements producttype
{
    public function __construct($sku, $name, $price, $type, $size, $weight)
    {
        $this -> sku = $sku;
        $this -> price = $price;
        $this -> name = $name;
        $this -> type = $type;
        $this -> weight = $weight;
    }
    public function addproduc()
    {

        $data= array('sku'=>$this->sku,'name'=>$this->name,'price'=>$this->price , 'type'=>$this->type , 'weight'=>$this->weight);
        $addproduct = new Contr();
        $addproduct->addpro($this->sku, $data);
    }
}
class DVD implements producttype
{
    public function __construct($sku, $name, $price, $type, $size)
    {
        $this -> sku = $sku;
        $this -> price = $price;
        $this -> name = $name;
        $this -> type = $type;
        $this -> size = $size;
    }
  public function addproduc()
  {

      $data= array('sku'=>$this->sku,'name'=>$this->name,'price'=>$this->price , 'type'=>$this->type , 'size'=>$this->size);
      $addproduct = new Contr();
      $addproduct->addpro($this->sku, $data);
  }
}
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


class Datadd
{
    public function attribute($sku, $name, $price, $type, $size, $weight, $dimensions)
    {

        $class = $type;
        $d =  new $class($sku, $name, $price, $type, $size, $weight, $dimensions);
        $d->addproduc();
    }
}
