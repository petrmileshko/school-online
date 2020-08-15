<?php

    const INI_FILE = '../config/config.ini';
    $Users = [

        '0' => ['name' => 'Peter',
         'email' => 'peter@mail.ru',
         'password' => '1234',
         'access' => 'Учитель',
        ],
        
        '1' => ['name' => 'Иван',
         'email' => 'ivan@mail.ru',
         'password' => '1234',
         'access' => 'Ученик',
        ]
    ];

/*


					Класс инициализации серверного приложения

					Автозагрузчик классов

*/

use \School\controllers;
use \School\models;


/*
	Функция против инъекций 
	@param string 
*/

function multiStrip($str) {
    return stripslashes( strip_tags( trim($str) ) );
    }



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


        // Считываем REST запрос, обрабатываем и возвращаем

        $method = $_SERVER['REQUEST_METHOD'];
        switch ($method ) {
            case 'GET'    :
            return $_GET;
            break;
            case 'POST'   :
            case 'PUT'    :
            case 'DELETE' :
            $rawData = multiStrip(file_get_contents("php://input"));

            $value = explode('&',$rawData);

            for($i=0;$i<count($value);$i++) {
                $res[$i] = explode('=',$value[$i]);
                $assoc[$i] = [$res[$i][0]=>$res[$i][1]];
            }

             $table = $assoc[0]['Table'];
            $qeury = array_slice($assoc, 1);
            // Передаем обработанный запрос    
            return [ 'Method'=>$method ,'Table'=>$table,'Query'=>$qeury ] ; 
            break;
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
        else throw new Exception('Автозагрузчик : файл не найден - '.$file);
    }

}



?>