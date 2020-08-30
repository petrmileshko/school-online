-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Авг 29 2020 г., 19:51
-- Версия сервера: 5.7.30-33-log
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
-- Структура таблицы `Answer`
--

CREATE TABLE `Answers` (
  `id` int(11) NOT NULL,
  `answer_file` varchar(255) NOT NULL,
  `answer_body` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL,
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

-- --------------------------------------------------------

--
-- Структура таблицы `Classes_relation`
--

CREATE TABLE `Classes_relation` (
  `user_id` int(11) NOT NULL,
  `class_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `Subjects`
--

CREATE TABLE `Subjects` (
  `id` int(11) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `some_code` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `Subject_relation`
--

CREATE TABLE `Subject_relation` (
  `user_id` int(11) NOT NULL,
  `subject_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `Task`
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

-- --------------------------------------------------------

--
-- Структура таблицы `User`
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
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Answer`
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
-- Индексы таблицы `Task`
--
ALTER TABLE `Tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject_id` (`subject_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `User`
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
-- AUTO_INCREMENT для таблицы `Answer`
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
-- AUTO_INCREMENT для таблицы `Task`
--
ALTER TABLE `Tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `User`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT для таблицы `Сlasses`
--
ALTER TABLE `Сlasses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Answer`
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
-- Ограничения внешнего ключа таблицы `Task`
--
ALTER TABLE `Tasks`
  ADD CONSTRAINT `Tasks_ibfk_1` FOREIGN KEY (`subject_id`) REFERENCES `Subjects` (`id`),
  ADD CONSTRAINT `Tasks_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`);

--
-- Ограничения внешнего ключа таблицы `User`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_ibfk_1` FOREIGN KEY (`access_id`) REFERENCES `Auth` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
