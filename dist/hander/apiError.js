"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
const logger_1 = require("../logger");
class ApiError extends Error {
    constructor(statusCode, message, res) {
        super(message);
        logger_1.log.error(message);
        res.status(statusCode).json({
            code: statusCode,
            status: false,
            message: message,
        });
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=apiError.js.map