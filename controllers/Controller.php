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
    protected $passport;

    /**
     * @param $message
     * @return Exception
     */
    
    public abstract function fail($message);   // объявить методы абстрактные


    /**
     * Controller constructor.
     * @param array [ 'Method'=>string ,'Table'=>string,'Query'=>array, 'controller'=>string ]
     */

    public function __construct(array $rest) {

    	$this->controller = array_slice( explode('\\',get_class($this)),2)[0];
        $this->data = \Init::load( $this->controller );
    	$this->query = $rest['Query'];
    	$this->method = $rest['Method'];
        $this->db = \School\models\SQL::Instance();
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
     * @param $value string or integer
     * @param null $func
     * @return string or integer or array
     */

    public function getValue( $key = null, $value = null , $func = null ) {

        if ( $value and $key ) {

            return $this->db->Select($this->controller, $key, $value);

        } 
        elseif ( $key ) {

            return ( $this->query[$key] ) ? $this->query[$key] : null ;
        }
        elseif( $func ) {

            return ( $value ) ? $this->db->$func($value) : $this->db->$func();
        }
        else  {
            return $this->db->Select($this->controller);
            }


    }

    /**
     * @param null $key
     * @param $value
     * @param $func
     * @return array server response
     * @throws \Exception
     */

    public function setValue( $key = null, $value , $func ) {

            if ($key) { 
                return $this->db->$func($this->controller, $value, $key ); 
            }
            else { 
                return $this->db->$func($this->controller, $value ); 
            }


        $message = 'Ошибка setValue. Таблица '.$this->controller;
           
        throw new \Exception($message);

    }


    /**
     * @param $name string
     * @param $params
     */

    public function __call($name, $params){
        $msg = 'Метода нет action : '.$this->query['action'];
      $this->fail($msg);
	}

}

?>