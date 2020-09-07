<?php

/*

					code by Peter Mileshko
					Основной контроллер и маршрутизатор

					Автозагрузчик классов

*/



require_once 'Init.php';


try {

$queryLog = new Log(LOG_FILE);

$rest = Init::initialize($queryLog);


    if ($rest['controller']) {
    
    $instance = new $rest['controller']($rest);
      
    http_response_code(200);
    $answer = $instance->request();
    $queryLog->save( null , $answer);
    $queryLog->close();
    echo $answer;

    }
    else {
           throw new Exception('Ошибка передачи данных');
    }

 }
catch(Exception $e) {

           $answer = ['result'=>'negative','message'=>$e->getMessage()];
           $queryLog->save( null , $answer);
           $queryLog->close();
           http_response_code(404);
           echo json_encode($answer, JSON_UNESCAPED_UNICODE);

 }
catch(PDOException $e) {

           $answer = ['result'=>'negative','message'=>$e->getMessage()];
           http_response_code(404);
           $queryLog->save( null , $answer);
           $queryLog->close();
           echo json_encode($answer, JSON_UNESCAPED_UNICODE);
 }


?>