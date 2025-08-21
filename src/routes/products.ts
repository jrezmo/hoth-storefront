/**
 * Customer Product Routes
 * Simplified product catalog for customers
 */

import { Router } from 'express';

const router = Router();

// Placeholder controller functions
const getProducts = (req: any, res: any) => {
  const products = [
    {
      id: '1',
      name: 'Sample Product',
      description: 'A great product for customers',
      price: 29.99,
      available: true,
      stockLevel: 'available',
      category: 'Electronics',
      lastUpdated: new Date().toISOString(),
    }
  ];

  res.json({
    data: products,
    message: 'Products retrieved successfully',
    timestamp: new Date().toISOString(),
  });
};

const getProduct = (req: any, res: any) => {
  res.json({
    data: {
      id: req.params.id,
      name: 'Sample Product',
      description: 'A great product for customers',
      price: 29.99,
      available: true,
      stockLevel: 'available',
      category: 'Electronics',
      lastUpdated: new Date().toISOString(),
    },
    message: 'Product retrieved successfully',
    timestamp: new Date().toISOString(),
  });
};

// Get customer product catalog
router.get('/', getProducts);

// Get single product
router.get('/:id', getProduct);

export { router as productRoutes };