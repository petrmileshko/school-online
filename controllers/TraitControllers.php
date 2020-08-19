<?php

/*
	
    	 Если у контроллеров будут одинаковые методы пишем их тут
    
*/
namespace School\controllers;

trait TraitControllers {

    # Start...    тестовй код    удалить после отладки

    private $user = [

        [
         'id'=>1,
         'name' => 'Peter',
         'email' => 'peter@mail.ru',
         'fio' => 'Гавриков П.А.',
         'avatar' => 'img/users/peterGa.jpg',
         'password' => '1234',
         'access' => 'Учитель'
         'subject' => 'Математика' 
        ],
        [
         'id'=>2,
         'name' => 'Иван',
         'email' => 'ivan@mail.ru',
         'fio' => 'Гавриков П.А.',
         'avatar' => 'img/users/peterGa.jpg',
         'password' => '1234',
         'access' => 'Ученик',
         'class' => '10 А'
        ]
    ]; 

	# End  ...    тестовый код

        public function action_any() {
            
            return 'Any called';
        }
    
}

?>