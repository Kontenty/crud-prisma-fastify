const ctrl = require("./controllers");

const routes = [
  {
    method: "GET",
    url: "/cars",
    handler: ctrl.getCars,
  },
  {
    method: "GET",
    url: "/car",
    handler: ctrl.findCar,
  },
  {
    method: "POST",
    url: "/car",
    handler: ctrl.addCar,
  },
];

module.exports = routes;
