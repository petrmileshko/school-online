<?php
/*
        code by Peter Mileshko 
        Модль для авторизации и хранения токенов

*/

namespace School\models;

class Passport {

    private $token;
    


    public function __construct ( array $user ) {

        $this->token = random_int(100, 1000).$user['id'];
        \Init::save( [ 'question' => $this->token ] , 'question' );
        \Init::save( $user , 'user' );

    }

    /**
     * 
     * @return array
     */

    public function get() {
        return ( $this->token ) ? [ 'question' => $this->token ] : \Init::load('question');
    }

    public static function confirm( $question ) {

        return ( \Init::load('question')['question'] == $question );

    }


}


?>
