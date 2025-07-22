import dotenv from 'dotenv';
dotenv.config(); // ✅ MUST be at the top

import { neon } from '@neondatabase/serverless';

console.log("DATABASE_URL =", process.env.DATABASE_URL); // 👀 debug

const sql = neon(process.env.DATABASE_URL);

export default sql;
