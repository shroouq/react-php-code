<?php

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
