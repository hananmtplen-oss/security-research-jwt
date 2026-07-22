describe('OAuth flow', () => {
  it('exchanges code for token', async () => {
    const res = await request(app).post('/oauth/token').send({ code: 'test' });
    expect(res.status).toBe(200);
  });
});
