-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 27, 2013 at 08:59 AM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT=0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `druidinc_athena`
--

-- --------------------------------------------------------

--
-- Table structure for table `country`
--
-- Creation: Jun 14, 2013 at 05:29 AM
--

DROP TABLE IF EXISTS `country`;
CREATE TABLE IF NOT EXISTS `country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(3) NOT NULL,
  `value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `desktop_icon`
--
-- Creation: Jun 27, 2013 at 04:16 AM
--

DROP TABLE IF EXISTS `desktop_icon`;
CREATE TABLE IF NOT EXISTS `desktop_icon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `icon_label` text NOT NULL,
  `icon_image` text NOT NULL,
  `position` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `desktop_icon`
--

INSERT INTO `desktop_icon` (`id`, `icon_label`, `icon_image`, `position`) VALUES
(1, 'Chat', '/desktop-icons/chat-icon.png', '{"x":"318","y":"225"}'),
(2, 'Mail', '/desktop-icons/mail-icon.png', '{"x":"373","y":"344"}'),
(3, 'Tickets', '/desktop-icons/ticket-icon.png', '{"x":"597","y":"579"}');

-- --------------------------------------------------------

--
-- Table structure for table `system_login`
--
-- Creation: Jun 14, 2013 at 02:39 AM
--

DROP TABLE IF EXISTS `system_login`;
CREATE TABLE IF NOT EXISTS `system_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `system_login_status_id` int(11) NOT NULL,
  `lan_ip_address` text NOT NULL,
  `date_added` datetime NOT NULL,
  `date_removed` datetime DEFAULT NULL,
  `ancestor_id` int(11) DEFAULT NULL COMMENT 'id of the previous log',
  `active` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='store the date and time the user logged in and logged out of the system' AUTO_INCREMENT=24 ;

--
-- Dumping data for table `system_login`
--

INSERT INTO `system_login` (`id`, `user_id`, `system_login_status_id`, `lan_ip_address`, `date_added`, `date_removed`, `ancestor_id`, `active`) VALUES
(1, 1, 1, '::1', '2013-06-17 06:13:22', '2013-06-18 03:26:20', 1, 0),
(2, 1, 1, '::1', '2013-06-18 03:26:20', '2013-06-19 09:21:37', 2, 0),
(3, 1, 1, '::1', '2013-06-19 09:21:37', '2013-06-20 03:57:18', 3, 0),
(4, 1, 1, '::1', '2013-06-20 03:57:18', '2013-06-20 07:00:10', 4, 0),
(5, 1, 1, '10.100.2.54', '2013-06-20 07:00:10', '2013-06-21 08:14:58', 5, 0),
(6, 1, 1, '::1', '2013-06-21 08:14:58', '2013-06-27 06:01:47', 6, 0),
(7, 1, 1, '::1', '2013-06-27 06:01:47', '2013-06-27 07:57:51', 7, 0),
(8, 1, 2, '::1', '2013-06-27 07:57:51', '2013-06-27 08:17:26', 8, 0),
(9, 1, 1, '::1', '2013-06-27 08:17:26', '2013-06-27 08:19:13', 9, 0),
(10, 1, 1, '::1', '2013-06-27 08:19:13', '2013-06-27 08:20:07', 10, 0),
(11, 1, 2, '::1', '2013-06-27 08:19:16', NULL, NULL, 1),
(12, 1, 2, '::1', '2013-06-27 08:20:07', '2013-06-27 08:20:35', 12, 0),
(13, 1, 2, '::1', '2013-06-27 08:20:35', NULL, 12, 1),
(14, 1, 2, '::1', '2013-06-27 08:21:03', '2013-06-27 08:21:19', 14, 0),
(15, 1, 2, '::1', '2013-06-27 08:21:19', NULL, 14, 1),
(16, 1, 1, '::1', '2013-06-27 08:24:24', '2013-06-27 08:24:57', NULL, 0),
(17, 1, 2, '::1', '2013-06-27 08:24:57', NULL, 16, 1),
(18, 1, 1, '10.100.2.119', '2013-06-27 08:26:29', '2013-06-27 08:27:14', NULL, 0),
(19, 1, 2, '10.100.2.119', '2013-06-27 08:27:14', NULL, 18, 1),
(20, 1, 1, '::1', '2013-06-27 08:37:16', '2013-06-27 08:37:22', NULL, 0),
(21, 1, 1, '10.100.2.120', '2013-06-27 08:37:22', '2013-06-27 08:37:36', 20, 0),
(22, 1, 2, '10.100.2.120', '2013-06-27 08:37:36', NULL, 21, 1),
(23, 1, 1, '10.100.2.120', '2013-06-27 08:37:40', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `system_login_status`
--
-- Creation: Jun 14, 2013 at 02:41 AM
--

DROP TABLE IF EXISTS `system_login_status`;
CREATE TABLE IF NOT EXISTS `system_login_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Stores the status of each login or logout' AUTO_INCREMENT=3 ;

--
-- Dumping data for table `system_login_status`
--

INSERT INTO `system_login_status` (`id`, `name`) VALUES
(1, 'Logged In'),
(2, 'Logged Out');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--
-- Creation: Jun 14, 2013 at 02:25 AM
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `last_name` text NOT NULL,
  `first_name` text NOT NULL,
  `middle_name` text NOT NULL,
  `phone` text,
  `city` text NOT NULL,
  `state` text NOT NULL,
  `country` int(11) NOT NULL,
  `zip` text NOT NULL,
  `email` text NOT NULL,
  `gender` varchar(1) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime DEFAULT NULL,
  `date_removed` datetime DEFAULT NULL,
  `added_by` int(11) NOT NULL DEFAULT '0',
  `modified_by` int(11) DEFAULT NULL,
  `removed_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `last_name`, `first_name`, `middle_name`, `phone`, `city`, `state`, `country`, `zip`, `email`, `gender`, `date_added`, `date_modified`, `date_removed`, `added_by`, `modified_by`, `removed_by`) VALUES
