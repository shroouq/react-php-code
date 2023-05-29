<?php

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

