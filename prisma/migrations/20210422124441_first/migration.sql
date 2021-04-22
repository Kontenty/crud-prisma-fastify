/*
  Warnings:

  - You are about to drop the column `title` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `age` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the `_CarToService` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ownerId` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `model` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productionYear` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `price` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `carId` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CarToService" DROP CONSTRAINT "_CarToService_A_fkey";

-- DropForeignKey
ALTER TABLE "_CarToService" DROP CONSTRAINT "_CarToService_B_fkey";

-- DropIndex
DROP INDEX "Service.name_unique";

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "title",
DROP COLUMN "age",
ADD COLUMN     "ownerId" INTEGER NOT NULL,
ADD COLUMN     "model" VARCHAR(255) NOT NULL,
ADD COLUMN     "productionYear" VARCHAR(4) NOT NULL,
DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "carId" INTEGER NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "_CarToService";

-- CreateTable
CREATE TABLE "Owner" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Car" ADD FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;
