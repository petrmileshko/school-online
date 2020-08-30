<?php
/*
	code by Peter Mileshko and Alexandr Baukov
    Базовый абстрактный класс контроллера

*/

namespace School\controllers;

use Exception;

abstract class Controller
{
    
    protected $db;
    protected $controller;
    protected $method;
    protected $query;
    protected $data;

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
     * Функция для вывода всех данных из конкретной таблицы/связанных таблиц
     */
    abstract public function index();

    /**
     * Функция для вывода данных по конкретному объекту из конкретной таблицы/связанных таблиц
     */
    abstract public function show();

    /**
     * Функция для добавления новых данных  в конкретную таблицу
     */
    abstract public function create();

    /**
     * Функция для обновления данных в конекретной таблице
     */
    abstract public function update();

    /**
     * Функция для удаления данных из конкретной таблицы
     */
    abstract public function delete();


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
     * @param array $fields
     * @param $index
     * @param array $table
     * @return array server response
     * @throws Exception
     */
    public function RenamePLS(array $fields, $index, array $table ) { // Нужно переназвать


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

        throw new Exception($message);

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