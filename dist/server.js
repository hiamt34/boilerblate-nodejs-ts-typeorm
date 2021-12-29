"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
require("./database");
const cors_1 = __importDefault(require("cors"));
const rateLimiter_middleware_1 = require("./middleware/rateLimiter.middleware");
const routers_1 = require("./routers");
const logger_1 = require("./logger");
const apiError_1 = require("./hander/apiError");
const http_status_1 = __importDefault(require("http-status"));
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const IS_PRODUCTION = Boolean(process.env.IS_PRODUCTION) || false;
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins,
};
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
if (IS_PRODUCTION) {
    app.use('/', rateLimiter_middleware_1.limiter);
}
app.listen(PORT, HOST, () => {
    logger_1.log.info(`Server listing on ${PORT}`);
    (0, routers_1.routers)();
    app.use((_req, res) => new apiError_1.ApiError(http_status_1.default['NOT_FOUND'], http_status_1.default['404'], res));
});
exports.default = app;
//# sourceMappingURL=server.js.map