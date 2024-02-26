import { FastifyReply, FastifyRequest } from "fastify";
import { CreateProductInput } from "./product.schema";
import { createProduct, getProducts, getProduct} from "./product.service";

export async function createProductHandler(
  request: any
  // <{
  //   Body: CreateProductInput;

  // }>
  // request: FastifyRequest
  ,reply: FastifyReply
) {
  const product = await createProduct({
    ...request.body,
    picture: request.file.filename,
    categoryId: parseInt(request.body.categoryId)
  });

  reply.code(200).send({product, message: 'Product created successfully'})
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