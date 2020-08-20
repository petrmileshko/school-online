<?php

/*
        code by Peter Mileshko 
        Контроллер для работы с моделью - БД / талица Tasks

*/

namespace School\controllers;



class Tasks extends Controller {


    use TraitControllers;
    
    public function __construct ($rest) {
        parent::__construct ($rest);
    }
    
        public function action_all() {

            # Start...    тестовй код - после отладки заменить на рабочий

                     return json_encode($this->tasks);


           # End  ...    тестовый код
        } 
    
}

?>