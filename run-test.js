#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Função para mostrar ajuda
function showHelp() {
    console.log('Uso: node run-test.js [opção] [valor]');
    console.log('');
    console.log('Opções:');
    console.log('  -t, --tag [tag]        Executar testes com tag específica (ex: @signup, @login)');
    console.log('  -f, --file [arquivo]   Executar arquivo de feature específico');
    console.log('  -a, --all             Executar todos os testes');
    console.log('  -h, --help            Mostrar esta ajuda');
    console.log('');
    console.log('Exemplos:');
    console.log('  node run-test.js -t @signup');
    console.log('  node run-test.js --tag "@signup or @login"');
    console.log('  node run-test.js -f features/signup.feature');
    console.log('  node run-test.js --file features/login.feature');
    console.log('  node run-test.js -a');
    console.log('');
    console.log('Tags disponíveis: @signup, @login, @forms');
}

// Função para executar comando
function runCommand(command, args) {
    console.log(`Executando: ${command} ${args.join(' ')}`);
    
    const child = spawn(command, args, {
        stdio: 'inherit',
        shell: true
    });

    child.on('close', (code) => {
        process.exit(code);
    });

    child.on('error', (error) => {
        console.error(`Erro ao executar comando: ${error.message}`);
        process.exit(1);
    });
}

// Processar argumentos
const args = process.argv.slice(2);

if (args.length === 0) {
    showHelp();
    process.exit(1);
}

const option = args[0];
const value = args[1];

switch (option) {
    case '-t':
    case '--tag':
        if (!value) {
            console.error('Erro: Tag não especificada');
            console.error('Uso: node run-test.js -t @tag');
            process.exit(1);
        }
        console.log(`Executando testes com tag: ${value}`);
        runCommand('npx', ['wdio', 'run', './wdio.conf.ts', `--cucumberOpts.tagExpression=${value}`]);
        break;

    case '-f':
    case '--file':
        if (!value) {
            console.error('Erro: Arquivo não especificado');
            console.error('Uso: node run-test.js -f features/arquivo.feature');
            process.exit(1);
        }
        console.log(`Executando arquivo: ${value}`);
        runCommand('npx', ['wdio', 'run', './wdio.conf.ts', `--spec=${value}`]);
        break;

    case '-a':
    case '--all':
        console.log('Executando todos os testes');
        runCommand('npx', ['wdio', 'run', './wdio.conf.ts']);
        break;

    case '-h':
    case '--help':
        showHelp();
        break;

    default:
        console.error(`Opção inválida: ${option}`);
        showHelp();
        process.exit(1);
}