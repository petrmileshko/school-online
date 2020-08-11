<?php
/*

    Базовая модель страницы абстрактный класс и методы
    
*/

namespace School\models;

abstract class Page 
{
    
    protected $menu;
    protected $siteName;
    
    protected abstract function render();
    protected abstract function before();
    public abstract function action_any();
    public abstract function action_fail();
    public abstract function action_index();
    
    public function __construct() {
        
    }
    
    public function request($action) {
        $this->before();
        $this->$action();
        $this->render();
    }
            
    // Шаблонизатор 
    final protected function templater($fileName, $variables = []) {
        
            foreach ($variables as $key => $value)
            {
                $$key = $value;
            }
            ob_start();
            include $fileName;
            return ob_get_clean();	
    }
    
    public function __call($name, $params){
        $this->action_any();
	}
    
}

?>