/*
  Warnings:

  - You are about to drop the `extrascore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `positionscore` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `extrascore` DROP FOREIGN KEY `extraScore_parentId_fkey`;

-- DropForeignKey
ALTER TABLE `positionscore` DROP FOREIGN KEY `positionScore_parentId_fkey`;

-- DropTable
DROP TABLE `extrascore`;

-- DropTable
DROP TABLE `positionscore`;

-- CreateTable
CREATE TABLE `scoreSystemPosition` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `position` VARCHAR(255) NOT NULL,
    `score` VARCHAR(255) NOT NULL,
    `parentId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `scoreSystemExtra` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `key` VARCHAR(255) NOT NULL,
    `value` VARCHAR(255) NOT NULL,
    `parentId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `scoreSystemPosition` ADD CONSTRAINT `scoreSystemPosition_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `scoreSystem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `scoreSystemExtra` ADD CONSTRAINT `scoreSystemExtra_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `scoreSystem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
