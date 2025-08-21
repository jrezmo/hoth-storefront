/**
 * Customer Storefront Server
 * Simplified e-commerce frontend with customer authentication
 */

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import fs from 'fs';
import { config } from './config/environment';
import { logger } from './utils/logger';
import { errorHandler, notFoundHandler } from './middleware/error-handler';
import { authRoutes } from './routes/auth';
import { productRoutes } from './routes/products';
import { orderRoutes } from './routes/orders';

const app = express();
const PORT = parseInt(process.env.PORT || String(config.port), 10);
const HOST = process.env.HOST || '0.0.0.0';

// Add early health check route before any middleware
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'hoth-storefront',
    timestamp: new Date().toISOString(),
    port: PORT,
    host: HOST
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'hoth-storefront',
    version: '1.0.0',
    port: PORT,
    host: HOST,
    nodeEnv: process.env.NODE_ENV,
    railway: process.env.RAILWAY_ENVIRONMENT,
  });
});

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", config.management.apiUrl],
    },
  },
}));

// Customer-focused rate limiting (more generous than management system)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // limit each IP to 200 requests per windowMs
  message: {
    error: 'Too many requests, please try again later.',
  },
});
app.use(limiter);

// CORS configuration for customer access
app.use(cors({
  origin: config.cors.allowedOrigins,
  credentials: true,
}));

// Body parsing
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

// Request logging (simplified for customers)
app.use((req, res, next) => {
  if (!req.path.startsWith('/static')) {
    logger.info(`${req.method} ${req.path}`, {
      ip: req.ip,
    });
  }
  next();
});

// Check frontend files exist
const frontendDistPath = path.join(__dirname, '../frontend/dist');
const indexPath = path.join(__dirname, '../frontend/dist/index.html');

console.log(`Checking frontend dist path: ${frontendDistPath}`);
if (!fs.existsSync(frontendDistPath)) {
  console.warn(`Frontend dist path does not exist: ${frontendDistPath}`);
} else {
  console.log('Frontend dist path exists');
}

console.log(`Checking index.html at: ${indexPath}`);
if (!fs.existsSync(indexPath)) {
  console.error(`Index.html not found at: ${indexPath}`);
} else {
  console.log('Index.html found');
}

// Serve static frontend files
app.use('/static', express.static(path.join(__dirname, '../frontend/dist/static')));
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Health check routes are defined earlier before middleware

// API routes
console.log('Loading API routes...');
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
console.log('API routes loaded');

// Serve React app for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
console.log(`Starting server on ${HOST}:${PORT}...`);
app.listen(PORT, HOST, () => {
  console.log(`✅ Server successfully started on ${HOST}:${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || config.nodeEnv}`);
  console.log(`🚂 Railway Environment: ${process.env.RAILWAY_ENVIRONMENT || 'not set'}`);
  logger.info(`🛍️  Customer storefront running on port ${PORT}`);
  logger.info(`📊 Environment: ${config.nodeEnv}`);
  logger.info(`🔗 Management API: ${config.management.apiUrl}`);
});

export default app;