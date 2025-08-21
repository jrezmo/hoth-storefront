"use strict";
/**
 * Storefront Environment Configuration
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load .env from the project root (two levels up from this file)
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../../.env') });
exports.config = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.STOREFRONT_PORT || '8002', 10),
    database: {
        url: process.env.STOREFRONT_DATABASE_URL,
        type: process.env.STOREFRONT_DATABASE_URL?.includes('postgresql') ? 'postgresql' : 'sqlite',
    },
    jwt: {
        secret: process.env.STOREFRONT_JWT_SECRET || 'customer-jwt-secret',
        expiresIn: process.env.JWT_EXPIRES_IN || '24h',
    },
    cors: {
        allowedOrigins: process.env.CORS_ORIGINS
            ? process.env.CORS_ORIGINS.split(',')
            : ['http://localhost:3000', 'http://localhost:3001'],
    },
    management: {
        apiUrl: process.env.MANAGEMENT_API_URL || 'http://localhost:8001',
        apiKey: process.env.MANAGEMENT_API_KEY,
    },
};
//# sourceMappingURL=environment.js.map