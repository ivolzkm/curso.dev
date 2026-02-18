/**
 * @jest-environment node
 */

test('GET to /api/v1/status should return 200', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status');
  expect(response.status).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.dependencies.database.version).toEqual(
    '18.1 (Debian 18.1-1.pgdg13+2)',
  );

  new Date(responseBody.updated_at).toISOString(); // Verifica se é uma data válida
  //TODO : verificar se a data é não nula e se é uma data válida
});
