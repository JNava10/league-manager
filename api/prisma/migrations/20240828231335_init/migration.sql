/*
  Warnings:

  - You are about to drop the column `trackId` on the `tracklayout` table. All the data in the column will be lost.
  - Added the required column `parentId` to the `trackLayout` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tracklayout` DROP FOREIGN KEY `trackLayout_trackId_fkey`;

-- AlterTable
ALTER TABLE `tracklayout` DROP COLUMN `trackId`,
    ADD COLUMN `parentId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `trackLayout` ADD CONSTRAINT `trackLayout_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `track`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
