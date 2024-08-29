/*
  Warnings:

  - You are about to drop the column `leagueId` on the `subcategory` table. All the data in the column will be lost.
  - Added the required column `parentId` to the `subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `subcategory` DROP FOREIGN KEY `subcategory_leagueId_fkey`;

-- AlterTable
ALTER TABLE `subcategory` DROP COLUMN `leagueId`,
    ADD COLUMN `parentId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `subcategory` ADD CONSTRAINT `subcategory_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
