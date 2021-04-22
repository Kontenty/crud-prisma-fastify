const addCar = {
  body: {
    type: "object",
    properties: {
      model: { type: "string" },
      brand: { type: "string" },
      price: { type: "number" },
      productionYear: { type: "number" },
      ownerId: { type: "number" },
    },
    required: ['brand','model','ownerId']
  },
};

const addOwner = {
  body: {
    type: "object",
    properties: {
      firstName: { type: "string" },
      lastName: { type: "string" },
      ownerId: { type: "number" },
    },
  },
};

const findCar = {
  params: {
    type: "object",
    properties: {
      id: { type: "number" },
    },
    required: ["id"],
  },
};

module.exports = { addCar, findCar, addOwner };
