"use strict";
// category.service.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.getCategoriesTreeWithProductCount = exports.getCategoryById = exports.getCategories = exports.createCategory = void 0;
const prisma_1 = __importDefault(require("../../utils/prisma"));
// Function to create a category
function createCategory(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma_1.default.category.create({
            data,
        });
    });
}
exports.createCategory = createCategory;
// Function to get all categories
function getCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma_1.default.category.findMany();
    });
}
exports.getCategories = getCategories;
// Function to get a category by ID
function getCategoryById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma_1.default.category.findFirst({
            where: { id },
        });
    });
}
exports.getCategoryById = getCategoryById;
// Function to get categories as a tree with product count
function getCategoriesTreeWithProductCount() {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma_1.default.category.findMany({
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
        });
    });
}
exports.getCategoriesTreeWithProductCount = getCategoriesTreeWithProductCount;
// Function to update a category by ID
function updateCategory(id, data) {
    return __awaiter(this, void 0, void 0, function* () {
        return prisma_1.default.category.update({
            where: { id },
            data,
        });
    });
}
exports.updateCategory = updateCategory;
// Function to delete a category by ID
function deleteCategory(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma_1.default.category.delete({
            where: { id },
        });
    });
}
exports.deleteCategory = deleteCategory;
