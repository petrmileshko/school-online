<?php
const DRIVER = 'mysql';
const SERVER = 'localhost';
const USERNAME = 'root';
const PASSWORD = '';
const DB = 'school';
const LOG_FILE = 'data/query_log.html';


class Log {

    static $fileOpen;
    
    /**
     * @param string
     * @return 
     */

    public function __construct ( $logFile ) {

        if ( file_exists($logFile) ) {

        self::$fileOpen = fopen($logFile,"a"); 

        }

    }

    /**
     * @param string
     * @return array
     */

    public function save( $query = null , $answer = null) {

        if (self::$fileOpen) {

                if ( $query ) {
                        fwrite(self::$fileOpen,date('d-m-Y, G:i'));
                        fwrite(self::$fileOpen,'<br>Получен запрос :'.$query);
                        fwrite(self::$fileOpen,'<br>' );
                }
                elseif ( $answer ) {
                        fwrite(self::$fileOpen,'<br>Ответ на запрос :'.$answer);
                        fwrite(self::$fileOpen,'<hr>' );
                }
        }
    }
    /**
     * @param 
     * @return 
     */

    public function close() {

        if (self::$fileOpen){

                fclose(self::$fileOpen);
        }
    }
}


?>