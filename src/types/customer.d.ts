/**
 * Customer Type Definitions
 * Simplified customer data model
 */
export interface Customer {
    id: string;
    email: string;
    name: string;
    phone?: string;
    address?: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    createdAt: Date;
    lastLoginAt?: Date;
}
export interface CustomerRegistration {
    email: string;
    password: string;
    name: string;
    phone?: string;
    address?: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
}
export interface CustomerLogin {
    email: string;
    password: string;
}
export interface CustomerLoginResponse {
    customer: Omit<Customer, 'password'>;
    token: string;
    expiresAt: Date;
}
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    available: boolean;
    stockLevel: 'available' | 'low' | 'out_of_stock';
    category: string;
    size?: string;
    imageUrl?: string;
    lastUpdated: Date;
}
export interface CartItem {
    productId: string;
    product: Product;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
}
export interface CustomerOrder {
    id: string;
    customerId: string;
    items: CartItem[];
    subtotal: number;
    tax?: number;
    shipping?: number;
    total: number;
    status: 'submitted' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    shippingAddress: {
        name: string;
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    estimatedDelivery?: Date;
    trackingNumber?: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface OrderSubmission {
    items: {
        productId: string;
        quantity: number;
    }[];
    shippingAddress: {
        name: string;
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
}
//# sourceMappingURL=customer.d.ts.map