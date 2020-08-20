<?php

/*
	
    	 Если у контроллеров будут одинаковые методы пишем их тут
    
*/
namespace School\controllers;

trait TraitControllers {

    # Start...    тестовй код    удалить после отладки

    private $user = [

        [
         'result'=>'positive',
         'id'=>1,
         'name' => 'Петр',
         'email' => 'peter@mail.ru',
         'fio' => 'Гавриков П.А.',
         'avatar' => 'img/users/peterGa.jpg',
         'password' => '1234',
         'access' => ['access_id'=>'2', 'name'=>'Учитель'],
         'subject' => 'Математика' 
        ],
        [
         'result'=>'positive',
         'id'=>2,
         'name' => 'Иван',
         'email' => 'ivan@mail.ru',
         'fio' => 'Иванов И.А.',
         'avatar' => 'img/users/ivanGa.jpg',
         'password' => '1234',
         'access' => ['access_id'=>'1', 'name'=>'Ученик'],
         'class' => '10 А'
        ]
    ]; 

    private $answers = [

        [
         'result'=>'positive',
         'fio' => 'Гавриков П.А.',
         'subject' => 'Математика',
         'score' => 4
        ],
                [
         'result'=>'positive',
         'fio' => 'Гавриков П.А.',
         'subject' => 'Математика',
         'score' => 3
        ],
                [
         'result'=>'positive',
         'fio' => 'Гавриков П.А.',
         'subject' => 'Иностранный язык',
         'score' => 5
        ],
                [
         'result'=>'positive',
         'fio' => 'Гавриков П.А.',
         'subject' => 'Физика',
         'score' => 4
        ],
                        [
         'result'=>'positive',
         'fio' => 'Гавриков П.А.',
         'subject' => 'Физика',
         'score' => 5
        ],
                [
         'result'=>'positive',
         'fio' => 'Иванов И.А.',
         'subject' => 'Физика',
         'score' => 4
        ],
                        [
         'result'=>'positive',
         'fio' => 'Иванов И.А.',
         'subject' => 'Иностранный язык',
         'score' => 3
        ],
                                [
         'result'=>'positive',
         'fio' => 'Иванов И.А.',
         'subject' => 'Иностранный язык',
         'score' => 4
        ],
        [
         'result'=>'positive',
         'fio' => 'Иванов И.А.',
         'subject' => 'Математика',
         'score' => 5
        ],
        [
         'result'=>'positive',
         'fio' => 'Иванов И.А.',
         'subject' => 'Иностранный язык',
         'score' => null
        ],
        [
         'result'=>'positive',
         'fio' => 'Иванов И.А.',
         'subject' => 'Математика',
         'score' => null
        ]
    ]; 

    private $tasks = [

        [
         'result'=>'positive',
         'fio' => 'Гавриков П.А.',
         'subject' => 'Математика',
         'task_name' => 'Дробные числа. Решить примеры',
         'id' => 1
        ],
                [
         'result'=>'positive',
         'fio' => 'Гавриков П.А.',
         'subject' => 'Математика',
         'task_name' => 'Решить примеры и выучить теорию',
         'id' => 2
        ],
                [
         'result'=>'positive',
         'fio' => 'Гавриков П.А.',
         'subject' => 'Иностранный язык',
         'task_name' => 'Прочесть и перевести текст',
         'id' => 3
        ],
        [
         'result'=>'positive',
         'fio' => 'Иванов И.А.',
         'subject' => 'Физика',
         'task_name' => 'Прочесть и выучить закон механики.',
         'id' => 4
        ]
    ]; 
	# End  ...    тестовый код

    /*
     *          Если передано ошибочное дейтсвие в запросе поле { action : string }
     */
    public function action_any() {

           $message = 'action : '.$this->query['action'];

            throw new Exception('Ошибка в запросе  - '.$message);
        }
    
}

?>

