/*
  Warnings:

  - You are about to drop the column `euname` on the `movie` table. All the data in the column will be lost.
  - Added the required column `euName` to the `movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `movie` DROP COLUMN `euname`,
    ADD COLUMN `euName` VARCHAR(191) NOT NULL;
