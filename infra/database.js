//infra/database.js

import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
});

async function query(queryObject) {
  try {
    const result = await pool.query(queryObject);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export default {
  query: query,
};
