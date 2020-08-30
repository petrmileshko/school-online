<?php

/*
        code by Peter Mileshko and Alexandr Baukov
        Контроллер для работы с моделью - БД / талица User

*/

namespace School\controllers;


/**
 * Class User
 * @package School\controllers
 */
class User extends Controller {

    private $email;
    private $password;
    private $id;

    use TraitControllers;
    
    public function __construct ($rest) {

        parent::__construct ($rest);

        $this->email = parent::getValue('email');
        $this->password = parent::getValue('password');
        $this->id = parent::getValue('id');
       
        if ($this->data) {
            $this->user = $this->data;
        }
    }

    /**
     * @return false|string
     * @throws \Exception
     * Функция для авторизации
     */
    public function login() {

        foreach ( $this->user as $val ) {
            if( $val['email'] == $this->email) {
                if ($val['password'] == $this->password){
                    $token = random_int(100, 1000).$val['id'];
                    $val += ['question'=>$token];
                    return json_encode($val);
                } else $message = 'Пароль не верный!';
            } else $message = 'Пользователь с таким email не зарегистрирован!';
        }

        throw new \Exception($message);
    }

    /**
     * @return false|string
     * @throws \Exception
     * Показать конкретного пользователя
     */
    public function show() {

        $user = $this->getValue( null, $this->id, $this->query['action']);

        if( $user ) {
            return json_encode($user);
        }

        $message = 'Пользователь не найден : '.$this->id;

        throw new \Exception($message);

        }

    /**
     * @return false|string
     * @throws \Exception
     * Показать всех пользователей
     */
    public function index() {

            $users = $this->getValue( null, null , $this->query['action']);

                if( $users ) {
                     return json_encode($users);
                    }

            $message = 'Пользователей в базе нет.';

            throw new \Exception($message);
        }


    /**
     * @return false|string
     * @throws \Exception
     * Обновить данные пользователя
     */
    public function update() {

            # Start...    тестовый код - после отладки заменить на рабочий

            foreach ( $this->user as $val ) {

                if( $val['id'] == $this->id ) {

                    $result = $this->update( array_slice($this->query, 1), $this->id , $this->user );

                     return json_encode($result);

                    }

            }

           $message = 'Пользователь не найден: '.$this->id;
           
            throw new \Exception($message);

           # End  ...    тестовый код
        }

        public function create()
        {
            // TODO: Implement create() method.
        }
        public function delete()
        {
            // TODO: Implement delete() method.
        }


    /**
     * @return false|string
     */
    public function action_all() {

        return json_encode($this->user);

        } 

}

?>