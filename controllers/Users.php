<?php

/*
        code by Peter Mileshko 
        Контроллер для работы с моделью - БД / талица Users

*/

namespace School\controllers;



class Users extends Controller {

    private $email;
    private $password;
    private $id;

      use TraitControllers;
    
    public function __construct ($rest) {
        parent::__construct ($rest);
        $this->email = parent::getValue('email');
        $this->password = parent::getValue('password');
        $this->id = parent::getValue('id');
    }
    
        public function action_login() {

            # Start...    тестовй код   удалить после отладки

            $i=0;
            foreach ( $this->user as $val ) {

                if( $val['email'] == $this->email and $val['password'] == $this->password ) {


                     return json_encode($this->user[$i]);
                    }

                    $i++; 

            }

           return 'Такой пользователь не найден';

           # End  ...    тестовый код
        } 
            public function action_getUser() {

            # Start...    тестовй код   удалить после отладки

            $i=0;
            foreach ( $this->user as $val ) {

                if( $val['id'] == $this->id ) {

                     return json_encode($this->user[$i]);
                     
                    }

                    $i++; 

            }

            $answer = ['result'=>'negative'];
           return json_encode($answer);

           # End  ...    тестовый код
        } 
    
        /* Функция для вывода всех пользователей в админке */

        public function action_all() {

        } 


    
}

?>