/*
  Warnings:

  - You are about to drop the `mitras` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "mitras";

-- CreateTable
CREATE TABLE "mitra" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "mitra_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mitra_username_key" ON "mitra"("username");

-- CreateIndex
CREATE UNIQUE INDEX "mitra_email_key" ON "mitra"("email");
