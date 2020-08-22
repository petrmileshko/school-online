<?php

/*
        code by Peter Mileshko 
        Контроллер для работы с моделью - БД / талица Answers

*/

namespace School\controllers;



class Answers extends Controller {


    use TraitControllers;
    
    public function __construct ($rest) {
        parent::__construct ($rest);
    }
    
        public function action_scores() {

            # Start...    тестовый код - после отладки заменить на рабочий

                     return json_encode($this->answers);


           # End  ...    тестовый код
        } 
        public function action_all() {

            # Start...    тестовый код - после отладки заменить на рабочий

                     return json_encode($this->answers);


           # End  ...    тестовый код
        } 
}

?>