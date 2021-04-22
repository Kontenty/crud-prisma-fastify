const addCar = {
  body: {
    type: "object",
    properties: {
      title: { type: "string" },
      brand: { type: "string" },
      price: { type: "string" },
      age: { type: "string" },
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

module.exports = { addCar, findCar };
