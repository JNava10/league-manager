-- AddForeignKey
ALTER TABLE `league` ADD CONSTRAINT `league_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