(1, 'Gutierrez', 'Egee Boy', 'Colita', '09236405791', 'Cebu', 'Cebu', 1, '6000', 'egeeboygutierrez91@gmail.com', 'M', '2013-06-14 00:00:00', NULL, NULL, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_account`
--
-- Creation: Jun 14, 2013 at 02:26 AM
--

DROP TABLE IF EXISTS `user_account`;
CREATE TABLE IF NOT EXISTS `user_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='stores the login details of a user' AUTO_INCREMENT=2 ;

--
-- Dumping data for table `user_account`
--

INSERT INTO `user_account` (`id`, `user_id`, `username`, `password`) VALUES
(1, 1, 'e.gutierrez', 'athena');

-- --------------------------------------------------------

--
-- Table structure for table `user_desktop_icons`
--
-- Creation: Jun 27, 2013 at 04:18 AM
--

DROP TABLE IF EXISTS `user_desktop_icons`;
CREATE TABLE IF NOT EXISTS `user_desktop_icons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `desktop_icon_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `user_desktop_icons`
--

INSERT INTO `user_desktop_icons` (`id`, `user_id`, `desktop_icon_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `user_employment`
--
-- Creation: Jun 14, 2013 at 02:43 AM
--

DROP TABLE IF EXISTS `user_employment`;
CREATE TABLE IF NOT EXISTS `user_employment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_employment_status_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Employment status of user' AUTO_INCREMENT=2 ;

--
-- Dumping data for table `user_employment`
--

INSERT INTO `user_employment` (`id`, `user_id`, `user_employment_status_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_employment_status`
--
-- Creation: Jun 14, 2013 at 02:47 AM
--

DROP TABLE IF EXISTS `user_employment_status`;
CREATE TABLE IF NOT EXISTS `user_employment_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL COMMENT 'name of the employment status',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Shows the name of the employment status code' AUTO_INCREMENT=6 ;

--
-- Dumping data for table `user_employment_status`
--

INSERT INTO `user_employment_status` (`id`, `name`) VALUES
(1, 'Regular'),
(2, 'Contractual'),
(3, 'Probationary'),
(4, 'Resigned'),
(5, 'Terminated');

-- --------------------------------------------------------

--
-- Table structure for table `user_job`
--
-- Creation: Jun 14, 2013 at 02:51 AM
--

DROP TABLE IF EXISTS `user_job`;
CREATE TABLE IF NOT EXISTS `user_job` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_job_details_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Shows the job type of the user' AUTO_INCREMENT=2 ;

--
-- Dumping data for table `user_job`
--

INSERT INTO `user_job` (`id`, `user_id`, `user_job_details_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_job_details`
--
-- Creation: Jun 14, 2013 at 02:52 AM
--

DROP TABLE IF EXISTS `user_job_details`;
CREATE TABLE IF NOT EXISTS `user_job_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `descripton` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Shows the name and description of the job' AUTO_INCREMENT=2 ;

--
-- Dumping data for table `user_job_details`
--

INSERT INTO `user_job_details` (`id`, `name`, `descripton`) VALUES
(1, 'CEO', 'Company Owner');

-- --------------------------------------------------------

--
-- Table structure for table `user_job_promotion`
--
-- Creation: Jun 14, 2013 at 02:54 AM
--

DROP TABLE IF EXISTS `user_job_promotion`;
CREATE TABLE IF NOT EXISTS `user_job_promotion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_job_details_id` int(11) NOT NULL,
  `date_promoted` date NOT NULL,
  `ancestor_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `user_job_promotion`
--

INSERT INTO `user_job_promotion` (`id`, `user_id`, `user_job_details_id`, `date_promoted`, `ancestor_id`) VALUES
(1, 1, 1, '2013-06-14', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_type`
--
-- Creation: Jun 14, 2013 at 02:50 AM
--

DROP TABLE IF EXISTS `user_type`;
CREATE TABLE IF NOT EXISTS `user_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `user_type_status_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Shows what type the user is from the system' AUTO_INCREMENT=2 ;

--
-- Dumping data for table `user_type`
--

INSERT INTO `user_type` (`id`, `user_id`, `user_type_status_id`) VALUES
(1, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_type_status_id`
--
-- Creation: Jun 14, 2013 at 02:51 AM
--

DROP TABLE IF EXISTS `user_type_status_id`;
CREATE TABLE IF NOT EXISTS `user_type_status_id` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 COMMENT='Name of the system user type' AUTO_INCREMENT=4 ;

--
-- Dumping data for table `user_type_status_id`
--

INSERT INTO `user_type_status_id` (`id`, `name`) VALUES
(1, '0'),
(2, 'admin'),
(3, 'user');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
