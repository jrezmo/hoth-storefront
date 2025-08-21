"use strict";
/**
 * Customer Authentication Routes
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
exports.authRoutes = router;
// Placeholder controller functions
const register = (req, res) => {
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
const login = (req, res) => {
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
router.post('/register', [
    (0, express_validator_1.body)('email').isEmail().withMessage('Valid email is required'),
    (0, express_validator_1.body)('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
    (0, express_validator_1.body)('name').notEmpty().withMessage('Name is required'),
], register);
// Customer login
router.post('/login', [
    (0, express_validator_1.body)('email').isEmail().withMessage('Valid email is required'),
    (0, express_validator_1.body)('password').notEmpty().withMessage('Password is required'),
], login);
//# sourceMappingURL=auth.js.map