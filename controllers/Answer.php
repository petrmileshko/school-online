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
        $answers = $this->getValue( null, null , $this->query['action']);

        if( $answers ) {
            return json_encode($answers);
        }

        $message = 'Ответов в базе нет.';

        throw new \Exception($message);
    }

    public function show()
    {
        $answer = $this->getValue( null, $this->id, $this->query['action']);

        if( $answer ) {
            return json_encode($answer);
        }

        $message = 'Ответ не найден : '.$this->id;

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