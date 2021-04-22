/*
  Warnings:

  - Changed the type of `productionYear` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "productionYear",
ADD COLUMN     "productionYear" INTEGER NOT NULL;
