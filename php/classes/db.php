<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

class Db{

    private $host = "localhost";
    private $user = "root";
    private $password = "";
    private $dbName= "scandiweb_test";

    protected function connect(){
        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbName;
        $pdo = new PDO ($dsn, $this->user, $this->password);
        return $pdo;
    }
}
?>