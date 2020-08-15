<?php
/*


					Основной контроллер и маршрутизатор

					Автозагрузчик классов

*/

session_start();
require_once '../Init.php';


try {

$query = Init::initialize();


foreach ( $Users as $value ) {

	if( $value['email'] == $query['email'] and $value['password'] == $query['password'] ) {
		ob_start();
		echo 'Добро пожаловать - '.$value['name'];
		echo '<br>Доступ - '.$value['access'];
		exit();
	}

}

echo 'Такой пользователь не найден';


 }
catch(Exception $e) {
        die($e->getMessage());
 }
catch(PDOException $e) {
        die($e->getMessage());
 }


?>