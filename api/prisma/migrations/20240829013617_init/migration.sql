/*
  Warnings:

  - You are about to drop the `pointsystem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pointsystempositions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `pointsystem`;

-- DropTable
DROP TABLE `pointsystempositions`;

-- CreateTable
CREATE TABLE `scoreSystem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scorePositionValue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `position` VARCHAR(255) NOT NULL,
    `score` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scoreExtra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(255) NOT NULL,
    `value` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
