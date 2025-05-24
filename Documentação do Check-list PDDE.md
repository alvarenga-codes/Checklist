# Documentação do Check-list PDDE

## Introdução

O Check-list PDDE é uma aplicação web para gerenciamento de checklists relacionados a processos educacionais do Programa Dinheiro Direto na Escola (PDDE). Esta documentação fornece instruções detalhadas sobre como utilizar a aplicação, com foco especial na funcionalidade de impressão de relatórios de pendências.

## Visão Geral da Aplicação

A aplicação permite:
- Selecionar programas e unidades escolares
- Preencher formulários com dados de processos
- Gerenciar múltiplas seções dinâmicas de checklist (Ofício, Ata de Prioridades, Plano de Ação, etc.)
- Marcar itens como "Aprovado" ou "Pendência" com campos adicionais para detalhamento
- Adicionar observações para cada seção
- Imprimir relatórios filtrados apenas com itens pendentes ou com observações

## Guia de Utilização

### 1. Preenchimento do Formulário

1. **Informações do Processo**:
   - Preencha o número do processo no formato correto (0000-00000000/0000-00)
   - Selecione o programa na lista suspensa
   - Informe o ano do processo (formato: AAAA)
   - Selecione a unidade escolar na lista suspensa

2. **Preenchimento dos Checklists**:
   - Para cada seção (Ofício, Ata de Prioridades, etc.), marque os itens como "Aprovado" ou "Pendência"
   - Quando marcar "Pendência", campos adicionais aparecerão para detalhar o problema
   - Preencha o campo de observações ao final de cada seção, se necessário

3. **Adição de Seções Dinâmicas**:
   - Clique nos botões "+ [Nome da Seção]" para adicionar novas instâncias de seções (ex.: "+ Ata de Prioridades")
   - Preencha o identificador da seção (ex.: número da conta, ação, etc.)
   - Para remover uma seção, clique no botão "Remover"

4. **Seções Não Aplicáveis**:
   - Marque a caixa "Não se aplicam" para ocultar seções que não são relevantes para o processo atual

## Impressão de Relatórios de Pendências

### Como Imprimir um Relatório

1. Preencha o formulário, marcando os itens como "Aprovado" ou "Pendência" conforme necessário
2. Adicione detalhes para os itens marcados como "Pendência"
3. Inclua observações nas seções relevantes
4. Clique no botão "Imprimir Relatório de Pendências" na parte inferior da página
5. Uma nova janela será aberta com o relatório formatado
6. Verifique se o relatório contém todas as informações necessárias
7. Utilize o diálogo de impressão do navegador para imprimir o documento (Ctrl+P ou Cmd+P)

### O Que é Incluído no Relatório

O relatório de pendências inclui apenas:
- Informações básicas do processo (número, programa, ano, unidade escolar)
- Seções que contêm pelo menos um item marcado como "Pendência" ou que possuem observações
- Detalhes específicos de cada pendência
- Observações adicionadas em cada seção
- Data e hora da geração do relatório

### Formatação do Relatório Impresso

O relatório é formatado automaticamente para impressão, com:
- Cabeçalho com título e informações do processo
- Seções organizadas com títulos claros
- Itens com pendências destacados com uma borda lateral colorida
- Observações em blocos com fundo levemente colorido
- Fonte e espaçamento otimizados para leitura em papel
- Data e hora da impressão no rodapé

### Personalização da Impressão

Para personalizar a aparência do relatório impresso:

1. **Ajustes no Navegador**:
   - No diálogo de impressão do navegador, você pode ajustar:
     - Orientação da página (retrato ou paisagem)
     - Tamanho do papel
     - Margens
     - Escala (para ajustar o conteúdo à página)
     - Opção de imprimir cabeçalhos e rodapés do navegador
     - Opção de imprimir cores e imagens de fundo

2. **Ajustes Avançados** (requer conhecimento técnico):
   - Para modificações mais profundas no estilo do relatório impresso, é possível editar a função `printPendenciasReport()` no arquivo `functionPrograms-refatorado.js`:
     - Alterar cores e estilos na variável `printStyles`
     - Modificar a estrutura HTML na variável `printContent`
     - Ajustar o formato de data e hora
     - Personalizar o cabeçalho e rodapé do relatório

## Dicas para Impressão Eficiente

1. **Preparação do Conteúdo**:
   - Preencha todos os campos relevantes antes de imprimir
   - Verifique se os detalhes das pendências estão claros e completos
   - Adicione observações específicas e objetivas

2. **Visualização Prévia**:
   - Sempre verifique a visualização do relatório antes de imprimir
   - Confirme se todas as pendências importantes estão incluídas
   - Verifique se o texto está legível e bem formatado

3. **Configurações de Impressão Recomendadas**:
   - Papel: A4
   - Orientação: Retrato
   - Margens: Normal ou Estreita
   - Escala: Ajustar à página
   - Cores: Ativadas (para melhor distinção visual)
   - Cabeçalhos e rodapés do navegador: Desativados

4. **Economia de Papel**:
   - O relatório já é otimizado para incluir apenas informações relevantes
   - Para economizar ainda mais papel, considere imprimir frente e verso
   - Ajuste a escala se necessário para reduzir o número de páginas

## Solução de Problemas

### Problemas Comuns de Impressão

1. **Conteúdo Cortado**:
   - Ajuste a escala no diálogo de impressão para "Ajustar à página"
   - Reduza as margens se possível
   - Considere usar orientação paisagem para conteúdo muito largo

2. **Formatação Incorreta**:
   - Certifique-se de que a opção "Imprimir cores e imagens de fundo" está ativada
   - Tente usar outro navegador (Chrome geralmente oferece melhor suporte à impressão)
   - Verifique se o zoom da página está em 100% antes de imprimir

3. **Pendências Ausentes no Relatório**:
   - Confirme se os itens foram corretamente marcados como "Pendência"
   - Verifique se as seções não estão marcadas como "Não se aplicam"
   - Certifique-se de que o formulário foi completamente carregado antes de imprimir

4. **Relatório em Branco**:
   - Verifique se há pelo menos uma pendência ou observação no formulário
   - Recarregue a página e tente novamente
   - Verifique se o JavaScript está habilitado no navegador

## Considerações Finais

O sistema de impressão foi projetado para facilitar a identificação e o acompanhamento de pendências nos processos do PDDE. Ao imprimir apenas os itens relevantes, economiza-se tempo, papel e torna-se mais eficiente o processo de revisão e correção.

Para qualquer dúvida adicional ou suporte técnico, entre em contato com a equipe responsável pelo sistema.
