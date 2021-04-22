const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getCars = async () => {
  try {
    const cars = await prisma.car.findMany({
      include: {
        services: true,
      },
    });
    return { cars };
  } catch (err) {
    return err
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

const addCar = async (req) => {
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
    return newCar;
  } catch (err) {
    return err;
  }
};

const addOwner = async (req) => {
  const { body } = req;
  try {
    const owner = await prisma.owner.create({
      data: body,
    });
    return owner;
  } catch (err) {
    return err;
  }
};
const getOwners = async () => {
  try {
    const owners = await prisma.owner.findMany();
    return owners;
  } catch (err) {
    return err;
  }
};

module.exports = { getCars, findCar, addCar, addOwner, getOwners };
