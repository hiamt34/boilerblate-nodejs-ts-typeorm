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
exports.BaseController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = require("../hander/apiError");
class BaseController {
    constructor(service) {
        this.reads = () => __awaiter(this, void 0, void 0, function* () {
            return this.service.getAll();
        });
        this.read = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const query = {
                id: req.params.id,
            };
            const data = yield this.service.getById(query);
            if (!data)
                return new apiError_1.ApiError(http_status_1.default['NOT_FOUND'], 'NOT_FOUND', res);
            return data;
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            return this.service.create(req.body);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const query = {
                id: req.params.id,
            };
            const data = yield this.service.update(query, req.body);
            if (!data)
                return new apiError_1.ApiError(http_status_1.default['NOT_FOUND'], http_status_1.default['404_NAME'], res);
            return data;
        });
        this.destroy = (req) => __awaiter(this, void 0, void 0, function* () {
            const query = {
                id: req.params.id,
            };
            yield this.service.destroy(query);
            return;
        });
        this.service = service;
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=baseController.controller.js.map