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

        public function action_all() {

            $tasks = $this->getValue();

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

             $task = $this->getValue( 'id', $this->id);

                if( $task ) {
                     return json_encode($task);
                    }

           $message = 'Задача не найдена : '.$this->id;

            throw new \Exception($message);

        }
}

?>