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
       
        if ($this->data) {
            $this->user = $this->data;
        }
    }

    /**
     * 
     * @return json
     */
    
        public function action_login() {

            # Start...    тестовый код - после отладки заменить на рабочий

            
            foreach ( $this->user as $val ) {

                if( $val['email'] == $this->email and $val['password'] == $this->password ) {

                    $token = random_int(100, 1000).$val['id'];
                    
                    $val += ['question'=>$token];

                    //$_SESSION['token'] = $token;
                     return json_encode($val);
                    }

            }

           $message = 'Ошибочный пользователь или пароль: '.$this->email;

            throw new \Exception($message);

           # End  ...    тестовый код
        } 

    /**
     * 
     * @return json
     */
    

            public function action_getUser() {

            # Start...    тестовый код - после отладки заменить на рабочий

            foreach ( $this->user as $val ) {

                if( $val['id'] == $this->id ) {

                     return json_encode($val);

                    }

            }

           $message = 'Пользователь не найден: '.$this->id;
           
            throw new \Exception($message);

           # End  ...    тестовый код
        } 

    /**
     * 
     * @return json
     */

         public function action_update() {

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


    /**
     * 
     * @return json
     */
        public function action_all() {

        return json_encode($this->user);

        } 


    
}

?>