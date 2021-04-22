const { PrismaClient } = require("@prisma/client");
const ownerCtrl = require("./owner.ctrl")
const carCtrl = require("./car.ctrl")
const serviceCtrl = require("./service.ctrl")

exports.prisma = new PrismaClient();

module.exports = { ...carCtrl, ...ownerCtrl, ...serviceCtrl}
