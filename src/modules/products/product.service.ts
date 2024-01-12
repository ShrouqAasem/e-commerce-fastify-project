import prisma from "../../utils/prisma";
import { CreateProductInput } from "./product.schema";

export async function createProduct(
  data: CreateProductInput 
) {
  return prisma.product.create({
    data,
  });
}

export function getProducts() {
  return prisma.product.findMany({
    select: {
      id: true,
      name: true,
      picture: true,
      category: {
        select: {
          id: true,
          name: true
        }
      },
      createdAt: true,
      updatedAt: true,

    },
  });
}

export function getProduct(id: number): any {
  return prisma.product.findFirst({
    where: {id},
    select: {
      id: true,
      name: true,
      picture: true,
      category: {
        select: {
          id: true,
          name: true
        }
      },
      createdAt: true,
      updatedAt: true,

    },
  });
}


