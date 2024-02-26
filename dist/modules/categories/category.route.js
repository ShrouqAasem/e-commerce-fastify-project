"use strict";
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
const category_controller_1 = require("./category.controller");
function categoryRoutes(server) {
    return __awaiter(this, void 0, void 0, function* () {
        server.post('/', {
            schema: {
                response: {
                    200: {
                        type: 'object',
                        required: [],
                        properties: {
                            value: { type: 'string' },
                            category: {}
                        }
                    }
                },
                body: {
                    type: "object",
                    required: ['name', 'picture', 'parentId'],
                    properties: {
                        name: { type: "string" },
                        picture: { type: "string" },
                        parentId: { type: "number" }
                    }
                }
            }
        }, category_controller_1.createCategoryHandler);
        // Get all categories
        server.get('/', category_controller_1.getCategoriesHandler);
        // Get a category by ID
        server.get('/:id', {
            schema: {
                params: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'number'
                        }
                    }
                }
            }
        }, category_controller_1.getCategoryByIdHandler);
        // Get categories as a tree with product count
        server.get('/tree', category_controller_1.getCategoriesTreeHandler);
        // Update a category by ID
        server.put('/:id', category_controller_1.updateCategoryHandler);
        // Delete a category by ID
        server.delete('/:id', category_controller_1.deleteCategoryHandler);
    });
}
exports.default = categoryRoutes;
