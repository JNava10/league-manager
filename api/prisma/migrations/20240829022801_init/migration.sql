/*
  Warnings:

  - You are about to alter the column `extraId` on the `scoresystemextra` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Int`.

*/
-- AlterTable
ALTER TABLE `scoresystemextra` MODIFY `extraId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `scoreSystemExtra` ADD CONSTRAINT `scoreSystemExtra_extraId_fkey` FOREIGN KEY (`extraId`) REFERENCES `extraScore`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
