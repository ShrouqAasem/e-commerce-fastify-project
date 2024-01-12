import { FastifyInstance } from "fastify";
import { createProductHandler, getProductsHandler } from "./product.controller";
import { CreateProductInput } from "./product.schema";
async function productRoutes(server: FastifyInstance) {
  server.post(
    "/",
    // {
    //   schema: {
    //     body: CreateProductInput,
    //     response: {
    //       201: $ref("productResponseSchema"),
    //     },
    //   },
    // },
    createProductHandler
  );

  server.get(
    "/",
    // {
    //   schema: {
    //     response: {
    //       200: $ref("productsResponseSchema"),
    //     },
    //   },
    // },

    getProductsHandler
  );

  server.get(
    "/:id",
    // {
    //   schema: {
    //     response: {
    //       200: $ref("productsResponseSchema"),
    //     },
    //   },
    // },

    getProductsHandler
  );
}

export default productRoutes;