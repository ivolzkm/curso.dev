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

// Opcional: adicionar outros métodos HTTP se necessário
export async function POST(request) {
  return Response.json({ message: 'Method not allowed' }, { status: 405 });
}
