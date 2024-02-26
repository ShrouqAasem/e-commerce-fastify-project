// category.service.ts

import prisma from '../../utils/prisma'; 
import {
  CreateCategoryInput,
  CategoryResponseSchema,
  CategoryTreeResponseSchema,
} from './category.schema';


// Function to create a category
export async function createCategory(data: CreateCategoryInput): Promise<CategoryResponseSchema> {
  return prisma.category.create({
    data,
  });
}

// Function to get all categories
export async function getCategories(): Promise<CategoryResponseSchema[]> {
  return prisma.category.findMany();
}

// Function to get a category by ID
export async function getCategoryById(id: number): Promise<CategoryResponseSchema | null> {
  return prisma.category.findFirst({
    where: { id },
  });
}

// Function to get categories as a tree with product count
export async function getCategoriesTreeWithProductCount(): Promise<CategoryTreeResponseSchema[]> {
  return prisma.category.findMany({
    select: { 
      id: true,
      name: true,
      picture: true, 
      createdAt: true,
      updatedAt: true,
      parentId: true,
      children: true,
      _count: {
        select: {
          products: true 
        }
      }
    }
  })
}

// Function to update a category by ID
export async function updateCategory(id: number, data: CreateCategoryInput): Promise<CategoryResponseSchema> {
  return prisma.category.update({
    where: { id },
    data,
  });
}

// Function to delete a category by ID
export async function deleteCategory(id: number): Promise<void> {
  await prisma.category.delete({
    where: { id },
  });
}

