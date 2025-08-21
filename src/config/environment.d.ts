/**
 * Storefront Environment Configuration
 */
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
export declare const config: Config;
export {};
//# sourceMappingURL=environment.d.ts.map