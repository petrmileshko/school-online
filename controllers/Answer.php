<?php

/*
        code by Peter Mileshko and Alexandr Baukov
        Контроллер для работы с моделью - БД / талица Answer

*/

namespace School\controllers;



class Answer extends Controller {


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

    public function index()
    {
        // TODO: Implement index() method.
    }

    public function show()
    {
        // TODO: Implement show() method.
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