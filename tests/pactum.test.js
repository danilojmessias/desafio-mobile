const pactum = require('pactum');
const { expect } = require('chai');

describe('API de Cadastro/Login', () => {
  it('deve criar um novo usuário', async () => {
    const res = await pactum.spec()
      .post('https://api-native-demo.com/signup')
      .withJson({
        name: "Danilo Teste",
        email: "danilo@example.com",
        password: "123456"
      })
      .expectStatus(201)
      .returns('res.body');

    expect(res.email).to.equal("danilo@example.com");
  });
});
