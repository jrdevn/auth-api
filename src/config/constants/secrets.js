const env = process.env;

export const API_SECRET = env.API_SECRET ? env.API_SECRET : "YXV0aC1hcGktc2VjcmV0LWRldi1qaG93"

export const DB_HOST = env.DB_HOST ? env.DB_HOST : "localhost";
export const DB_NAME = env.DB_NAME ? env.DB_NAME : "auth-db";
export const DB_USER = env.DB_USER ? env.DB_USER : "sa";
export const DB_PORT = env.DB_PORT ? env.DB_PORT : "5432";
export const DB_PASSWORD = env.DB_PASSWORD ? env.DB_PASSWORD : "123456";
