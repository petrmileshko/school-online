-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Сен 04 2020 г., 01:35
-- Версия сервера: 5.7.31-34-log
-- Версия PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `host1589827_school`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Answers`
--

CREATE TABLE `Answers` (
  `id` int(11) NOT NULL,
  `answer_file` varchar(255) NOT NULL,
  `answer_body` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `score` int(255) NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `Auth`
--

CREATE TABLE `Auth` (
  `id` int(11) NOT NULL,
  `access` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Auth`
--

INSERT INTO `Auth` (`id`, `access`) VALUES
(1, 'Ученик'),
(2, 'Учитель'),
(3, 'Директор'),
(4, 'Администратор');

-- --------------------------------------------------------

--
-- Структура таблицы `Classes_relation`
--

CREATE TABLE `Classes_relation` (
  `user_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Classes_relation`
--

INSERT INTO `Classes_relation` (`user_id`, `class_id`) VALUES
(2, 1),
(6, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `Subjects`
--

CREATE TABLE `Subjects` (
  `id` int(11) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `some_code` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Subjects`
--

INSERT INTO `Subjects` (`id`, `subject`, `some_code`) VALUES
(1, 'Математика', NULL),
(2, 'Физика', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `Subject_relation`
--

CREATE TABLE `Subject_relation` (
  `user_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Subject_relation`
--

INSERT INTO `Subject_relation` (`user_id`, `subject_id`) VALUES
(3, 1),
(4, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `Tasks`
--

CREATE TABLE `Tasks` (
  `id` int(11) NOT NULL,
  `task_name` varchar(50) NOT NULL,
  `task_description` varchar(255) NOT NULL,
  `task_file` varchar(255) NOT NULL,
  `task_body` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Tasks`
--

INSERT INTO `Tasks` (`id`, `task_name`, `task_description`, `task_file`, `task_body`, `user_id`, `subject_id`, `time_stamp`) VALUES
(1, 'Задание 1', 'Описание задания 1', '/data/tasks/task1.txt', 'Текст задания 1\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis voluptatibus minus, cum ut praesentium sunt inventore itaque dolorem rerum porro laboriosam alias natus molestiae adipisci aperiam facilis consequuntur perspiciatis ipsa vero magni est? Vitae ullam ut totam unde saepe error aliquam architecto asperiores, reiciendis, neque rerum porro ipsa sed!', 1, 1, '2020-08-28 14:32:07'),
(2, 'Задание 2', 'Описание задания 2', '/data/tasks/task2.txt', 'Текст задания 2\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis voluptatibus minus, cum ut praesentium sunt inventore itaque dolorem rerum porro laboriosam alias natus molestiae adipisci aperiam facilis consequuntur perspiciatis ipsa vero magni est? Vitae ullam ut totam unde saepe error aliquam architecto asperiores, reiciendis, neque rerum porro ipsa sed!', 3, 2, '2020-08-28 14:33:26'),
(3, 'Задание 3', 'Описание задания 3', '/data/tasks/task3.txt', 'Текст задания 3\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis voluptatibus minus, cum ut praesentium sunt inventore itaque dolorem rerum porro laboriosam alias natus molestiae adipisci aperiam facilis consequuntur perspiciatis ipsa vero magni est? Vitae ullam ut totam unde saepe error aliquam architecto asperiores, reiciendis, neque rerum porro ipsa sed!', 4, 2, '2020-08-28 14:40:01');

-- --------------------------------------------------------

--
-- Структура таблицы `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `login` varchar(30) NOT NULL,
  `fio` varchar(100) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `access_id` int(2) NOT NULL DEFAULT '1',
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Дамп данных таблицы `Users`
--

INSERT INTO `Users` (`id`, `login`, `fio`, `pass`, `email`, `access_id`, `time_stamp`) VALUES
(1, 'admin', 'Baukov Aleksandr', '12345', 'test@mail.ru', 4, '2020-08-19 13:51:36'),
(2, 'Ivan', 'vanov', '1234', 'ivan@gamle.ru', 1, '2020-08-28 14:35:15'),
(3, 'user1', 'test user', '12345', 'test@test.ru', 2, '2020-08-19 14:02:48'),
(4, 'teacher1', 'Гавриков Андрей Иванович', '1234', 'email@email.com', 2, '2020-08-28 14:36:29'),
(5, 'Director', 'Абросимов Валерий Олегович', '1234', 'abros@bros.bro', 3, '2020-08-29 15:55:45'),
(6, 'pavel', 'Росами Антон', '1234', 'rossam@ramd.ru', 1, '2020-09-01 07:37:30');

-- --------------------------------------------------------

--
-- Структура таблицы `Сlasses`
--

CREATE TABLE `Сlasses` (
  `id` int(11) NOT NULL,
  `class` varchar(50) NOT NULL,
  `some_code` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Сlasses`
--

INSERT INTO `Сlasses` (`id`, `class`, `some_code`) VALUES
(1, '1А', NULL),
(2, '2Б', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Answers`
--
ALTER TABLE `Answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `task_id` (`task_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `Auth`
--
ALTER TABLE `Auth`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Classes_relation`
--
ALTER TABLE `Classes_relation`
  ADD KEY `class_id` (`class_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `Subjects`
--
ALTER TABLE `Subjects`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Subject_relation`
--
ALTER TABLE `Subject_relation`
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `Tasks`
--
ALTER TABLE `Tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_ibfk_1` (`access_id`);

--
-- Индексы таблицы `Сlasses`
--
ALTER TABLE `Сlasses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Answers`
--
ALTER TABLE `Answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `Auth`
--
ALTER TABLE `Auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `Subjects`
--
ALTER TABLE `Subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `Tasks`
--
ALTER TABLE `Tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `Сlasses`
--
ALTER TABLE `Сlasses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Answers`
--
ALTER TABLE `Answers`
  ADD CONSTRAINT `Answers_ibfk_1` FOREIGN KEY (`task_id`) REFERENCES `Tasks` (`id`),
  ADD CONSTRAINT `Answers_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

--
-- Ограничения внешнего ключа таблицы `Classes_relation`
--
ALTER TABLE `Classes_relation`
  ADD CONSTRAINT `Classes_relation_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `Сlasses` (`id`),
  ADD CONSTRAINT `Classes_relation_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

--
-- Ограничения внешнего ключа таблицы `Subject_relation`
--
ALTER TABLE `Subject_relation`
  ADD CONSTRAINT `Subject_relation_ibfk_1` FOREIGN KEY (`subject_id`) REFERENCES `Subjects` (`id`),
  ADD CONSTRAINT `Subject_relation_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

--
-- Ограничения внешнего ключа таблицы `Tasks`
--
ALTER TABLE `Tasks`
  ADD CONSTRAINT `Tasks_ibfk_1` FOREIGN KEY (`subject_id`) REFERENCES `Subjects` (`id`),
  ADD CONSTRAINT `Tasks_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

--
-- Ограничения внешнего ключа таблицы `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_ibfk_1` FOREIGN KEY (`access_id`) REFERENCES `Auth` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
