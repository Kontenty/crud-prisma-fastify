const prisma = require("./prisma")

const addService = async (req) => {
  const { body } = req;
  const { name, date } = body
  const dbQuery = {
    name,
    date: date ? new Date(date) ?? undefined : undefined,
    car: {connect: {id: body.carId}}
  }
  try {
    const service = await prisma.service.create({
      data: dbQuery,
    });
    return service;
  } catch (err) {
    return err;
  }
};

module.exports = { addService };
