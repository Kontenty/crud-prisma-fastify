const ctrl = require("./controllers");
const schema = require("./config/jsonSchema");

const routes = [
  {
    method: "GET",
    url: "/cars",
    handler: ctrl.getCars,
  },
  {
    method: "GET",
    url: "/car/:id",
    schema: schema.findCar,
    handler: ctrl.findCar,
  },
  {
    method: "POST",
    url: "/car",
    schema: schema.addCar,
    handler: ctrl.addCar,
  },
];

module.exports = routes;
