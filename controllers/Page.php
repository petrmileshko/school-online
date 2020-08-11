<?php
/*
    Маршрутизатор и основной контроллер моделей страниц
*/

namespace School\controllers;

class Page {
    
    private static $action;
    
    public static function router() {

        
    }
    public static function setAction () { 
        $action = 'index';
         self:$action = $action;
    }
    
    public static function getAction () {
        return self:$action;
    }

}

?>