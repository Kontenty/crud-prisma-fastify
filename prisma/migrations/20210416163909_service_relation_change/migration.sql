/*
  Warnings:

  - You are about to drop the column `carId` on the `Service` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Service` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_carId_fkey";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "carId";

-- CreateTable
CREATE TABLE "_CarToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CarToService_AB_unique" ON "_CarToService"("A", "B");

-- CreateIndex
CREATE INDEX "_CarToService_B_index" ON "_CarToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Service.name_unique" ON "Service"("name");

-- AddForeignKey
ALTER TABLE "_CarToService" ADD FOREIGN KEY ("A") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarToService" ADD FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
