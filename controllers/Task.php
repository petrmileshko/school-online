<?php

/*
        code by Peter Mileshko and Alexandr Baukov
        Контроллер для работы с моделью - БД / талица Task

*/

namespace School\controllers;



class Task extends Controller {

    private $id;

    use TraitControllers;
    
    public function __construct ($rest) {
        parent::__construct ($rest);
        $this->id = parent::getValue('id');
    }


    /**
     * 
     * Показать все задания
     */

        public function index() {

            $tasks = $this->getValue( null, null , $this->query['action']);

                if( $tasks ) {
                     return json_encode($tasks);
                    }

            $message = 'Заданий в базе нет.';

            throw new \Exception($message);
        } 

    /**
     * 
     * Показать конкретное задание
     */
        public function show() {

             $task = $this->getValue( null, $this->id, $this->query['action']);

                if( $task ) {
                     return json_encode($task);
                    }

           $message = 'Задача не найдена : '.$this->id;

            throw new \Exception($message);

        }
        public function create()
        {
            // TODO: Implement create() method.
        }
        public function update()
        {
            // TODO: Implement update() method.
        }
        public function delete()
        {
            // TODO: Implement delete() method.
        }
}

?>