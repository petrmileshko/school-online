<?php

/*
        code by Peter Mileshko 
        Контроллер для работы с моделью - БД / талица Tasks

*/

namespace School\controllers;



class Tasks extends Controller {

    private $id;

    use TraitControllers;
    
    public function __construct ($rest) {
        parent::__construct ($rest);
        $this->id = parent::getValue('id');
    }
    
    /**
     * 
     * @return json
     */

        public function action_getTasks() {

            $tasks = $this->getValue( null, null , $this->query['action']);

                if( $tasks ) {
                     return json_encode($tasks);
                    }

            $message = 'Заданий в базе нет.';

            throw new \Exception($message);
        } 

    /**
     * 
     * @return json
     */
        public function action_getTask() {

             $task = $this->getValue( null, $this->id, $this->query['action']);

                if( $task ) {
                     return json_encode($task);
                    }

           $message = 'Задача не найдена : '.$this->id;

            throw new \Exception($message);

        }

    /**
     * 
     * @return json
     */
        public function action_createTask() {



           $message = 'Задача не найдена : '.$this->id;

            throw new \Exception($message);

        }



}

?>