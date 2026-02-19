/**
 * @jest-environment node
 */

test('GET to /api/v1/status should return 200', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status');
  expect(response.status).toBe(200);
  const responseBody = await response.json();


  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.dependencies.database.version).toEqual(
    '18.2 (Debian 18.2-1.pgdg13+1)',
  );
  expect(responseBody.dependencies.database.max_connections).toEqual(100)

  expect(responseBody.dependencies.database.opened_connections).toEqual(1)

  new Date(responseBody.updated_at).toISOString(); // Verifica se é uma data válida
  //TODO : verificar se a data é não nula e se é uma data válida
});
