/*
  Warnings:

  - You are about to drop the column `userId` on the `leaguechampionship` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `leaguechampionship` DROP FOREIGN KEY `leagueChampionship_userId_fkey`;

-- AlterTable
ALTER TABLE `leaguechampionship` DROP COLUMN `userId`;

-- AddForeignKey
ALTER TABLE `leagueChampionship` ADD CONSTRAINT `leagueChampionship_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
