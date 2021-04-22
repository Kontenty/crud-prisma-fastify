const addCar = {
  body: {
    type: "object",
    properties: {
      model: { type: "string" },
      brand: { type: "string" },
      price: { type: "string" },
      productionYear: { type: "number" },
    },
  },
};

const addOwner = {
  body: {
    type: "object",
    properties: {
      firstName: { type: "string" },
      lastName: { type: "string" },
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
