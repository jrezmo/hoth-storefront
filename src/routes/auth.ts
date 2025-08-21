/**
 * Customer Authentication Routes
 */

import { Router } from 'express';
import { body } from 'express-validator';

const router = Router();

// Placeholder controller functions
const register = (req: any, res: any) => {
  res.json({
    data: {
      customer: {
        id: '1',
        email: req.body.email,
        name: req.body.name,
      },
      token: 'placeholder-customer-token',
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    message: 'Registration successful',
    timestamp: new Date().toISOString(),
  });
};

const login = (req: any, res: any) => {
  res.json({
    data: {
      customer: {
        id: '1',
        email: req.body.email,
        name: 'Customer User',
      },
      token: 'placeholder-customer-token',
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    message: 'Login successful',
    timestamp: new Date().toISOString(),
  });
};

// Customer registration
router.post('/register',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    body('name').notEmpty().withMessage('Name is required'),
  ],
  register
);

// Customer login
router.post('/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  login
);

export { router as authRoutes };