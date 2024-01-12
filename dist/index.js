"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const server_1 = __importDefault(require("./server"));
const server = (0, server_1.default)();
server.listen({ port: 3000 }, function (err, address) {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
});
