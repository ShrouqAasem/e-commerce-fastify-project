// category.controller.ts

import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateCategoryInput } from './category.schema';
import {createCategory, 
        deleteCategory, 
        getCategories, 
        getCategoriesTreeWithProductCount, 
        getCategoryById, 
        updateCategory} 
from './category.service';


// Controller function to create a category
export async function createCategoryHandler(
  request: FastifyRequest<{
    Body: CreateCategoryInput;
  }>,
  reply: FastifyReply
) {
  const category = await createCategory({
    ...request.body
  });

  reply.code(200).send({
    category
  });
}


// Controller function to get all categories
export async function getCategoriesHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const categories = await getCategories();

    reply.send(categories);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ error: 'Internal Server Error' });
  }
}
 

// Controller function to get a category by ID

export async function getCategoryByIdHandler(request: FastifyRequest<{
  Params: {
    id: string,
  }
}>, reply: FastifyReply) {
  try {
    const { id } = request.params;
    const categoryId = await getCategoryById(parseInt(id));
    reply.send(categoryId);
  } catch (error: any) {
    console.error(error);
    reply.code(500).send({ error: 'Internal Server Error', stack: error.stack });
  }
}





// Controller function to get categories as a tree with product count
export async function getCategoriesTreeHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const categoriesTree = await getCategoriesTreeWithProductCount();
    reply.send(categoriesTree);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ error: 'Internal Server Error' });
  }
}


// Controller function to update a category by ID
export async function updateCategoryHandler(request: any, reply: FastifyReply) {
  try {
    const { id } = request.params;
    const userInput: CreateCategoryInput = request.body;
    const updatedCategory = await updateCategory(parseInt(id, 10), { ...userInput });
    reply.send(updatedCategory);
  } catch (error) {
    console.error(error);
    reply.code(500).send({ error: 'Internal Server Error' });
  }
}


// Controller function to delete a category by ID
export async function deleteCategoryHandler(request: any, reply: FastifyReply) {
  try {
    const { id } = request.params;
    await deleteCategory(parseInt(id, 10));
    reply.send({ message: 'Category deleted successfully' });
  } catch (error) {
    console.error(error);
    reply.code(500).send({ error: 'Internal Server Error' });
  }
}



