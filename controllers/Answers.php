<?php

/*
        code by  Aleksandr Baukov
        Контроллер для работы с моделью - БД / талица Answers

*/

namespace School\controllers;



use School\models\SQL;

class Answers extends Controller {

    private $id;

    use TraitControllers;
    
    public function __construct ($rest) {
        parent::__construct ($rest);
        $this->id = parent::getValue('id');
    }


    /**
     * @return false|string
     * @throws \Exception
     */
    public function action_getAnswer() {

        $answer = $this->getValue( null, $this->id, $this->query['action']);

        if( $answer ) {
            return json_encode($answer, JSON_UNESCAPED_UNICODE);
        }

        $message = 'Ответ не найден : '.$this->id;

        $this->fail($message);

    }


    /**
     * @return false|string
     * @throws \Exception
     */
    public function action_getAnswers() {

        $answers = $this->getValue( null, null , $this->query['action']);

        if( $answers ) {
            return json_encode($answers, JSON_UNESCAPED_UNICODE);
        }

        $this->fail('Ответов в базе нет.');
    }


    /**
     * @return false|string
     * @throws \Exception
     */
    public function action_Update() {

        $result =  $this->setValue( 'id='.$this->id, array_slice($this->query, 3) , $this->query['action']);

        if( $result ) {
            return json_encode(['result'=>'positive', 'message'=>$result], JSON_UNESCAPED_UNICODE);
        }

        $this->fail('Ошибка обновления данных в таблице: '.$this->controller);
    }

    /**
     * @return false|string
     * @throws \Exception
     */
    public function action_Insert(){
        $result =  $this->setValue(null, array_slice($this->query, 2) , $this->query['action']);

        if( $result ) {
            return json_encode(['result'=>'positive', 'message'=>$result], JSON_UNESCAPED_UNICODE);
        }

        $this->fail('Ошибка при добавлении данных в таблицу: '.$this->controller);
    }

}

?>