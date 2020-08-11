<?php
/*

    Окончательная модель для работы с БД все функции необходимые для формирования запровсов, обработки данных и передачи их в модели страниц
    
*/

namespace School\models;

final class DBmodel 
{
      
    private $connection;

    
    public function __construct() {

    		$sql = 'Select * From Table';
        $this->connection = School\models\DbInit::prepare($sql);

    }
    
    
    public function __call($name, $params){
 
	}
    
}

?>