import { createRouter, createWebHashHistory } from 'vue-router';
import Category from '../views/categories/Category.vue'
import Categories from '../views/categories/Categories.vue'
import Product from '../views/prodcuts/Product.vue'
import Products from '../views/prodcuts/Products.vue'

const routes = [
  { path: '/categories/:id', component: Category, name: "category" },
  { path: '/products/:id', component: Product, name: "product" },
  { path: '/categories', component: Categories, name: "categories" },
  { path: '/products', component: Products, name: "products" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
