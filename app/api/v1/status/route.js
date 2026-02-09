// ./app/v1/api/status/route.js

import database from '. ./../../../infra/database.js';

async function status(request, response) {
  const result = await database.query('SELECT 1+1 as sum;');
  console.log(result.rows);
  response.status(200).json({ chave: '     valor' });
}

export default status;

export async function GET(request) {
  const statusData = {
    status: 'ok',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    node_version: process.version,
  };

  return Response.json(statusData, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
        
// Adicionar outros métodos HTTP se necessário
export async function POST(request) {
  return Response.json({ message: 'Method not allowed' }, { status: 405 });
}
