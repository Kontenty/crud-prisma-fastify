const fastify = require("fastify");
const pino = require("pino");

const routes = require("./routes");
const swagger = require("./config/swagger");

const server = fastify({
  logger: pino({
    prettyPrint: true,
  }),
});

server.register(require("fastify-swagger"), swagger.options);
server.register(require("fastify-cors"));

server.get("/ping", {}, async (request, reply) => {
  // console.log(query);
  reply.send({ pong: "it worked" });
});

// server.register(routes);

routes.forEach((route) => {
  server.route(route);
});

const start = async () => {
  try {
    await server.listen(5000);
    server.swagger();
    const address = server.server.address();
    server.log.info(`Running on: ${JSON.stringify(address)}`);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
