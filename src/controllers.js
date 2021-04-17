const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getCars = async (req, reply) => {
  try {
    const cars = await prisma.car.findMany({
      include: {
        services: true,
      },
    });
    reply.send({ cars });
  } catch (err) {
    throw new Error(err.toString());
    // throw new Error(err);
  }
};

const findCar = async (req, reply) => {
  const id = Number(req.query.id);
  if (id) {
    try {
      const car = await prisma.car.findFirst({
        where: { id },
      });
      reply.send({ car });
    } catch (err) {
      throw new Error(err.toString());
    }
  }
};

const addCar = async () => {
  try {
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
    return newCar;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { getCars, findCar, addCar };
