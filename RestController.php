<?php

/*

					code by Peter Mileshko
					Основной контроллер и маршрутизатор

					Автозагрузчик классов

*/



require_once 'Init.php';


try {


$rest = Init::initialize();


    if ($rest['controller']) {
    
    $instance = new $rest['controller']($rest);
        
    echo $instance->request();

    }
    else {
        echo 'Ошибка передачи данных.';
    }

 }
catch(Exception $e) {
        die($e->getMessage());
 }
catch(PDOException $e) {
        die($e->getMessage());
 }


?>