<?php
/*


					Основной контроллер и маршрутизатор

					Автозагрузчик классов

*/

session_start();
require_once '../Init.php';


try {

$query = Init::initialize();


ob_start();
echo '<pre>';
print_r($query);
echo '</pre>';

 }
catch(Exception $e) {
        die($e->getMessage());
 }
catch(PDOException $e) {
        die($e->getMessage());
 }


?>