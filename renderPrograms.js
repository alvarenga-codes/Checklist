// 1.6 Executa quando a página terminar de carregar
window.addEventListener('load', carregarEscolas);

// 2.1 Executar após o carregamento da página
document.addEventListener('DOMContentLoaded', carregarProgramas);

// 3.1 Executar após o carregamento da página
window.addEventListener('DOMContentLoaded', renderizarAcoes);

// Inicialize os event listeners para os elementos existentes
applyRadioEventListeners(document);

// FUNÇÃO DE RENDERIZAÇÃO DE CADA TEMPLATE
//Renderização Ofício
initializeTable(oficioData, "oficio-table-body", "oficio-section", "oficio-container");

//Clonagem e Renderização Ata de prioridades
setupTemplateCloning(
    'template-ata-prioridades', // ID do template
    'ata-prioridades-receptacle', // ID do receptáculo
    'add-ata-prioridades', // ID do botão de adicionar
    ataPrioridadesData, // Dados para renderização
    'ata-prioridades' // Padrão do nome do formulário
);

//Clonagem e Renderização Plano de ação
setupTemplateCloning(
    'template-plano-acao', // ID do template
    'plano-acao-receptacle', // ID do receptáculo
    'add-plano-acao', // ID do botão de adicionar
    planoAcaoData, // Dados para renderização
    'plano-acao' // Padrão do nome do formulário
);

//Clonagem e Renderização Extratos bancários
//Conta Corrente
setupTemplateCloning(
    'template-cc', // ID do template
    'cc-receptacle', // ID do receptáculo
    'add-cc', // ID do botão de adicionar
    contaCCorrenteData, // Dados para renderização
    'cc' // Padrão do nome do formulário
);
//Conta Investimento
setupTemplateCloning(
    'template-ci', // ID do template
    'ci-receptacle', // ID do receptáculo
    'add-ci', // ID do botão de adicionar
    contaCInvestimentoData, // Dados para renderização
    'ci' // Padrão do nome do formulário
);

//Clonagem e Renderização Devoluções
//Devolução Escola
setupTemplateCloning(
    'template-dev-escola', // ID do template
    'dev-escola-receptacle', // ID do receptáculo
    'add-dev-escola', // ID do botão de adicionar
    devolucaoEscolaData, // Dados para renderização
    'dev-escola' // Padrão do nome do formulário
);
//Devolução FNDE
initializeTable(devolucaoFNDEData, "dev-fnde-table-body", "dev-fnde-section", "dev-fnde-container");

//Renderização Documentos de compra
setupTemplateWithSectionCloning(
    'template-docs-compras', // ID do template
    'docs-compras-receptacle', // ID do receptáculo
    'add-docs-compras', // ID do botão de adicionar
    docsCompraData, // Dados para renderização
    'docs-compras' // Padrão do nome do formulário
);

//Renderização REX 
initializeTable(rexData, "rex-table-body", "rex-section", "rex-container");

//Renderização Parecer Conselho Fiscal
initializeTable(parecerCFData, "parecer-conselho-fiscal-table-body", "parecer-conselho-fiscal-section", "parecer-conselho-fiscal-container");

//Renderização Ata de aprovação PCA
initializeTable(aprovacaoPCAData, "ata-aprov-pca-table-body", "ata-aprov-pca-section", "ata-aprov-pca-container");

//Renderização Atas de conferência
initializeTable(constituicaoUExData, "ata-uex-table-body", "ata-uex-section", "ata-uex-container");
initializeTable(termoConselhoEscolarData, "termo-conselho-escolar-table-body", "termo-conselho-escolar-section", "termo-conselho-escolar-container");
initializeTable(ataEscolhaConselhoEscolarData, "ata-conselho-escolar-table-body", "ata-conselho-escolar-section", "ata-conselho-escolar-container");

//Renderização Quadro Demonstrativo
setupTemplateWithSectionCloning(
    'template-qd', // ID do template
    'qd-receptacle', // ID do receptáculo
    'add-qd', // ID do botão de adicionar
    quadroDemonstrativoData, // Dados para renderização
    'qd' // Padrão do nome do formulário
);

// CHECKBOXES NÃO SE APLICAM
// Templates não clonados
toggleVisibility();
// Templates clonados
toggleVisibilitySection('docs-compras-receptacle');
toggleVisibilitySection('qd-receptacle');

// Adiciona o evento de clique ao botão de impressão
document.addEventListener('DOMContentLoaded', function() {
    const printButton = document.getElementById('print-button');
    if (printButton) {
        printButton.addEventListener('click', printPendenciasReport);
    }
    
    // Adiciona botões de salvar e carregar
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
        saveButton.addEventListener('click', saveFormData);
    }
    
    const loadButton = document.getElementById('load-button');
    if (loadButton) {
        loadButton.addEventListener('click', loadFormData);
    }
});
