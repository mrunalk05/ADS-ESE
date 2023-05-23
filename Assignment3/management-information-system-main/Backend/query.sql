-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.20 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table ads.advisor: ~0 rows (approximately)
/*!40000 ALTER TABLE `advisor` DISABLE KEYS */;
INSERT INTO `advisor` (`id`, `s_id`, `i_id`, `createdAt`, `updatedAt`) VALUES
	(1, 2, 3, '2022-02-15 13:53:35', '2022-02-15 13:53:35'),
	(2, 1, 3, '2022-02-15 13:53:43', '2022-02-15 13:53:43'),
	(3, 4, 1, '2022-02-15 13:53:48', '2022-02-15 13:53:48'),
	(4, 3, 2, '2022-02-15 13:53:58', '2022-02-15 13:53:58'),
	(5, 2, 1, '2022-02-15 13:55:43', '2022-02-15 13:55:43'),
	(6, 3, 1, '2022-02-15 13:58:22', '2022-02-15 13:58:22');
/*!40000 ALTER TABLE `advisor` ENABLE KEYS */;

-- Dumping data for table ads.classroom: ~0 rows (approximately)
/*!40000 ALTER TABLE `classroom` DISABLE KEYS */;
INSERT INTO `classroom` (`class_id`, `building`, `room_number`, `capacity`, `createdAt`, `updatedAt`) VALUES
	(1, 'quadrangle', 20, 100, '2022-02-15 15:02:42', '2022-02-15 15:02:42'),
	(3, 'quadrangle1', 19, 120, '2022-02-15 15:03:12', '2022-02-15 15:03:12');
/*!40000 ALTER TABLE `classroom` ENABLE KEYS */;

-- Dumping data for table ads.course: ~0 rows (approximately)
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` (`course_id`, `title`, `dept_name`, `credits`, `createdAt`, `updatedAt`) VALUES
	(1, 'ADS', 'CSE', 3, '2022-02-15 14:34:35', '2022-02-15 14:34:35'),
	(2, 'CC', 'CSE', 3, '2022-02-15 14:34:42', '2022-02-15 14:34:42'),
	(3, 'Remote Sen.', 'CSE', 2, '2022-02-15 14:37:55', '2022-02-15 14:37:55'),
	(4, 'SE', 'IT', 2, '2022-02-15 14:38:14', '2022-02-15 14:38:14'),
	(5, 'DBMS', 'CSE', 3, '2022-02-15 14:39:35', '2022-02-15 14:39:35');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;

-- Dumping data for table ads.department: ~0 rows (approximately)
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` (`dept_id`, `dept_name`, `building`, `budget`, `createdAt`, `updatedAt`) VALUES
	(1, 'CSE', '1', 1000, '2022-02-15 13:32:27', '2022-02-15 13:32:27'),
	(2, 'IT', '2', 900, '2022-02-15 13:33:03', '2022-02-15 13:33:03');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;

-- Dumping data for table ads.instructor: ~0 rows (approximately)
/*!40000 ALTER TABLE `instructor` DISABLE KEYS */;
INSERT INTO `instructor` (`id`, `inst_name`, `dept_name`, `salary`, `createdAt`, `updatedAt`) VALUES
	(1, 'prof. N. L. Gav', 'CSE', 100000, '2022-02-15 13:49:24', '2022-02-15 13:49:24'),
	(2, 'prof. T. Mulla', 'IT', 100000, '2022-02-15 13:50:17', '2022-02-15 13:50:17'),
	(3, 'prof. A. P. pat', 'CSE', 100000, '2022-02-15 13:50:50', '2022-02-15 13:50:50');
/*!40000 ALTER TABLE `instructor` ENABLE KEYS */;

-- Dumping data for table ads.prereq: ~0 rows (approximately)
/*!40000 ALTER TABLE `prereq` DISABLE KEYS */;
INSERT INTO `prereq` (`course_id`, `prereq_id`, `createdAt`, `updatedAt`) VALUES
	(1, 5, '2022-02-15 14:52:05', '2022-02-15 14:52:05');
/*!40000 ALTER TABLE `prereq` ENABLE KEYS */;

-- Dumping data for table ads.section: ~0 rows (approximately)
/*!40000 ALTER TABLE `section` DISABLE KEYS */;
INSERT INTO `section` (`course_id`, `sec_id`, `semester`, `year`, `building`, `room_number`, `time_slot_id`, `createdAt`, `updatedAt`) VALUES
	(1, 1, '6', 2022, 'quadrangle', 20, 1, '2022-02-15 15:56:32', '2022-02-15 15:56:32');
/*!40000 ALTER TABLE `section` ENABLE KEYS */;

-- Dumping data for table ads.students: ~0 rows (approximately)
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` (`id`, `name`, `dept_name`, `tot_cred`, `createdAt`, `updatedAt`) VALUES
	(1, 'Sanket Mote', 'CSE', 160, '2022-02-15 13:36:53', '2022-02-15 13:36:53'),
	(2, 'Abhishek Charpa', 'CSE', 170, '2022-02-15 13:37:39', '2022-02-15 13:37:39'),
	(3, 'Krushna Mali', 'CSE', 180, '2022-02-15 13:37:53', '2022-02-15 13:37:53'),
	(4, 'Mayuresh Patil', 'CSE', 180, '2022-02-15 13:39:37', '2022-02-15 13:39:37');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;

-- Dumping data for table ads.takes: ~0 rows (approximately)
/*!40000 ALTER TABLE `takes` DISABLE KEYS */;
/*!40000 ALTER TABLE `takes` ENABLE KEYS */;

-- Dumping data for table ads.teaches: ~0 rows (approximately)
/*!40000 ALTER TABLE `teaches` DISABLE KEYS */;
/*!40000 ALTER TABLE `teaches` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
