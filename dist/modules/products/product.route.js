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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_controller_1 = require("./product.controller");
const uploads_1 = __importDefault(require("../../utils/uploads"));
function productRoutes(server) {
    return __awaiter(this, void 0, void 0, function* () {
        server.post("/", { preHandler: uploads_1.default.single('picture'), schema: {
                // body: { 
                //   type: 'object',
                //   required: ['categoryId', 'name', 'picture'],
                //   properties: {
                //     categoryId: {
                //       type: 'number'
                //     },
                //     name: {
                //       type: 'string', 
                //       maxLength: 255,
                //       minLength: 1
                //     }
                //   }  
                // },
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string'
                            },
                            product: {
                                type: 'object'
                            }
                        }
                    }
                }
            } }, product_controller_1.createProductHandler);
        server.get("/", product_controller_1.getProductsHandler);
        server.get("/:id", product_controller_1.getProductsHandler);
    });
}
exports.default = productRoutes;
