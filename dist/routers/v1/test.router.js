"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRouter = void 0;
const express_1 = require("express");
const productController_1 = require("../../controllers/productController");
const handleError_1 = require("../../hander/handleError");
const server_1 = __importDefault(require("../../server"));
const router = (0, express_1.Router)();
const testRouter = () => {
    server_1.default.use('/test', router);
    router.get('/', (0, handleError_1.catchAsync)(productController_1.productController.reads));
    router.get('/:id', (0, handleError_1.catchAsync)(productController_1.productController.destroy));
};
exports.testRouter = testRouter;
//# sourceMappingURL=test.router.js.map