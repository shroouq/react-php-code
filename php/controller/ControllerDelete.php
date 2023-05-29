<?php

class ControllerDelete{
public  function delete(){

    if(isset($_POST['deletepro'])) {
       $alldeletepro= $_POST['deletepro'];
       $extract_pro= implode(',', $alldeletepro);
       $delete = new Connect();
       $delete->deleteProduct($extract_pro);
   }
}
}
      
?>
