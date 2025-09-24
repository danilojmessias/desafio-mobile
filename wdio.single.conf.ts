import { config as baseConfig } from './wdio.conf';

// Configuração para executar cenários únicos
export const config: WebdriverIO.Config = {
    ...baseConfig,
    
    // Permite especificar specs específicos via linha de comando
    specs: process.env.SPEC_FILE ? [process.env.SPEC_FILE] : baseConfig.specs,
    
    // Configurações do Cucumber para tags
    cucumberOpts: {
        ...baseConfig.cucumberOpts,
        // Permite especificar tags via linha de comando
        tagExpression: process.env.TAG_EXPRESSION || baseConfig.cucumberOpts?.tagExpression || '',
    },
    
    // Configuração para executar apenas um cenário por vez
    maxInstances: 1,
};