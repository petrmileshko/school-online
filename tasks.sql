-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Авг 12 2020 г., 20:33
-- Версия сервера: 5.7.30-33-log
-- Версия PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `host1589827_diaryonline`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL COMMENT 'номер задания',
  `taskName` varchar(200) DEFAULT 'Название задания' COMMENT 'название задания',
  `task` text COMMENT 'текст задания',
  `taskPath` varchar(200) DEFAULT 'data/tasks/' COMMENT 'путь к файлу с заданием',
  `taskDescription` text NOT NULL COMMENT ' краткое описание задания',
  `user_id` int(11) NOT NULL COMMENT 'id преподавателя',
  `subject_id` int(11) NOT NULL COMMENT 'название предмета'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `taskName`, `task`, `taskPath`, `taskDescription`, `user_id`, `subject_id`) VALUES
(1, 'Название задания 1', 'Текст задания 1', 'data/tasks/1.txt', 'Краткое описание задания 1', 2, 1),
(2, 'Название задания 2', 'Текст задания 2', 'data/tasks/2.txt', ' Краткое описание задания 2', 5, 3),
(3, 'Название задания 3', 'Текст задания 3', 'data/tasks/2.txt', ' Краткое описание задания 3', 6, 2),
(4, 'sadASD', 'aDad', 'data/tasks/заданиеномер4.txt', 'ASDads', 2, 3),
(5, 'Решение примеро', 'Теория написан тут', 'data/tasks/заданиеномер4.txt', 'Прочесть теории и решить примеры в файле', 2, 1),
(6, 'Past present', 'Here text of task', 'data/tasks/заданиеномер4.txt', 'Read and translate', 8, 2),
(7, 'Проверка', 'Текст', 'data/tasks/Новыйтекстовыйдокумент(2).txt', 'Краткое описание', 2, 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'номер задания', AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
