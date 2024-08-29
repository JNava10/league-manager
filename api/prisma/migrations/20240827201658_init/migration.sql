/*
  Warnings:

  - Added the required column `authorId` to the `leagueChampionship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `leagueChampionship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `leaguechampionship` ADD COLUMN `authorId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `leagueChampionship` ADD CONSTRAINT `leagueChampionship_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
