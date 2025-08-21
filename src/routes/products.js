"use strict";
/**
 * Customer Product Routes
 * Simplified product catalog for customers
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.productRoutes = router;
// Placeholder controller functions
const getProducts = (req, res) => {
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
const getProduct = (req, res) => {
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
//# sourceMappingURL=products.js.map