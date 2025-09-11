Feature: Cadastro no aplicativo Native Demo Bem sucedido

  Scenario: Usuário realiza cadastro no app
    Given que o usuário abre o app 
    When o usuário acessa a tela de cadastro
    And preenche os dados de cadastro
    Then o usuário deve ter se cadastro com sucesso no aplicativo

