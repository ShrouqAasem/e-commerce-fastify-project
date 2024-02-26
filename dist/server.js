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
const fastify_1 = __importDefault(require("fastify"));
const product_route_1 = __importDefault(require("./modules/products/product.route"));
const cors_1 = __importDefault(require("@fastify/cors"));
const category_route_1 = __importDefault(require("./modules/categories/category.route"));
const multipart_1 = __importDefault(require("@fastify/multipart"));
function buildServer() {
    const server = (0, fastify_1.default)();
    server.register(cors_1.default, {
        origin: true,
    });
    server.get("/healthcheck", function () {
        return __awaiter(this, void 0, void 0, function* () {
            return { status: "OK" };
        });
    });
    server.register(multipart_1.default);
    server.register(product_route_1.default, { prefix: "api/products" });
    server.register(category_route_1.default, { prefix: "api/categories" });
    return server;
}
exports.default = buildServer;
