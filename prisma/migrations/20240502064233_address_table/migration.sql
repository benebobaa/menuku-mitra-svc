/*
  Warnings:

  - You are about to alter the column `password` on the `mitra` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "mitra" ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "mitra_id" INTEGER NOT NULL,
    "outlet_name" VARCHAR(255) NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "city" VARCHAR(155) NOT NULL,
    "province" VARCHAR(100) NOT NULL,
    "postal_code" VARCHAR(10) NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_mitra_id_fkey" FOREIGN KEY ("mitra_id") REFERENCES "mitra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
