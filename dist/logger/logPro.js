"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const fs_1 = __importDefault(require("fs"));
const pino_multi_stream_1 = __importDefault(require("pino-multi-stream"));
exports.log = (0, pino_multi_stream_1.default)({
    streams: [
        { stream: fs_1.default.createWriteStream('./tmp/info.stream.out') },
        {
            level: 'fatal',
            stream: fs_1.default.createWriteStream('./tmp/fatal.stream.out'),
        },
        {
            level: 'error',
            stream: fs_1.default.createWriteStream('./tmp/error.stream.out'),
        },
    ],
});
//# sourceMappingURL=logPro.js.map