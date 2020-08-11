<?php
/*
    Singleton  для инициализация приложения и установки констант, конфигурации и тд
*/

    const INI_FILE = 'config/config.ini';

    use \School\models;
    use \School\controllers;


final class Init {
    
    private static $dbParams;
    private static $siteName;

    
   public static function initialize()
    {
       // Инициализируем все необходимые данные для сайта
       
       

       // Регистрируем автозагрузчик классов
       
        ini_set('unserialize_callback_func', 'spl_autoload_call');
        spl_autoload_register([new self, 'autoloader']);
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
        else throw new Exception('Файл не найден - '.$file);
    }
    

    
    public static function getDbParams() {
        
        return self::$dbParams;
    }
    
    public static function getSiteParams() {
        
        return self::$siteParams;
    }
    
    public static function getSiteName() {
        
        return self::$siteName;
    }
    
    
            //  Авторизация пользователя
    
    public static function is_Authorized() {

    }
    
    public static function authorize($user,$password) {
            
        if ( self::is_Authorized() ) return;
        
        $user = School\models\DbInit::login($user,$password);
           
    }
    
    public static function registration($user) {
        
        if(!$user or !is_array($user) ) return null;
        
        $userNew = School\models\DbInit::register($user);
           
    }
    
     public static function destroyUser() {
         
         if ( !self::is_Authorized() ) return;


     }
    
    public static function getUserInfo() {
        
        
    }
    

}

?>
