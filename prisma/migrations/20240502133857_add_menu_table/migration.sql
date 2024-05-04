-- CreateTable
CREATE TABLE "menu" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "price" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "mitra_id" INTEGER NOT NULL,

    CONSTRAINT "menu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "menu" ADD CONSTRAINT "menu_mitra_id_fkey" FOREIGN KEY ("mitra_id") REFERENCES "mitra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
