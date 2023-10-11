-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2023 at 03:19 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vitannguyen`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_orderdetail`
--

CREATE TABLE `db_orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `product_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `price` int(10) UNSIGNED NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `amount` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `discount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2023_10_04_120123_create_brand_table', 1),
(3, '2023_10_04_120133_create_category_table', 1),
(4, '2023_10_04_120144_create_contact_table', 1),
(5, '2023_10_04_120156_create_menu_table', 1),
(6, '2023_10_04_120206_create_order_table', 1),
(7, '2023_10_04_120216_create_orderdetail_table', 1),
(8, '2023_10_04_120228_create_product_table', 1),
(9, '2023_10_04_120241_create_post_table', 1),
(10, '2023_10_04_120251_create_slider_table', 1),
(11, '2023_10_04_120301_create_topic_table', 1),
(12, '2023_10_04_120311_create_user_table', 1),
(13, '2023_10_11_101755_create_banner_table', 2),
(14, '2023_10_11_104606_create_config_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `nvt_banner`
--

CREATE TABLE `nvt_banner` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `desciption` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nvt_brand`
--

CREATE TABLE `nvt_brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `desciption` varchar(1000) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nvt_brand`
--

INSERT INTO `nvt_brand` (`id`, `name`, `slug`, `image`, `sort_order`, `desciption`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Mèo Anh Lông Ngắn Tai Cụt', 'meo-anh-long-ngan-tai-cut', 'meo-anh-long-dai-mat-xanh.jpg', 0, '', '2023-10-04 09:08:58', '2023-10-05 05:08:03', 1, 1, 1),
(2, 'Mèo Anh Lông Dài Xám Xanh', 'meo-anh-long-dai-xám-xanh', 'meo-anh-long-dai-mat-do.jpg', 0, '', '2023-10-05 05:10:30', '2023-10-05 05:10:30', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nvt_category`
--

CREATE TABLE `nvt_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `desciption` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nvt_category`
--

INSERT INTO `nvt_category` (`id`, `name`, `slug`, `image`, `parent_id`, `sort_order`, `desciption`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(2, 'Mèo Anh Lông Ngắn', 'meo-anh-long-ngan', 'meo-anh-long-ngan.jpg', 0, 0, 'ff', '2023-10-05 00:41:09', '2023-10-05 03:45:35', 1, 1, 1),
(3, 'Mèo Anh Lông Dài', 'meo-anh-long-dai', 'meo-anh-long-dai.jpg', 0, 1, 'a', '2023-10-05 04:49:25', '2023-10-05 04:49:25', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nvt_config`
--

CREATE TABLE `nvt_config` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `author` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `zalo` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nvt_contact`
--

CREATE TABLE `nvt_contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `replay_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nvt_contact`
--

INSERT INTO `nvt_contact` (`id`, `user_id`, `name`, `email`, `phone`, `title`, `content`, `replay_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 0, 'Mèo Anh 2022fff', 'dfh', '09888', '0', '0', 0, '2023-10-04 09:09:13', '2023-10-04 21:56:30', 1, NULL, 1),
(2, 0, 'Mèo Anh 2022', 'd', '4', '0', '0', 0, '2023-10-11 05:32:18', '2023-10-11 05:32:18', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nvt_menu`
--

CREATE TABLE `nvt_menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `table_id` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nvt_menu`
--

INSERT INTO `nvt_menu` (`id`, `name`, `position`, `link`, `table_id`, `parent_id`, `sort_order`, `type`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(3, 'Trang chủ', 'mainmenu', '/', 0, 0, 1, '', NULL, NULL, 1, NULL, 1),
(7, 'Sản phẩm', 'mainmenu', '/san-pham', 0, 0, 1, '', NULL, NULL, 1, NULL, 1),
(20, 'Quản trị', 'mainmenu', '/admin', 0, 0, 1, '', NULL, NULL, 1, NULL, 1),
(21, 'Liên hệ', 'mainmenu', '/lien-he', 0, 0, 1, '', NULL, NULL, 1, NULL, 1),
(22, 'Danh mục\r\n', 'mainmenu', '', 0, 0, 1, '', NULL, NULL, 1, NULL, 1),
(23, 'Mèo Anh Lông Ngắn\r\n', 'mainmenu', '', 0, 22, 1, '', NULL, NULL, 1, NULL, 1),
(24, 'Mèo Anh Lông Dài\r\n', 'mainmenu', '', 0, 22, 1, '', NULL, NULL, 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nvt_order`
--

CREATE TABLE `nvt_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` mediumtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `delivery_gender` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nvt_order`
--

INSERT INTO `nvt_order` (`id`, `user_id`, `name`, `phone`, `email`, `address`, `note`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `delivery_gender`) VALUES
(1, 1, 'Mèo Anh 2022', '43', 'dd', 'dd', 'd', '2023-10-04 09:09:50', '2023-10-04 09:09:50', 0, NULL, 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nvt_post`
--

CREATE TABLE `nvt_post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `topic_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `detail` mediumtext NOT NULL,
  `image` varchar(1000) NOT NULL,
  `type` mediumtext NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `desciption` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nvt_post`
--

INSERT INTO `nvt_post` (`id`, `topic_id`, `title`, `slug`, `detail`, `image`, `type`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `desciption`) VALUES
(5, 0, 'Mèo hoangddddd', 'meo-hoangddddd', 'Giữa cuộc họp giao ca của bảo vệ khu phức hợp văn phòng ở Manila, một con mèo mặc đồng phục vàng đen lững thững bước qua các nhân viên đang xếp hàng.\r\n\r\n                      Conan, mèo hoang 6 tháng tuổi, là thành viên mới của đội bảo vệ tòa nhà Worldwide Corporate Center ở Manila, gia nhập vài tháng trước.\r\n                      Thủ đô Philippines có hàng nghìn mèo hoang sống trên đường phố. Conan là một trong những con mèo may mắn được nhiều đội bảo vệ trên toàn thành phố nhận nuôi không chính thức.', 'meo-hoang.jpg', '1', 'a', 'a', '2023-10-11 04:15:15', '2023-10-11 04:15:15', 1, NULL, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `nvt_product`
--

CREATE TABLE `nvt_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `price` double NOT NULL,
  `price_sale` double NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `detail` mediumtext NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2,
  `desciption` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nvt_product`
--

INSERT INTO `nvt_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `price`, `price_sale`, `image`, `qty`, `detail`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`, `desciption`) VALUES
(1, 2, 1, 'Anh Lông Ngắn Xanh Xám Đực M12539', 'anh-long-ngan-xanh-xam-duc-m12539', 2000000, 10000000, 'xxe.jpg', 2, 'Mèo Anh lông ngắn hiện đang là một giống mèo được rất nhiều người yêu động vật ưa thích, vậy chúng có điều gì đặc biệt mà có thể làm xiêu lòng biết bao người như vậy? Hãy cùng Bách hóa XANH tìm hiểu về giống mèo này và cách chăm sóc chúng nhé!', 'a', 'a', '2023-10-11 01:18:31', '2023-10-11 01:18:31', 1, NULL, 1, 0),
(2, 2, 1, 'Anh Lông Ngắn Silver Đực M12538', 'anh-long-ngan-silver-duc-m12538', 3300000, 1000000, 'a.jpg', 2, 'Ngoại hình: Có thân hình mập mạp nhưng chắc nịch. Loài mèo này phát triển rất tốt ở thời tiết lạnh. Đầu của mèo tròn, đôi tai ngắn cùng đôi mắt tinh anh. Bộ lông dài thướt tha như một chiếc áo ấm giúp giữ nhiệt cho mèo, màu sắc của chúng đa dạng và bắt mắt, điểm đặc biệt của mèo này là chúng khoác lên mình mỗi ngày một bộ lông khác nhau.', 'a', 'a', '2023-10-11 04:26:03', '2023-10-11 04:26:03', 1, NULL, 1, 0),
(3, 2, 1, 'Anh Lông Ngắn Bicolor Đực M12537', 'anh-long-ngan-bicolor-duc-m12537', 3000000, 2000000, 'anh-long-ngan-bicolor-duc-m12537.jpg', 2, 'e', 'e', 'e', '2023-10-11 04:26:15', '2023-10-11 04:26:15', 1, NULL, 1, 0),
(4, 2, 1, 'Anh Lông Ngắn Bicolor Đực M12536', 'anh-long-ngan-bicolor-duc-m12536', 2200000, 1100000, 'anh-long-ngan-bicolor-duc-m12536.jpg', 1, 's', 's', 's', '2023-10-11 04:26:31', '2023-10-11 04:26:31', 1, NULL, 1, 0),
(9, 2, 2, 'Anh Lông Ngắn Bicolor Đực M12536', 'anh-long-ngan-bicolor-duc-m12536', 600000, 500000, 'anh-long-ngan-bicolor-duc-m12536.jpg', 1, 's', 's', 's', '2023-10-11 04:27:48', '2023-10-11 04:27:48', 1, NULL, 1, 0),
(16, 3, 2, 'Anh Lông Ngắn Tabby Đực M12353', 'anh-long-ngan-tabby-duc-m12353', 2340000, 1200000, 'anh-long-ngan-tabby-duc-m12353.jpg', 1, 'c', 's', 's', '2023-10-11 04:28:15', '2023-10-11 04:28:15', 1, NULL, 1, 0),
(17, 2, 1, 'Anh Lông Ngắn Bicolor Đực M12537', 'anh-long-ngan-bicolor-duc-m12537', 3000000, 2000000, 'anh-long-ngan-bicolor-duc-m12537.jpg', 2, 'e', 'e', 'e', '2023-10-11 04:28:29', '2023-10-11 04:28:29', 1, NULL, 1, 0),
(19, 2, 1, 'Anh Lông Ngắn Xanh Xám Đực M12539', 'anh-long-ngan-xanh-xam-duc-m12539', 370000, 3000000, 'xxe.jpg', 2, '22', 'a', 'a', '2023-10-11 04:27:33', '2023-10-11 04:27:33', 1, NULL, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `nvt_slider`
--

CREATE TABLE `nvt_slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `image` varchar(255) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL,
  `position` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nvt_slider`
--

INSERT INTO `nvt_slider` (`id`, `name`, `image`, `link`, `sort_order`, `position`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(8, 'hinh1', 'hinh1.jpg', 'ggg', 0, 'slideshow', '2023-10-05 03:34:36', '2023-10-05 03:34:36', 1, NULL, 1),
(9, 'hinh2', 'hinh2.jpg', 'a', 1, 'slideshow', '2023-10-05 03:38:57', '2023-10-05 03:38:57', 1, NULL, 1),
(10, 'hinh3', 'hinh3.jpg', 'q', 2, 'slideshow', '2023-10-05 03:39:08', '2023-10-05 03:39:08', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nvt_topic`
--

CREATE TABLE `nvt_topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nvt_topic`
--

INSERT INTO `nvt_topic` (`id`, `name`, `slug`, `parent_id`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'd', 'd', 0, 'd', 'd', '2023-10-04 09:10:26', '2023-10-04 09:10:26', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nvt_user`
--

CREATE TABLE `nvt_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `nvt_user`
--

INSERT INTO `nvt_user` (`id`, `name`, `phone`, `email`, `username`, `password`, `address`, `image`, `roles`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'admin', '0987654', 'admin', 'd', '1237', 'dd', '', 'd', '2023-10-11 04:57:12', '2023-10-11 04:57:12', 0, NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nvt_banner`
--
ALTER TABLE `nvt_banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nvt_brand`
--
ALTER TABLE `nvt_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nvt_category`
--
ALTER TABLE `nvt_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nvt_config`
--
ALTER TABLE `nvt_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nvt_contact`
--
ALTER TABLE `nvt_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nvt_menu`
--
ALTER TABLE `nvt_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nvt_order`
--
ALTER TABLE `nvt_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nvt_post`
--
ALTER TABLE `nvt_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nvt_product`
--
ALTER TABLE `nvt_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nvt_slider`
--
ALTER TABLE `nvt_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nvt_topic`
--
ALTER TABLE `nvt_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nvt_user`
--
ALTER TABLE `nvt_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `nvt_banner`
--
ALTER TABLE `nvt_banner`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nvt_brand`
--
ALTER TABLE `nvt_brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `nvt_category`
--
ALTER TABLE `nvt_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `nvt_config`
--
ALTER TABLE `nvt_config`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nvt_contact`
--
ALTER TABLE `nvt_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `nvt_menu`
--
ALTER TABLE `nvt_menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `nvt_order`
--
ALTER TABLE `nvt_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `nvt_post`
--
ALTER TABLE `nvt_post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `nvt_product`
--
ALTER TABLE `nvt_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `nvt_slider`
--
ALTER TABLE `nvt_slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `nvt_topic`
--
ALTER TABLE `nvt_topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `nvt_user`
--
ALTER TABLE `nvt_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
