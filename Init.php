<?php
session_start();
/*

                    code by Peter Mileshko 
					Класс инициализации серверного приложения

					Автозагрузчик классов

*/


const INI_FILE = 'config/config.ini';

use \School\controllers;
use \School\models;


/*
	Функция против инъекций 
	@param string 
*/

function multiStrip($str) {
    return stripslashes( strip_tags( trim($str) ) );
    }

//    Класс инициализации серверного приложения

final class Init {

	private static $dbParams;

	
public static function initialize() {

	 if(!is_file(INI_FILE)) throw new Exception('Файл не найден - '.INI_FILE);
       
       $iniData = parse_ini_file( INI_FILE, true ); // Загружаем параметры сайта
       
       if( !$iniData['database'] ) throw new Exception('Ошибка в файле - '.INI_FILE.'<br>Не заданы параметры');
       
       //Формируем данные для подключения БД

       $dsn = sprintf( '%s:dbname=%s;host=%s', $iniData['database']['driver'], $iniData['database']['dbname'], $iniData['database']['host'] );
        self::$dbParams = ['dsn'=>$dsn,'user'=>$iniData['database']['username'],'password'=>$iniData['database']['password']];

        // Регистрируем автозагрузчик классов
       
        ini_set('unserialize_callback_func', 'spl_autoload_call');
        spl_autoload_register([new self, 'autoloader']);


        // Считываем REST запрос, обрабатываем и возвращаем массив с параметрами контроллера

        $method = $_SERVER['REQUEST_METHOD'];

        switch ($method ) {

            case 'GET'    :
               // $table = $_GET['Table'];
               // $query = array_slice($_GET, 1);
               // $rest = [ 'Method'=>$method ,'Table'=>$table,'Query'=>$query, 'controller'=>"School\\controllers\\$table"]; 
               // return $rest;

            case 'POST'   :
               // $table = $_POST['Table'];
               // $query = array_slice($_POST, 1);
               // $rest = [ 'Method'=>$method ,'Table'=>$table,'Query'=>$query, 'controller'=>"School\\controllers\\$table"]; 
               // return $rest;

            case 'PUT'    :
            case 'DELETE' :
                //$rawData = multiStrip(file_get_contents("php://input"));
                $rawData = file_get_contents("php://input");
                ob_start();
                echo "Метод - $method<br>";
                echo 'Получено с сервера :<pre>';

                if($method == 'GET') print_r($_GET);
                else print_r($rawData);

                echo '<br>После конвертации:<br>';
                if( $method == 'GET') {
                    $res = [];

                    foreach( $_GET as $key=>$val ) {

                        $res += [$key=>$val];
                    }     

                    print_r($res);
                }
                else print_r(json_decode($rawData));

                echo '</pre><br>';
                
                die('Получено на сервре');
/*
                $value = explode('&',$rawData);
                    $assoc =[];

                for($i=0;$i<count($value);$i++) {
                    $res[$i] = explode('=',$value[$i]);
                    $assoc += [$res[$i][0]=>$res[$i][1]];
                }

                $table = $assoc['Table'];
                $query = array_slice($assoc, 1);
                $rest = [ 'Method'=>$method ,'Table'=>$table,'Query'=>$query, 'controller'=>"School\\controllers\\$table"]; 
                return $rest;
*/
            default:
               throw new Exception('Ошибка метод запроса  - '.$method);
            break;
        }

        

    }

    public static function autoloader($class)       // автозагручик классов
    {
        $result = array_slice( explode('\\',$class),1);
        for ($i=0;$i<count($result);$i++) {
            if($i<count($result)-1) $file .= $result[$i].'/';
            else  $file .= $result[$i];
                }
        $file .= '.php';
         
        if (is_file($file)) {          
            require $file;        
        }
        else throw new Exception('Автозагрузчик : класс не найден - '.$class);
    }

    public static function getDBParams() {
        
        return self::$dbParams;
    }

}


?>