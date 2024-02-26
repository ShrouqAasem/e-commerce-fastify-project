import { CLIENT_RENEG_LIMIT } from "tls";

export interface CreateCategoryInput {
  name: string;
  picture: string; 
  parent_id?: number | null; // Optional parent category ID for creating a hierarchical structure
}


export interface CategoryResponseSchema extends CreateCategoryInput {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoriesResponseSchema {
  categories: CategoryResponseSchema[];
}

export interface CategoryTreeResponseSchema {
  id: number;
  name: string;
  picture: string; 
  createdAt: Date;
  updatedAt: Date;
  parentId?: number | null;
  children?: CategoryTreeResponseSchema[];
}



