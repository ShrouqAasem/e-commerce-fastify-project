import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import productRoutes from "./modules/products/product.route";

function buildServer() {
  const server = Fastify();

 
  

  server.get("/healthcheck", async function () {
    return { status: "OK" };
  });

 


//   server.register(
//     swagger,
//     withRefResolver({
//       routePrefix: "/docs",
//       exposeRoute: true,
//       staticCSP: true,
//       openapi: {
//         info: {
//           title: "Fastify API",
//           description: "API for some products",
//           version,
//         },
//       },
//     })
//   );

  server.register(productRoutes, { prefix: "api/products" });

  return server;
}

export default buildServer;