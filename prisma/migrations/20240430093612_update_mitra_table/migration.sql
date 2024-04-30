/*
  Warnings:

  - You are about to alter the column `username` on the `mitra` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `name` on the `mitra` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "mitra" ALTER COLUMN "username" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255);
