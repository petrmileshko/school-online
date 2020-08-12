<?php
/*

    Добавляем тут общие функции для всех моделей страниц 
    
*/


namespace School\models;

trait TraitPages {
    
     public function action_any() {

	}
	
    protected function render()
	{

$vars = ['title' => $this->title, 'siteName'=>$this->siteName, 'menu'=>$this->menu, 'content' => $this->content,'footer' => $this->footer];

        
		$page = $this->templater($this->view, $vars);				
		echo $page;
	}
    
    protected function before(){
		$this->footer= date('Y');
	}
    
}

?>