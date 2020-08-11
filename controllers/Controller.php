<?php
/*

    Базовый абстрвктный для взаимосвязи контроллеров с моделями

*/

namespace School\controllers;

abstract class Controller 
{
    
    
    public abstract function action_any();
    public abstract function action_index();
    
    public function __construct() {

    }
    
    public function request() {

    }
            
    
    public function __call($name, $params){
        $this->action_any();
	}
    
}

?>