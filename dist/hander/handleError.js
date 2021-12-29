"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsync = void 0;
const http_status_1 = __importDefault(require("http-status"));
const logger_1 = require("../logger");
const apiError_1 = require("./apiError");
const catchAsync = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next))
        .then((data) => {
        logger_1.log.info(`[${req.ip}, ${req.method}, ${req.path}]`);
        return res.json({
            code: http_status_1.default.OK,
            status: true,
            data,
        });
    })
        .catch((err) => {
        new apiError_1.ApiError(http_status_1.default['BAD_REQUEST'], err.message, res);
    });
};
exports.catchAsync = catchAsync;
//# sourceMappingURL=handleError.js.map