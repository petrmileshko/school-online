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
    protected $data;

    /**
     * @return Exception
     */
    
    public abstract function action_any();   // объявить методы абстрактные


    /**
     * Controller constructor.
     * @param array [ 'Method'=>string ,'Table'=>string,'Query'=>array, 'controller'=>string ]
     */

    public function __construct(array $rest) {

    	$this->controller = array_slice( explode('\\',get_class($this)),2)[0];
        $this->data = \Init::load( $this->controller );
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
     * @param $key string
     * @return string or integer
     */

    public function getValue($key) {
    	return $this->query[$key];
    }

    /**
     * @param array , integer , array
     * @return array server response 
     */

    public function update(array $fields, $index, array $table ) {


            $i=0;
        foreach ($table as $row) {


            if (  $row['id'] == $index ) {

                foreach ($fields as $key => $value) {

                   $table[$i][$key] = $value;

                }

                \Init::save( $table, $this->controller );

                return ['result'=>'positive'];
            }
            $i++;
        }

        $message = 'Ошибка update. Позиция в '.$this->controller.' не найдена - id: '.$this->id;
           
        throw new \Exception($message);

    }

    /**
     * @param $name string
     * @param $params
     */

    public function __call($name, $params){
      $this->action_any();
	}

}

?>