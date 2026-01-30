import { Before, After, BeforeAll, AfterAll } from '@wdio/cucumber-framework';

/**
 * Hook executado antes de cada cenário
 * Garante que o app esteja em um estado limpo reiniciando-o
 */
Before(async function (scenario) {
    console.log(`\n🚀 Iniciando cenário: ${scenario.pickle.name}`);
    
    try {
        console.log('📱 Reiniciando o aplicativo para estado limpo...');
        
        // Método mais simples: usar reset do app via capabilities
        // Isso força o app a ser reiniciado com estado limpo
        await browser.reloadSession();
        await browser.pause(3000); // Aguarda o app carregar completamente
        
        console.log('✅ Aplicativo reiniciado com sucesso');
    } catch (error: any) {
        console.log('⚠️ Erro ao reiniciar app:', error.message);
        
        // Fallback: tenta apenas dar uma pausa para estabilizar
        try {
            await browser.pause(2000);
            console.log('⚠️ Usando fallback - continuando com estado atual');
        } catch (fallbackError: any) {
            console.log('⚠️ Erro no fallback:', fallbackError.message);
        }
    }
});

/**
 * Hook executado após cada cenário
 * Captura screenshot em caso de falha e prepara para próximo cenário
 */
After(async function (scenario) {
    const scenarioStatus = scenario.result?.status || 'unknown';
    console.log(`\n📊 Cenário finalizado: ${scenario.pickle.name} - Status: ${scenarioStatus}`);
    
    try {
        // Se o cenário falhou, captura screenshot para debug
        if (scenarioStatus === 'FAILED') {
            console.log('📸 Capturando screenshot do erro...');
            const screenshot = await browser.takeScreenshot();
            this.attach(screenshot, 'image/png');
        }
        
        console.log('🔄 Cenário finalizado - preparando para próximo...');
        
    } catch (error: any) {
        console.log('⚠️ Erro ao finalizar cenário:', error.message);
    }
});

/**
 * Hook executado antes de todos os testes
 * Configuração inicial
 */
BeforeAll(async function () {
    console.log('🎯 Iniciando execução dos testes...');
    console.log('📱 Configurando ambiente de teste mobile');
    console.log('ℹ️  Cada cenário será executado com o app em estado limpo');
});

/**
 * Hook executado após todos os testes
 * Limpeza final
 */
AfterAll(async function () {
    console.log('🏁 Finalizando execução dos testes...');
    console.log('✅ Todos os cenários foram executados');
});