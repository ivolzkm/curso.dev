/**
 * @jest-environment node
 */

// Importa a função GET do route handler
import { GET } from '../../../app/api/v1/status/route';

test('GET to /api/v1/status should return 200', async () => {
  // Cria um mock do objeto Request
  const request = new Request('http://localhost:3000/api/v1/status', {
    method: 'GET',
  });

  // Chama a função GET do route handler
  const response = await GET(request);

  // Verifica se o status é 200
  expect(response.status).toBe(200);

  // Pega o corpo da resposta
  const body = await response.json();

  // Verifica se o corpo está definido e tem a estrutura esperada
  expect(body).toBeDefined();
  expect(body.status).toBe('ok');
  expect(body.environment).toBeDefined();
  expect(body.timestamp).toBeDefined();
  expect(body.uptime).toBeDefined();
  expect(body.node_version).toBeDefined();
});
