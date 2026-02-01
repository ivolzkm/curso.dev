//infra/database.js

import { Client } from 'pg';

async function query(queryObject) {
  const client = new Client();
  await client.connect();
  await client.query(queryObject);
  await client.end();
  return result;
}

// const res = await client.query('SELECT %$1::text as message', ['Hello World!'])
// console.log(res.rows[0].message) //Hello World!
// await client.end()
