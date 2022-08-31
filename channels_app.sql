-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 30 Sie 2022, 11:14
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `channels_app`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Chanels`
--

CREATE TABLE `Chanels` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) NOT NULL,
  `ilosc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `Chanels`
--

INSERT INTO `Chanels` (`id`, `nazwa`, `ilosc`) VALUES
(1, 'fb', 225),
(4, 'google', 725),
(5, 'Instagram', 15),
(6, 'Twitter', 30),
(7, 'LInkedin', 45);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `Chanels`
--
ALTER TABLE `Chanels`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `Chanels`
--
ALTER TABLE `Chanels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
