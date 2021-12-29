"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const logDev_1 = require("./logDev");
const logPro_1 = require("./logPro");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const IS_PRODUCTION = Boolean(process.env.IS_PRODUCTION) || false;
exports.log = IS_PRODUCTION ? logPro_1.log : logDev_1.log;
//# sourceMappingURL=index.js.map