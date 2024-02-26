import { FastifyInstance } from "fastify";
import {
  createCategoryHandler,
  getCategoriesHandler,
  getCategoryByIdHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
  getCategoriesTreeHandler,
} from './category.controller';
import { object, string } from "zod";

async function categoryRoutes(server: FastifyInstance) {

  server.post('/', {
    schema: {
      response: {
        200: {
          type: 'object',
          required: [],
          properties: {
            value: { type: 'string' },
            category: {}
          }
        }
      },
      body: {
        type: "object",
        required: ['name', 'picture', 'parentId'],
        properties: {
          name: { type: "string" },
          picture: { type: "string" },
          parentId: { type: "number" }
        }
      }
    }
  }, createCategoryHandler);
  


  // Get all categories
  server.get('/', getCategoriesHandler);

  // Get a category by ID
  server.get('/:id',
  {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'number'
          }
        }
      }
    }
  },
   getCategoryByIdHandler);

  // Get categories as a tree with product count
  server.get('/tree', getCategoriesTreeHandler);

  // Update a category by ID
  server.put('/:id', updateCategoryHandler);

  // Delete a category by ID
  server.delete('/:id', deleteCategoryHandler);
}


export default categoryRoutes;
