import Fastify from "fastify";
import productRoutes from "./modules/products/product.route";
import cors from "@fastify/cors";
import categoryRoutes from "./modules/categories/category.route";
import multipart from "@fastify/multipart";

function buildServer() {
  const server = Fastify();
  server.register(cors, {
    origin: true,
  });

  server.get("/healthcheck", async function () {
    return { status: "OK" };
  });

  server.register(multipart);
  server.register(productRoutes, { prefix: "api/products" });
  server.register(categoryRoutes, { prefix: "api/categories" });

  return server;
}

export default buildServer;
