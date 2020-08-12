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
-- Структура таблицы `answers`
--

CREATE TABLE `answers` (
  `user_id` int(11) NOT NULL DEFAULT '0',
  `task_id` int(11) NOT NULL DEFAULT '0',
  `answerPath` varchar(250) DEFAULT NULL,
  `answer` text,
  `status` int(11) NOT NULL DEFAULT '0' COMMENT 'Принято -1 Не принято - 0',
  `id` int(11) NOT NULL COMMENT 'id ответа'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `answers`
--

INSERT INTO `answers` (`user_id`, `task_id`, `answerPath`, `answer`, `status`, `id`) VALUES
(4, 2, 'data/answers/ответназадание.txt', '\r\nОтвет на  заданиу 2', 0, 1),
(4, 1, 'data/answers/проверка.txt', '\r\nПроверка ответа', 0, 2),
(4, 3, 'data/answers/Новыйтекстовыйдокумент(2).txt', '\r\nЧек', 0, 3),
(4, 7, 'data/answers/Новыйтекстовыйдокумент(2).txt', '\r\nОтвет', 0, 4),
(4, 5, 'data/answers/ответМатематикаВасилий.txt', 'Мой Ответ на задание по математике\r\nВаслий', 0, 5);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `task_id` (`task_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id ответа', AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
