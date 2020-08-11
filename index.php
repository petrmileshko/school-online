<?php

/*
    Точка входа в приложение / вызов инициализации / выбор маршрута / выбор действия / Заппос к модели выполнить дейтсвие
*/

session_start();

include "Init.php";

try {

Init::initialize();

$page = School\controllers\Page::router();
    
$action = School\controllers\Page::getAction();

$page->request($action);

 }
catch(Exception $e) {
        die($e->getMessage());
 }
catch(PDOException $e) {
        die($e->getMessage());
 }

?>