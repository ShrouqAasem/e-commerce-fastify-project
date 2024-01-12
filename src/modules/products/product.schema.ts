
export interface CreateProductInput {
  categoryId: any;
  name: string;
  picture: string;
}

export interface productResponseSchema extends CreateProductInput{
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface productsResponseSchema {
  products: productResponseSchema[];
}


