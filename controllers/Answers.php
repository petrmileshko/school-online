<?php

/*
        code by  Aleksandr Baukov
        Контроллер для работы с моделью - БД / талица Answers

*/

namespace School\controllers;



use School\models\SQL;

class Answers extends Controller {

    private $id;
    private $array;

    use TraitControllers;
    
    public function __construct ($rest) {
        parent::__construct ($rest);
        $this->id = parent::getValue('id');
        $this->array = parent::getValue('array');
    }


    /**
     * @return false|string
     * @throws \Exception
     */
    public function action_getAnswer() {

        $user = $this->getValue( null, $this->id, $this->query['action']);

        if( $user ) {
            return json_encode($user);
        }

        $message = 'Ответ не найден : '.$this->id;

        $this->fail($message);

    }


    /**
     * @return false|string
     * @throws \Exception
     */
    public function action_getAnswers() {

        $users = $this->getValue( null, null , $this->query['action']);

        if( $users ) {
            return json_encode($users);
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
            return json_encode(['result'=>'positive', 'message'=>$result]);
        }

        $this->fail('Ошибка обновления данных в таблице: '.$this->controller);
    }

    /**
     * @return false|string
     * @throws \Exception
     */
    public function action_Insert(){ // принимает $table, $array
        $result =  $this->addValue('Answers', $this->array , $this->query['action']);

        if( $result ) {
            return json_encode(['result'=>'positive', 'message'=>$result]);
        }

        $this->fail('Ошибка при добавлении данных в таблицу: '.$this->controller);
    }

}

?>