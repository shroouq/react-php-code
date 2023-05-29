<?php

class Router{

    private array $handlers;

    public function get(string $path, $handler) : void{
        $this->addHandler( 'GET', $path, $handler);
    }

    public function post(string $path, $handler):void{
        $this->addHandler( 'POST', $path, $handler);
    }

    public function addHandler( string $method , string $path , $handler):void
    {
        $this->handlers[$method . $path] = [
            'path'=> $path,
            'method'=> $method,
            'handler'=> $handler, 
        ];
    }

    public function run(){
        $requestUri = parse_url($_SERVER ['REQUEST_URI']);
        $requestPath = $requestUri['path'];
        $method = $_SERVER['REQUEST_METHOD'];
        $callback = null;


        foreach ($this->handlers as $handler){
            if($handler['path']===$requestPath && $method === $handler['method']){
                $callback = $handler['handler'];
            }
        }

        call_user_func_array($callback , [
            array_merge($_GET,$_POST)
        ]);
        }
    }
