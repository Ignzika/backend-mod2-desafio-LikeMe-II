import pg  from 'pg';
import { db } from './config.js';

export const pool = new pg.Pool(db);

// aviso de la DB si esta conectada
pool.on("connect", () => console.log("DATABASE connected"))