<?php

    class Product{
    private $sku;
    private $name;
    private $price;
    private $type;
    private $height;
    private $width;
    private $size;
    private $weight;
    private $length;

    
        //grabbing the data
        public function setSku($sku){
            $this->sku = $sku;
        }

        public function getSku(){
            return $this->sku; 
        }

        public function setName($name){
            $this->name = $name;
        }

        public function getName(){
            return $this->name; 
        }

        public function setPrice($price){
            $this->price = $price;
        } 

        public function getPrice(){
            return $this->price; 
        }
    
        public function setType($type){
            $this->type = $type;
        }
    
        public function getType(){
            return $this->type; 
        }

        public function setHeight($height){
            $this->height = $height;
        }
      
        public function getHeight(){
            return $this->height; 
        }

        public function setWidth($width){
            $this->width = $width;
        }

        public function getWidth(){
            return $this->width; 
        }

        public function setSize($size){
            $this->size = $size;
        }

        public function getSize(){
            return $this->size; 
        }

        public function setWeight($weight){
            $this->weight = $weight;
        }

        public function getWeight(){
            return $this->weight; 
        }

        public function setLength($length){
            $this->length = $length;
        }

        public function getLength(){
            return $this->length; 
        }

    }

?>