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
    
        public function action_all() {

            # Start...    тестовй код - после отладки заменить на рабочий

                     return json_encode($this->tasks);


           # End  ...    тестовый код
        } 

        public function action_getTask() {

            # Start...    тестовй код - после отладки заменить на рабочий

            $i=0;
            foreach ( $this->tasks as $val ) {

                if( $val['id'] == $this->id ) {

                     return json_encode($val);

                    }

                    $i++; 

            }
        }
}

?>