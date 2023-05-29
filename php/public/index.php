<?php

require("../vendor/autoload.php");
$router = new Router();

$router->post('/php/classes/Contact', function(){
    $contact = new Contact();
    $contact->create();});

$router->post('/php/controller/ControllerDelete', function(){
    $contact = new ControllerDelete();
    $contact->delete();});
    
$router->get('/php/controller/Contact', function(){
    $contact = new Contact();
    $contact->index();});



$router->run();

