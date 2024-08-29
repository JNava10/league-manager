/*
  Warnings:

  - You are about to drop the `tracklayouts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tracklayouts` DROP FOREIGN KEY `trackLayouts_trackId_fkey`;

-- DropTable
DROP TABLE `tracklayouts`;

-- CreateTable
CREATE TABLE `trackLayout` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `trackId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `trackLayout` ADD CONSTRAINT `trackLayout_trackId_fkey` FOREIGN KEY (`trackId`) REFERENCES `track`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
