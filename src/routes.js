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
  {
    method: "POST",
    url: "/service",
    schema: schema.addService,
    handler: ctrl.addService,
  },
  {
    method: "POST",
    url: "/owner",
    schema: schema.addOwner,
    handler: ctrl.addOwner,
  },
  {
    method: "GET",
    url: "/owners",
    handler: ctrl.getOwners,
  },
];

module.exports = routes;
