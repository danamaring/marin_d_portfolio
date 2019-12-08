-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 08, 2019 at 06:45 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `ID` int(11) NOT NULL,
  `Type` varchar(20) NOT NULL,
  `Mockup` varchar(50) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `Roll` text NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`ID`, `Type`, `Mockup`, `Title`, `Roll`, `Description`) VALUES
(1, 'traa', 'mockup-traa.png', 'Thames River Anglers Association', 'Roll: web designer and front-end developer.', 'The task was to create a website that would renew the image of the association, who already had an institutional logo and colours.\r\n\r\nThe challenge was to design a website that was user-friendly and easy to follow since it is estimated that the average number of users are middle-aged adults. \r\n\r\nAnother task was to find the way to display the large amount of information contained in the website without overwhelming the user and to make it responsive.\r\n\r\nThe result was a much cleaner, attractive and modern website. Collapsibles and carousels were used to create a more interactive and custom experience.\r\n\r\nThe languages used were HTML5, CSS3 and JS.'),
(2, 'resort', 'mockup-resort.png', 'Couples Resort', 'Roll: web designer.', 'Couples Resort is a romantic hotel located in Muskoka. It has several activities and large facilities that are currently exhibited on their website.\r\n\r\nThe challenge was to renew the existing website to create a more engaging and user-friendly environment.\r\n\r\nAs a web designer, I chose warm colours and attractive images that highlight the experience that Couples Resort offers to their guests.\r\n\r\nOne of the new additions to the website is a carousel that contains testimonials from real clients where they share their great experiences.'),
(3, 'favourite', 'mockup-favourite.png', 'My Favourite Places', 'Roll: web designer and front-end developer.', 'The task was to create a website where my three favourite things were displayed, so I decided to present my three favourite places in Mexico.\r\n\r\nAs a web designer I decided to use full-width images that represent the biodiversity of the place in the best way. I also added facts about the flora and fauna of the ecosystem.\r\n\r\nAs a web developer I created a database in MySql that dynamically displayed all the information on each page. The languages used were HTML5, CSS3, JS, node.js, JSON, SASS, among others.'),
(4, 'mixtape', 'mockup-mixtape.png', 'Specialized Mixtape', 'Roll: web designer and front-end developer.', 'The task was to create a splash page to promote any product. The challenge was to host the site with Heroku App.\r\n\r\nI chose a high-end bike from my favourite brand: Specialized. I redesigned the colours and added some details with Photoshop creating a \"special edition\" of the model I chose. Finally I designed a modern, clean and attractive website.'),
(5, 'thermosecurity', 'mockup-thermosecurity.png', 'Thermosecurity', 'Roll: web designer and front-end developer.', 'The challenge was to create a website in 24 hours that was fully functional and that presented the products of \"Thermosecurity\" a fictitious company that sells devices to control different features of a house (temperature, alarm, security cameras).\r\n\r\nAs a web designer, I chose a colour palette that inspired safety, trust and protection. I created a website that included the main features of the product in an attractive and user-friendly way.\r\n\r\nAs a front-end developer I created the responsive website for all devices. I used different languages like HTML5, CSS3, JS, SASS, node.js, among others.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
