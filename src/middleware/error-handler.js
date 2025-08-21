"use strict";
/**
 * Storefront Error Handling Middleware
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.notFoundHandler = void 0;
const logger_1 = require("../utils/logger");
const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        error: {
            message: `Route ${req.method} ${req.path} not found`,
            statusCode: 404,
        },
        timestamp: new Date().toISOString(),
        path: req.path,
    });
};
exports.notFoundHandler = notFoundHandler;
const errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    logger_1.logger.error('Request error', {
        error: {
            name: error.name,
            message: error.message,
            stack: error.stack,
        },
        request: {
            method: req.method,
            url: req.url,
            ip: req.ip,
        },
        statusCode,
    });
    res.status(statusCode).json({
        error: {
            message,
            statusCode,
        },
        timestamp: new Date().toISOString(),
        path: req.path,
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map