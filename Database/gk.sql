-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 03, 2020 at 02:12 PM
-- Server version: 8.0.22-0ubuntu0.20.04.3
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gk`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int NOT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `header` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `description`, `header`) VALUES
(1, 'Gaby is a highly experienced and creative coder. He is spontaneous in his decisions and believes in body asleep mind awake. He would offer his help to any developer who in need for this help. If you give him a pc and put Pink Floyd music, he will write the best code.\r\n\r\nAs a bug fixer and a mentor, He intend to use his obsessive attention to detail, his unequivocal love for making things, and his mission-driven work ethic to literally change the world.\r\n\r\nI want to do things that make a difference.', 'Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, and teaching.');

-- --------------------------------------------------------

--
-- Table structure for table `achievements`
--

CREATE TABLE `achievements` (
  `id` int NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `logo` varchar(255) NOT NULL,
  `date` text NOT NULL,
  `credential` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `achievements`
--

INSERT INTO `achievements` (`id`, `name`, `description`, `logo`, `date`, `credential`) VALUES
(10, 'GOLDEN AWARD SILVER 2020', 'Codility', 'ga.png', 'Sep 2020 - No Expiration Date', 'ID certGN72XQ-YYQG5U6XUHVPWAWR');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int NOT NULL,
  `email` varchar(1000) NOT NULL,
  `password` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'info@gabykaram.com', 'gabykaram');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `name`, `description`, `image`) VALUES
(0, 'my journey', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.', 'image.png'),
(1, 'My Success', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.', 'image.png'),
(2, 'My Success', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.', 'image.png'),
(3, 'My Success', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.', 'image.png');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `logo` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `logo`, `img`) VALUES
(1, 'linkedin.com/in/gabykaram/', 'linkedin.png', ''),
(4, 'github.com/gk-git', 'github1.png', ''),
(6, 'gitlab.com/gk-git', 'gitlab.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `education`
--

CREATE TABLE `education` (
  `id` int NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `place` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `link` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `education`
--

INSERT INTO `education` (`id`, `name`, `date`, `place`, `description`, `link`) VALUES
(1, 'CODI TECH', 'April 2017 - Nov 2017', 'Beirut, LB', 'Full Stack Development Program - Certified by Simplon', 'https://codi.tech/'),
(4, 'ARTS, SCIENCES AND TECHNOLOGY UNIVERSITY', '2013 - 2017', 'Kaslik, LB', 'B.S. in Computer Science', 'https://www.gwu.edu/');

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `id` int NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `position` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `date` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `place` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `list` varchar(1000) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id`, `name`, `position`, `description`, `date`, `place`, `list`, `link`, `img`) VALUES
(1, 'CODI TECH', 'Trainer & Project manager', 'Free school of programming for people who have a passion for digital and want to build a career in technology but cannot pursue a traditional university education.', 'Jun 2019 - Sep 2020', 'Gemmayze, LB', 'Mentored 2 classes of total of 45 students to become full stack developers,Created exercises for teaching Laravel and Front-end API integration,Mentored and helped students on how to think about the problem and how to learn,Planned and managed multiple internal web application,', 'https://codi.tech/', 'codi.svg'),
(2, 'CODI STUDIO', 'Full-Stack Developer & Digital Producer', 'Digital / Tech studio which focuses on designing and delivering digital products for clients across Europe and MENA region.', 'Dec 2017 - Jun 2019', 'Gemmayze, LB', 'Take briefs from clients,Plan project schedules,Secure linux servers and deploy projects,Highlight any issues and strive to resolve them,Verify& prioritize & fix software bugs,Build new features,Deployed Redmine on private server,Stack: PHP / WordPress / React / SQL / Javascript / Sass', 'https://codi.tech/', 'codi.svg'),
(3, 'INBOUND HORIZON', 'Full-Stack Web & Mobile Developer', 'American Digital/Online Marketing Agency Inbound Horizon', 'Jan 2016 - Aug 2016', 'Hazmieh, LB', 'Verify / prioritize / and fix software bugs,Build new features,Stack: PHP / WordPress / SQL / Coffeescript / jQuery / Sass / Hybrid App,Developed a mobile app using Onsen UI and Monaca,Built a quiz game for a church with admin panel using vanilla PHP,Introduced to JIRA software and Agile methodology,', 'https://inboundhorizons.com/', 'ih.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `accomplishments` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `link` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `accomplishments`, `link`, `img`) VALUES
(1, 'Garder Le Cap', 'Garder Le Cap is a new challenge for Gwenael.\r\n\r\nThis time, he not only wants to dedicate his effort to the war wounded, but goes', 'Developed using React / Typescript / NodeJs for the backend,Integrating translation & smooth design,Integrating API for Youtube / PayPal / Stripe and Instagram,Adding an animation for the logo on the boot of the website,\r\n', 'https://garderlecap.global/', 'garderlecap.png\r\n'),
(2, 'B.O.T', 'BOT (Building Opportunities Today) is a socially responsible outsourcing platform.\r\n\r\nBOT offers digital opportunities to', 'Developed using WordPress PHP framework,Theme edit under child theme,Adding special icons as css icon not image,After 1st release the website had changed by other developers,', 'https://letsbot.io/', 'bot.png'),
(3, 'Codi Tech', 'Codi Tech is a free school of programming for people who have a passion for digital\r\n\r\nand want to build a career in technology', 'Website Maintenance from 2018 till Sep 2020,Creating a custom donation page with using NetCommerce as payment gateway,Adding different sections into the website while maintaining the custom theme structure supporting the new developer to continue on the right structure,\r\n', 'https://codi.tech/', 'codi.svg'),
(4, 'Cook For Syria', 'A celebration of Syrian cuisine in aid of the largest humanitarian crisis of our time.', 'Managed Website Localisation,Integrated a detection system for user\'s Countries,Designed in CSS Grid without Bootstrap,Handled Server transfer without loosing emails,\r\n', 'https://cookforsyria.com/', 'cookforsyria.jpg'),
(5, 'Imported Brands International', 'A 35 year old company involved in the importation and distribution of spirits', 'Developed the website based on UI design,Selected a theme that has a similar design and build on it,Developed a visual images system,Employed at CODI.TECH,', 'https://importedbrands.co.uk/', 'ibi.png'),
(6, 'Limonada Mathe', 'A unique blend of Yerba Mate and Sicilian Lemons.', 'Maintained the website and server plus adding new features,Continued using Sage theme and Bedrock boilerplate,Employed at CODI.TECH,', 'https://matheorganics.com/', 'limonade.png'),
(7, 'NextGen Europe', 'A global UNICEF initiative bringing together diverse groups of young professionals.', 'Maintained two website and server plus adding new features,Made the website Adapt the GDPR rules,Maintained a WordPress multi-site,Employed at CODI.TECH,', 'https://nextgeneurope.org/,\r\nhttps://nextgenlondon.com/', 'unicef.png'),
(8, 'Razor Capital', 'A venture capital and investment management firm with a focus on frontier markets.', 'Transferred the website from,Made the website Adapt the GDPR rules,Maintained a WordPress multi-site,Employed at CODI.TECH,', 'https://razorcap.co/', 'razor.png'),
(9, 'Acmaved Lebanon', 'commercial company specializing primarily in marketing veterinary drugs. vaccines and poultry equipment.', 'Front-end development in Bootstrap,Contributed creative strategy and UX,Worked with MVC framework / Laravel server,Freelance at JKBEIRUT.COM,', 'http://acmavedlebanon.com/', 'acmaved.png'),
(10, 'Security Door with Facial Recognition', 'Open door depending on user picture. Automate and control who can enter your', 'Added Mobile app developed using Ionic 3,Image upload to Microsoft API AZURE,IoT Communication betwen mobile app and raspberry pi,Mobile App User Authentication with Laravel API,Used Microsoft starter facial recognition desktop app,\r\n', 'https://github.com/gk-git/face-recognition-mobile-app', 'facialrecog.jpg'),
(11, 'AUL-Kaslik | Mobile App', '(Version 1)\r\nMobile app that helps Students to checks exams schedule, events and much more.', 'Developed the app using Ionic 1,API using vanilla PHP,Google Maps API integration,', 'https://play.google.com/store/apps/details?id=com.ionicframework.aullkaslik480745,https://apps.apple.com/lb/app/aul-kaslik/id1167612531', 'aul.jpg'),
(12, 'Beity Lebanese Restaurant | France', 'Restaurant website to show of menu item and facilitate the customers experience.', 'Front-end development in Bootstrap,Designed and developed the look and feel of the website,Worked with MVC framework / Laravel server,Freelance at JKBEIRUT.COM,', 'http://beity.fr/', 'beity.png'),
(13, 'Dribbling LB', 'Lebanese Basketball News Online BMobile-focused web app where users can explore, collect, and share skate spots.log', 'Transformed The website from vanilla PHP to Laravel in 24 hour,Developed the Back-end,\r\nCreated Back-end,Refactored all existing code (Laravel),', 'https://web.archive.org/web/20180823192102/http://dribbling-lb.com/', 'dribb.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int NOT NULL,
  `name` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `logo` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `name`, `logo`) VALUES
(1, 'HTML5', 'html5.png'),
(4, 'Jade', 'jade.png'),
(5, 'CSS3', 'css3.png'),
(6, 'SASS', 'sass.png'),
(7, 'Bootstrap', 'bootstrap.png'),
(8, 'STYLUS', 'stylus.png'),
(9, 'React', 'react.png'),
(10, 'Javascript', 'javascript.png'),
(11, 'jQuery', 'jquery.png'),
(12, 'Angular', 'angular.png'),
(13, 'Node', 'nodejs.png'),
(14, 'Ionic', 'ionic.png'),
(15, 'Laravel', 'laravel.png'),
(17, 'MySQL', 'mysql.png'),
(18, 'Java', 'java.png'),
(19, 'Webpack', 'webpack.png'),
(20, 'Gulp', 'gulp.png'),
(21, 'Grunt', 'grunt.png'),
(22, 'Bower', 'bower.png'),
(23, 'Wordpress', 'wordpress.png'),
(24, 'Keystone Js', 'keystonejs.jpg'),
(25, 'Firebase', 'firebase.png'),
(26, 'Google API\'s', 'google.jpeg'),
(27, 'Adobe XD', 'adobe-xd.png'),
(28, 'Adobe Photoshop', 'photoshop.png'),
(29, 'Adobe Illustrator', 'illustrator.png'),
(30, 'Github', 'github.png'),
(31, 'Heroku', 'heroku.png');

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` int NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`id`, `email`) VALUES
(30, 'hussein@gmail.com'),
(34, 'Hasanawad@gmail.com'),
(35, 'khaldoun@gmail.com'),
(36, 'info@gabykaram.com'),
(37, 'samar@gmail.com'),
(38, 'saeed@gmail.com'),
(39, 'farah@gmail.com'),
(40, 'khaldounnn@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `achievements`
--
ALTER TABLE `achievements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `education`
--
ALTER TABLE `education`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `achievements`
--
ALTER TABLE `achievements`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `education`
--
ALTER TABLE `education`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
