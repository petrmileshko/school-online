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
        $this->password = parent::getValue('pass');
        $this->id = parent::getValue('id');
    }

    /**
     * 
     * @return json
     */
    
    public function action_login() {

        if( !$this->passport and !$this->data ) {

            $user = $this->getValue( null,[ 'email'=>$this->email , 'pass'=>$this->password ], $this->query['action']);

                if ( $user ) {

                    $this->passport = new \School\models\Passport($user);
                    $user += $this->passport->get(); 

                    return json_encode($user);
                }
                else {
                $message = 'Ошибочный email: ('.$this->email.') или пароль.';
                throw new \Exception($message);                
                }

            }
                $message = 'Уже авторизованы. is Authorized';
                throw new \Exception($message);  
    } 

    /**
     * 
     * @return json
     */
    
    public function action_logout() {

        if( $this->passport or $this->data ) {

                \School\models\Passport::destroy();

                return json_encode(['result'=>'positive','message'=>'Signed off']);
            }

    } 

    /**
     * 
     * @return json
     */
    

        public function action_getUser() {

              $user = $this->getValue( null, $this->id, $this->query['action']);

                if( $user ) {
                     return json_encode($user);
                    }

           $message = 'Пользователь не найден : '.$this->id;

            throw new \Exception($message);

        }

    /**
     * 
     * @return json
     */

    public function action_getUsers() {

            $users = $this->getValue( null, null , $this->query['action']);

                if( $users ) {
                     return json_encode($users);
                    }

            throw new \Exception('Пользователей в базе нет.');
        } 


    /**
     * 
     * @return json
     */

         public function action_Update() {

            $result =  $this->setValue( 'id='.$this->id, array_slice($this->query, 3) , $this->query['action']);

                    if( $result ) {
                     return json_encode(['result'=>'positive', 'message'=>$result]);
                    }

            throw new \Exception('Ошибка сохранения данных таблицы: '.$this->controller);
        } 

    
}

?>