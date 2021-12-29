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
exports.ProductService = void 0;
const Products_entity_1 = require("../database/entity/Products.entity");
class ProductService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return Products_entity_1.Products.find();
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.getById = (query) => __awaiter(this, void 0, void 0, function* () {
            try {
                return Products_entity_1.Products.findOne(query);
            }
            catch (error) {
                throw new Error();
            }
        });
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            try {
                return Products_entity_1.Products.create(data);
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.update = (query, update) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield Products_entity_1.Products.findOne(query);
                if (!product) {
                    return product;
                }
                Object.assign(product, update);
                yield product.save();
                return product;
            }
            catch (error) {
                throw new Error(error);
            }
        });
        this.destroy = (query) => __awaiter(this, void 0, void 0, function* () {
            try {
                return Products_entity_1.Products.delete(query);
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.service.js.map