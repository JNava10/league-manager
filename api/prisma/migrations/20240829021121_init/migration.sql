/*
  Warnings:

  - You are about to drop the column `key` on the `scoresystemextra` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `scoresystemextra` table. All the data in the column will be lost.
  - Added the required column `extraId` to the `scoreSystemExtra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `score` to the `scoreSystemExtra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `scoresystemextra` DROP COLUMN `key`,
    DROP COLUMN `value`,
    ADD COLUMN `extraId` VARCHAR(255) NOT NULL,
    ADD COLUMN `score` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `extraScore` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
