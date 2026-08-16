import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST() {
  const migrationRunner = require('node-pg-migrate').default;

  const migrations = await migrationRunner({
    databaseUrl: {
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      ssl: true,
    },
    dir: 'infra/migrations',
    direction: 'up',
    migrationsTable: 'pgmigrations',
  });

  return NextResponse.json(migrations, {
    status: migrations.length > 0 ? 201 : 200,
  });
}