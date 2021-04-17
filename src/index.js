import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addCar = async () => {
  const newCar = await prisma.car.create({
    data: {
      title: "Yaris",
      brand: "Toyota",
      price: "49 000",
      age: 0,
      services: {
        connectOrCreate: {
          create: { name: "ASO" },
          where: { name: "ASO" },
        },
      },
    },
  });

  console.dir(newCar);
};

async function main() {
  // await addCar();
  const allCars = await prisma.car.findMany({
    include: {
      services: true,
    },
  });
  console.dir(allCars, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
