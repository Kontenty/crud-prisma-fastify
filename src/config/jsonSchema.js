const addCar = {
  body: {
    type: "object",
    properties: {
      model: { type: "string" },
      brand: { type: "string" },
      price: { type: "number", minimum: 0 },
      productionYear: { type: "integer", minimum: 1886 },
      ownerId: { type: "integer" },
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
      ownerId: { type: "integer" },
    },
  },
};

const findCar = {
  params: {
    type: "object",
    properties: {
      id: { type: "integer" },
    },
    required: ["id"],
  },
};

module.exports = { addCar, findCar, addOwner };
