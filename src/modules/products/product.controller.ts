import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProductInput } from "./product.schema";
import { createProduct, getProducts, getProduct} from "./product.service";

export async function createProductHandler(
  request: FastifyRequest<{
    Body: CreateProductInput;
  }>
) {
  const product = await createProduct({
    ...request.body
  });

  return product;
}

export async function getProductsHandler() {
  const products = await getProducts();

  return products;
}

export async function getProductHandler(request: any, reply:any){
  const {id} = request.params;
  const product = await getProduct(id);

  return product;
}