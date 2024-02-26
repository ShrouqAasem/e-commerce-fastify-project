import { FastifyInstance } from "fastify";
import { createProductHandler, getProductsHandler } from "./product.controller";
import uploads from "../../utils/uploads"


async function productRoutes(server: FastifyInstance) {
  server.post(
    "/",
    { preHandler: uploads.single('picture'), schema: {
      // body: { 
      //   type: 'object',
      //   required: ['categoryId', 'name', 'picture'],
      //   properties: {
      //     categoryId: {
      //       type: 'number'
      //     },
      //     name: {
      //       type: 'string', 
      //       maxLength: 255,
      //       minLength: 1
      //     }
      //   }  
      // },
      response: {
        200: {
          type: 'object',
          properties: {
            message: {
              type: 'string'
            },
            product: {
              type: 'object'
            }
          }
        }
      }
    }},
    createProductHandler
  );

  server.get(
    "/",
    getProductsHandler
  );

  server.get(
    "/:id",
    getProductsHandler
  );

}


export default productRoutes;