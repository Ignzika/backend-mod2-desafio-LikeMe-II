import { config } from 'dotenv';
config()

export const db = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME_DATABASE,
    // DB online
    // connectionString: process.env.DATABASE_URL,
};

export const PORT = process.env.PORT || 3000 ;