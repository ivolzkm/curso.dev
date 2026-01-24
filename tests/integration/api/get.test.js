/**
 * @jest-environment node
 */
// Configuração para rodar este teste no ambiente Node.js ao invés do jsdom

// Importa a função GET do route handler da API
import { GET } from '../../../app/api/v1/status/route';

test('GET to /api/v1/status should return 200', async () => {
  // Cria um mock do objeto Request simulando uma requisição HTTP GET
  // para o endpoint /api/v1/status
  const request = new Request('http://localhost:3000/api/v1/status', {
    method: 'GET',
  });

  // Chama a função GET do route handler passando o request mockado
  const response = await GET(request);

  // Verifica se o status HTTP da resposta é 200 (OK)
  expect(response.status).toBe(200);

  // Converte o corpo da resposta de JSON para objeto JavaScript
  const body = await response.json();

  // Verifica se o corpo da resposta está definido (não é null/undefined)
  expect(body).toBeDefined();

  // Verifica se o campo 'status' tem o valor 'ok'
  expect(body.status).toBe('ok');

  // Verifica se o campo 'environment' está presente na resposta
  expect(body.environment).toBeDefined();

  // Verifica se o campo 'timestamp' está presente na resposta
  expect(body.timestamp).toBeDefined();

  // Verifica se o campo 'uptime' está presente na resposta
  expect(body.uptime).toBeDefined();

  // Verifica se o campo 'node_version' está presente na resposta
  expect(body.node_version).toBeDefined();
});
