/**
 * Storefront Environment Configuration
 */

import dotenv from 'dotenv';
import path from 'path';

// Load .env from the project root
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

interface Config {
  nodeEnv: string;
  port: number;
  database: {
    url?: string;
    type: 'postgresql' | 'sqlite';
  };
  jwt: {
    secret: string;
    expiresIn: string;
  };
  cors: {
    allowedOrigins: string[];
  };
  management: {
    apiUrl: string;
    apiKey?: string;
  };
}

export const config: Config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || process.env.STOREFRONT_PORT || '8002', 10),
  
  database: {
    url: process.env.DATABASE_URL || process.env.STOREFRONT_DATABASE_URL,
    type: (process.env.DATABASE_URL || process.env.STOREFRONT_DATABASE_URL)?.includes('postgresql') ? 'postgresql' : 'sqlite',
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