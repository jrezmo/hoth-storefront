/**
 * Storefront Error Handling Middleware
 */

import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    error: {
      message: `Route ${req.method} ${req.path} not found`,
      statusCode: 404,
    },
    timestamp: new Date().toISOString(),
    path: req.path,
  });
};

export const errorHandler = (
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';
  
  logger.error('Request error', {
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