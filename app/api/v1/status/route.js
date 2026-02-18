// ./app/v1/api/status/route.js

import { NextResponse } from 'next/server';
import database from 'infra/database.js';

export async function GET(request) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query('SHOW server_version;');
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;
  console.log(databaseVersionValue);
  return NextResponse.json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
      },
    },
  });
}
