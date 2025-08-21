/**
 * Storefront Logging Utility
 */

import winston from 'winston';
import { config } from '../config/environment';

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'HH:mm:ss' }),
  winston.format.printf(({ timestamp, level, message, ...meta }) => {
    let log = `${timestamp} [${level}] ${message}`;
    
    if (Object.keys(meta).length > 0) {
      log += ` ${JSON.stringify(meta)}`;
    }
    
    return log;
  })
);

export const logger = winston.createLogger({
  level: 'info',
  format: logFormat,
  defaultMeta: {
    service: 'hoth-storefront',
  },
  transports: [
    new winston.transports.Console({
      format: config.nodeEnv === 'development' ? consoleFormat : logFormat,
    }),
  ],
});