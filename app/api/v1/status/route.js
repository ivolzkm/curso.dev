// ./app/v1/api/status/route.js

import { NextResponse } from 'next/server';
import database from 'infra/database.js';

export async function GET(request) {
  const updatedAt = new Date().toISOString();

  const databaseName = process.env.POSTGRES_DB;

  const [
    databaseVersionResult,
    databaseMaxConnectionsResult,
    databaseOpenedConnectionsResult,
  ] = await Promise.all([
    database.query('SHOW server_version;'),
    database.query('SHOW max_connections;'),
    database.query({
      text: 'SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;',
      values: [databaseName],
    }),
  ]);

  const databaseVersionValue = databaseVersionResult.rows[0].server_version;
  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult.rows[0].max_connections;
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  return NextResponse.json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
}
