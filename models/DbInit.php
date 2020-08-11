<?php

/*
    Singleton  для инициализация подключения к БД и основных функций авторизации
*/

namespace School\models;

final class DbInit {
    
    private static $connection;

    /*

    Пример  инициализации и работы с объектом:

    $connect = School\models\DbInit::prepare('Select * From Table');

    $connect->execute();

    $connect->fetchAll();

    */
  
    
   final private static function getConnection () {
        
        if(self::$connection){
          return self::$connection;
        }
       
       $params = \Init::getDBParams();

       self::$connection = new \PDO($params['dsn'], $params['user'], $params['password']);
       self::$connection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
       
       return self::$connection;
    }
    
    public static function login($login,$password) {
        
    } 
    
    public static function register($user) {
        
    } 
    
    public static function __callStatic ( $name, $args ) {
        $callback =  [self :: getConnection ( ), $name ] ;
        return call_user_func_array ( $callback , $args ) ;
    } 


}

?>