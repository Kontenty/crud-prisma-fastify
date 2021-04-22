const prisma = require("./prisma")

const getCars = async () => {
  try {
    const cars = await prisma.car.findMany({
      include: {
        services: true,
        owner: true
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
  const dbQuery = { ...body };
  const { model, brand, price, productionYear, service } = body

  if (service) {
    dbQuery.services = {
      connectOrCreate: {
        create: { name: service },
        where: { name: service },
      },
    };
  }
  try {
    const newCar = await prisma.car.create({
      data: {model, brand, price, productionYear,
        owner: {connect: {id: body.ownerId}}
      },
    });
    return newCar;
  } catch (err) {
    return err;
  }
};

module.exports = { getCars, findCar, addCar };
