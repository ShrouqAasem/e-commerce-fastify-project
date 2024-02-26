"use strict";
// category.controller.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryHandler = exports.updateCategoryHandler = exports.getCategoriesTreeHandler = exports.getCategoryByIdHandler = exports.getCategoriesHandler = exports.createCategoryHandler = void 0;
const category_service_1 = require("./category.service");
// Controller function to create a category
function createCategoryHandler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const category = yield (0, category_service_1.createCategory)(Object.assign({}, request.body));
        reply.code(200).send({
            category
        });
    });
}
exports.createCategoryHandler = createCategoryHandler;
// Controller function to get all categories
function getCategoriesHandler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categories = yield (0, category_service_1.getCategories)();
            reply.send(categories);
        }
        catch (error) {
            console.error(error);
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    });
}
exports.getCategoriesHandler = getCategoriesHandler;
// Controller function to get a category by ID
function getCategoryByIdHandler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const categoryId = yield (0, category_service_1.getCategoryById)(parseInt(id));
            reply.send(categoryId);
        }
        catch (error) {
            console.error(error);
            reply.code(500).send({ error: 'Internal Server Error', stack: error.stack });
        }
    });
}
exports.getCategoryByIdHandler = getCategoryByIdHandler;
// Controller function to get categories as a tree with product count
function getCategoriesTreeHandler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categoriesTree = yield (0, category_service_1.getCategoriesTreeWithProductCount)();
            reply.send(categoriesTree);
        }
        catch (error) {
            console.error(error);
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    });
}
exports.getCategoriesTreeHandler = getCategoriesTreeHandler;
// Controller function to update a category by ID
function updateCategoryHandler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            const userInput = request.body;
            const updatedCategory = yield (0, category_service_1.updateCategory)(parseInt(id, 10), Object.assign({}, userInput));
            reply.send(updatedCategory);
        }
        catch (error) {
            console.error(error);
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    });
}
exports.updateCategoryHandler = updateCategoryHandler;
// Controller function to delete a category by ID
function deleteCategoryHandler(request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = request.params;
            yield (0, category_service_1.deleteCategory)(parseInt(id, 10));
            reply.send({ message: 'Category deleted successfully' });
        }
        catch (error) {
            console.error(error);
            reply.code(500).send({ error: 'Internal Server Error' });
        }
    });
}
exports.deleteCategoryHandler = deleteCategoryHandler;
