/*
  Warnings:

  - You are about to drop the column `category` on the `league` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `league` table. All the data in the column will be lost.
  - Made the column `authorId` on table `league` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `league` DROP COLUMN `category`,
    DROP COLUMN `userId`,
    MODIFY `authorId` INTEGER NOT NULL;
