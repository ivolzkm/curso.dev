/**
 * @jest-environment node
 */

test('GET to /api/v1/status should return 200', async () => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/status');

  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.updated_at).toBeDefined();

  expect(responseBody.dependencies.database.version).toEqual('17.10 (29ad1b7)');

  expect(responseBody.dependencies.database.max_connections).toEqual(901);

  expect(responseBody.dependencies.database.opened_connections).toEqual(1);

  expect(() => {
    new Date(responseBody.updated_at).toISOString();
  }).not.toThrow();
});
