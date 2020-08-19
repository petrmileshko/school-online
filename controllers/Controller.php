<?php
/*
	code by Peter Mileshko 
    Базовый абстрвктный класс контроллера

*/

namespace School\controllers;

abstract class Controller 
{
    
    protected $db;
    protected $controller;
    protected $method;
    protected $query;

    /**
     * @return Exeption
     */
    
    public abstract function action_any();   // объявить методы абстрактные


    /**
     * Controller constructor.
     * @param array [ 'Method'=>string ,'Table'=>string,'Query'=>array, 'controller'=>string ]
     */

    public function __construct($rest) {

    	$this->controller = array_slice( explode('\\',get_class($this)),2)[0];
    	$this->query = $rest['Query'];
    	$this->method = $rest['Method'];
    }


    /**
     * @return Json
     */

    public function request() {

		$action = 'action_';

		if($this->query['action']) 	{  
			$action .= $this->query['action'];
		    return $this->$action();
		}
		else {
			$action .= 'any';
    		return $this->$action();
		}
    }

    /**
     * @param $key
     * @return string or integer
     */

    public function getValue($key) {
    	return $this->query[$key];
    }

    /**
     * @param $name
     * @param $params
     */

    public function __call($name, $params){
      $this->action_any();
	}

}

?>