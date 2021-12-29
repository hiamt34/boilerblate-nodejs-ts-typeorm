"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const services_1 = require("../services");
const baseController_controller_1 = require("./baseController.controller");
class ProductController extends baseController_controller_1.BaseController {
}
exports.productController = new ProductController(new services_1.ProductService());
//# sourceMappingURL=productController.js.map