-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `score` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `euname` VARCHAR(191) NOT NULL,
    `age` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `release` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `trailer` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
