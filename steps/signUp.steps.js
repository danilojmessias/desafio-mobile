const { Given, When, Then } = require('@cucumber/cucumber');
const SignupPage = require('../pages/signup.page');
const HomePage = require('../pages/home.page');
const expect = require('chai').expect;

Given('que o usuário abre o app', async () => {
    await driver.pause(2000); // só para garantir que abriu
});

When('o usuário acessa a tela de cadastro', async () => {
    await HomePage.clickLoginBtn();
});

When('preenche os dados de cadastro', async () => {
    await SignupPage.signup("danilo@teste.com","12345678")
});


Then('o usuário deve ter se cadastro com sucesso no aplicativo', async () => {
    const isDisplayed = await SignupPage.assertSignUp();
    expect(isDisplayed).to.be.true;
});
