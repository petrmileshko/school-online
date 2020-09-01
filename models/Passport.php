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

    /**
     * @param  string
     * @return boolean
     */

    public static function confirm( $question ) {

        return ( \Init::load('question')['question'] == $question );

    }

    /**
     * @param  
     * @return 
     */

    public static function destroy() {

    \Init::delete('question');
    \Init::delete('user');

    }

}
/*
            ob_start();
            echo '<pre>';
            print_r( $value);
            print_r( $func);
            echo '</pre>';
            die('Test');
            */
?>
