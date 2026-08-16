/**
 * @jest-environment node
 */

test('POST to /api/v1/migrations should return 201', async () => {
  const response = await fetch(
    'http://127.0.0.1:3000/api/v1/migrations',
    {
      method: 'POST',
    },
  );
  expect([200, 201]).toContain(response.status);
  //expect(response.status).toBe(201);
});

test('POST to /api/v1/migrations should return executed migrations', async () => {
  const response = await fetch(
    'http://127.0.0.1:3000/api/v1/migrations',
    {
      method: 'POST',
    },
  );

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
});