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

const findCar = async (req) => {
  const id = parseInt(req.params?.id);
  if (id) {
    try {
      const car = await prisma.car.findFirst({
        where: { id },
      });
      return car ?? `No car found with id ${id}`;
    } catch (err) {
      return err;
    }
  } else {
    return "Id number has to be provided";
  }
};

const addCar = async (req, reply) => {
  const { body } = req;
  const { service } = body;
  const dbQuery = { ...body };
  if (service) {
    delete dbQuery.service;
    dbQuery.services = {
      connectOrCreate: {
        create: { name: service },
        where: { name: service },
      },
    };
  }
  try {
    const newCar = await prisma.car.create({
      data: dbQuery,
    });
    reply.send({ car: newCar });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { getCars, findCar, addCar };
