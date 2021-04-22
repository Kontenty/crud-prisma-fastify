const prisma = require("./prisma")

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

module.exports = { addOwner, getOwners };
