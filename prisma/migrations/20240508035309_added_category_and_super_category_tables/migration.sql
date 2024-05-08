/*
  Warnings:

  - Added the required column `category_id` to the `menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menu" ADD COLUMN     "category_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(155) NOT NULL,
    "spcategory_id" INTEGER NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuperCategory" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(155) NOT NULL,

    CONSTRAINT "SuperCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category" ADD CONSTRAINT "category_spcategory_id_fkey" FOREIGN KEY ("spcategory_id") REFERENCES "SuperCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
