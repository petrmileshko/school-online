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
           throw new Exception('Ошибка передачи данных');
    }

 }
catch(Exception $e) {

           $answer = ['result'=>'negative','message'=>$e->getMessage()];
           echo json_encode($answer);

 }
catch(PDOException $e) {

           $answer = ['result'=>'negative','message'=>$e->getMessage()];
           echo json_encode($answer);
 }


?>