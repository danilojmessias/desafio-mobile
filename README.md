# Desafio Mobile - Testes Automatizados

Este projeto contém testes automatizados usando WebdriverIO com Cucumber para aplicações mobile.

## Como Executar os Testes

### Executar Todos os Testes
```bash
npm run test
# ou
npm run test:all
```

### Executar Cenários por Tag (Genérico)

#### Usando npm scripts
```bash
npm run test:tag @signup          # Executar cenários com tag @signup
npm run test:tag @login           # Executar cenários com tag @login
npm run test:tag @forms           # Executar cenários com tag @forms
npm run test:tag "@signup or @login"  # Múltiplas tags
npm run test:tag "not @forms"     # Excluir tags específicas
```

#### Usando o script Node.js diretamente
```bash
node run-test.js -t @signup       # Tag específica
node run-test.js -t "@signup or @login"  # Múltiplas tags
node run-test.js -t "not @forms"  # Excluir tags
```

#### Usando o script shell (Linux/Mac)
```bash
./run-test.sh -t @signup          # Tag específica
./run-test.sh -t "@signup or @login"  # Múltiplas tags
./run-test.sh -t "not @forms"     # Excluir tags
```

### Executar Arquivos de Feature Específicos (Genérico)

#### Usando npm scripts
```bash
npm run test:file features/signup.feature
npm run test:file features/login.feature
npm run test:file features/forms.feature
```

#### Usando o script Node.js diretamente
```bash
node run-test.js -f features/signup.feature
node run-test.js -f features/login.feature
node run-test.js -f features/forms.feature
```

#### Usando o script shell (Linux/Mac)
```bash
./run-test.sh -f features/signup.feature
./run-test.sh -f features/login.feature
./run-test.sh -f features/forms.feature
```

### Ver Ajuda
```bash
npm run test:help
# ou
node run-test.js -h
# ou
./run-test.sh -h
```

## Estrutura dos Testes

### Features Disponíveis
- **@signup**: Testes de cadastro de usuário
- **@login**: Testes de login de usuário  
- **@forms**: Testes de preenchimento de formulários

### Arquivos de Feature
- `features/signup.feature` - Cenários de cadastro
- `features/login.feature` - Cenários de login
- `features/forms.feature` - Cenários de formulários

### Step Definitions
- `step-definitions/signUp.steps.ts` - Steps para cadastro
- `step-definitions/login.steps.ts` - Steps para login
- `step-definitions/forms.steps.ts` - Steps para formulários

## Configuração

O projeto está configurado para executar testes em um emulador Android. Certifique-se de que:

1. O Appium Server esteja rodando na porta 4723
2. O emulador Android esteja ativo (emulator-5554)
3. O arquivo APK esteja no caminho correto: `/Users/mac/Documents/danilo/desafio.apk`

### Comportamento de Reinicialização do App

O projeto está configurado para **reiniciar o aplicativo entre cada cenário**, garantindo que:

- ✅ Cada cenário comece com um estado limpo
- ✅ Não há interferência entre cenários
- ✅ Os testes são mais confiáveis e isolados
- ✅ Screenshots são capturados automaticamente em caso de falha

**Como funciona:**
- **Antes de cada cenário**: O app é reiniciado completamente
- **Após cada cenário**: Screenshot é capturado se houver falha
- **Entre cenários**: Estado é limpo automaticamente

Isso é controlado pelos hooks em [`step-definitions/hooks.ts`](step-definitions/hooks.ts) e pelas configurações do Appium no [`wdio.conf.ts`](wdio.conf.ts).

## Exemplos de Uso

```bash
# Executar testes com tag específica
npm run test:tag @login

# Executar arquivo específico
npm run test:file features/forms.feature

# Executar múltiplas tags
node run-test.js -t "@signup or @login"

# Executar todos os testes exceto uma tag
node run-test.js -t "not @forms"

# Executar todos os testes
npm run test:all
```

## Como Adicionar Novas Tags

Para adicionar uma nova tag (ex: @api, @ui, @smoke), simplesmente:

1. **Adicione a tag ao seu cenário no arquivo .feature:**
```gherkin
Feature: Nova Feature

  @api @smoke
  Scenario: Novo cenário de teste
    Given I have a new test
    When I execute it
    Then I should see results
```

2. **Execute usando qualquer um dos métodos genéricos:**
```bash
npm run test:tag @api           # Executar apenas testes @api
npm run test:tag @smoke         # Executar apenas testes @smoke
npm run test:tag "@api and @smoke"  # Executar testes que têm ambas as tags
```

**Não é necessário modificar nenhum arquivo de configuração!** O sistema é totalmente genérico e suporta qualquer tag automaticamente.