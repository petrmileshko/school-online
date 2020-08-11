<?php

/*
    Singleton  для инициализация подключения к БД и основных функций авторизации
*/

namespace School\models;

final class DbInit {
    
    private static $connection;
    private $params;
    
    public function __construct () {
        
        $this->params = \Init::getDbParams();
    }
    
   public static function getConnection () {
        
        if(self::$connection){
          return self::$connection;
        }
       
       self::$connection = new \PDO($params['dsn'], $params['user'], $params['password']);
       self::$connection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
       
       return self::$connection;
    }
    
    public static function login($login,$password) {
        
    } 
    
    public static function register($user) {
        
    } 
    

}

?>