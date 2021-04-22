const { PrismaClient } = require("@prisma/client");
const ownerCtrl = require("./owner.ctrl")
const carCtrl = require("./car.ctrl")

exports.prisma = new PrismaClient();

module.exports = { ...carCtrl, ...ownerCtrl}
