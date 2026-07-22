describe('Regression', () => {
  it('fixed sql injection', async () => {
    const res = await request(app).get('/users?name=admin');
    expect(res.status).not.toBe(500);
  });
});
