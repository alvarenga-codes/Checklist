// Listagem de Programas
const programas = [
  { value: "pdde", label: "PDDE" },
  { value: "pdde-integral", label: "PDDE INTEGRAL" },
  { value: "pdde-estrutura", label: "PDDE EQUIDADE (ESTRUTURA)" },
  { value: "pdde-qualidade", label: "PDDE QUALIDADE" },
];

// Listagem das ações
const acoesConfig = [
  {
    id: "acoes-pdde",
    tipo: "auto",
    opcoes: [
      {
        value: "basico",
        label: "Básico",
        // checked: true
      },
    ],
  },
  {
    id: "acoes-pdde-integral",
    tipo: "auto",
    opcoes: [
      {
        value: "educacao-integral",
        label: "Educação Integral",
        // checked: true
      },
    ],
  },
  {
    id: "acoes-pdde-estrutura",
    tipo: "multipla",
    opcoes: [
      {
        value: "sala-de-recursos-multifuncionais",
        label: "Programa Sala de Recursos Multifuncionais",
      },
      { value: "escola-acessivel", label: "Programa Escola Acessível" },
      {
        value: "agua-e-esgotamento-sanitario",
        label: "Programa Água e Esgotamento Sanitário nas Escolas Rurais",
      },
      { value: "escolas-rurais", label: "Programa PDDE Escolas Rurais" },
    ],
  },
  {
    id: "acoes-pdde-qualidade",
    tipo: "multipla",
    opcoes: [
      { value: "emergencial", label: "PDDE Emergencial" },
      {
        value: "educacao-conectada",
        label: "Programa de Inovação Educação Conectada",
      },
      { value: "novo-ensino-medio", label: "Programa Novo Ensino Médio" },
      { value: "tempo-de-aprender", label: "Programa Tempo de Aprender" },
      { value: "educacao-e-familia", label: "Programa Educação e Família" },
      { value: "cantinho-leitura", label: "Programa Cantinho da Leitura" },
      {
        value: "itinerarios-formativos",
        label: "Programa Itinerários Formativos",
      },
      { value: "ensino-medio-mais", label: "Programa Ensino Médio Mais" },
      { value: "brasil-nas-escolas", label: "Programa Brasil na Escola" },
      {
        value: "primeira-infancia",
        label: "Programa Primeira Infância na Escola",
      },
      {
        value: "escola-adolescencia",
        label: "Programa Escola das Adolescências",
      },
      { value: "escola-comunidade", label: "Programa Escola e Comunidade" },
      { value: "mais-alfabetização", label: "Programa Mais Alfabetização" },
    ],
  },
];

// Dados das unidades escolares
const escolas = [
  { value: "cei-01", nome: "CEI 01 DE SOBRADINHO" },
  { value: "cei-02", nome: "CEI 02 DE SOBRADINHO" },
  { value: "cei-03", nome: "CEI 03 DE SOBRADINHO" },
  { value: "cei-04", nome: "CEI 04 DE SOBRADINHO" },
  { value: "ec-01", nome: "EC 01 DE SOBRADINHO" },
  { value: "ec-04", nome: "EC 04 DE SOBRADINHO" },
  { value: "ec-05", nome: "EC 05 DE SOBRADINHO" },
  { value: "ec-10", nome: "EC 10 DE SOBRADINHO" },
  { value: "ec-11", nome: "EC 11 DE SOBRADINHO" },
  { value: "ec-12", nome: "EC 12 DE SOBRADINHO" },
  { value: "ec-13", nome: "EC 13 DE SOBRADINHO" },
  { value: "ec-14", nome: "EC 14 DE SOBRADINHO" },
  { value: "ec-15", nome: "EC 15 DE SOBRADINHO" },
  { value: "ec-16", nome: "EC 16 DE SOBRADINHO" },
  { value: "ec-17", nome: "EC 17 DE SOBRADINHO" },
  { value: "cef-01", nome: "CEF 01 DE SOBRADINHO" },
  { value: "cef-03", nome: "CEF 03 DE SOBRADINHO" },
  { value: "cef-04", nome: "CEF 04 DE SOBRADINHO" },
  { value: "cef-05", nome: "CEF 05 DE SOBRADINHO" },
  { value: "cef-07", nome: "CEF 07 DE SOBRADINHO" },
  { value: "cef-08", nome: "CEF 08 DE SOBRADINHO" },
  { value: "cef-09", nome: "CEF 09 DE SOBRADINHO" },
  { value: "cef-queima-lençol", nome: "CEF QUEIMA LENÇOL" },
  { value: "cee-01", nome: "CEE 01 DE SOBRADINHO" },
  { value: "cem-01", nome: "CEM 01 DE SOBRADINHO" },
  { value: "cem-02", nome: "CEM 02 DE SOBRADINHO" },
  { value: "ced-03", nome: "CED 03 DE SOBRADINHO" },
  { value: "cem-04", nome: "CEM 04 DE SOBRADINHO" },
  { value: "ced-fercal", nome: "CED FERCAL" },
  { value: "ced-carlos-mota", nome: "CED PROF CARLOS MOTA" },
  {
    value: "caic-julia-kubitschek-de-oliveira",
    nome: "CAIC JULIA KUBITSCHEK DE OLIVEIRA",
  },
  { value: "ec-basevi", nome: "EC BASEVI" },
  { value: "ec-boa-vista", nome: "EC BOA VISTA" },
  { value: "ec-catingueiro", nome: "EC CATINGUEIRO" },
  { value: "ec-brochado-da-rocha", nome: "EC BROCHADO DA ROCHA" },
  { value: "ec-santa-helena", nome: "EC SANTA HELENA" },
  { value: "ec-corrego-do-arrozal", nome: "EC CÓRREGO DO ARROZAL" },
  { value: "ec-corrego-do-ouro", nome: "EC CÓRREGO DO OURO" },
  { value: "ec-morro-do-sansao", nome: "EC MORRO DO SANSÃO" },
  { value: "ec-olhos-dagua", nome: "EC OLHOS D'ÁGUA" },
  { value: "ec-ribeirao", nome: "EC RIBEIRÃO" },
  { value: "ec-rua-do-mato", nome: "EC RUA DO MATO" },
  { value: "ec-engenho-velho", nome: "EC ENGENHO VELHO" },
  { value: "ec-lobeiral", nome: "EC LOBEIRAL" },
  { value: "ec-sitio-das-araucarias", nome: "EC SÍTIO DAS ARAUCÁRIAS" },
  { value: "ec-sonhem-de-cima", nome: "EC SONHÉM DE CIMA" },
];

//ARRAY
//Array de ofício
const oficioData = [
  {
    item: "Arquivo presente",
    name: "oficio-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Arquivo assinado via SEI",
    name: "oficio-assinado",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Dados da unidade escolar",
    name: "oficio-dados-escola",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Dados",
    detailsName: "oficio-dados-escola-detalhes",
    dataTarget: "of-escola-detalhes",
    detailsPlaceholder: "Especifique o detalhe",
  },
  {
    item: "Texto",
    name: "oficio-texto",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Texto",
    detailsName: "oficio-texto-detalhes",
    dataTarget: "of-texto-detalhes",
    detailsPlaceholder: "Especifique o detalhe",
  },
  {
    item: "Assinatura da autoridade competente",
    name: "oficio-assinatura-autoridade",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
];

//Array da Ata de Prioridades
const ataPrioridadesData = [
  //Cabeçalho
  {
    header: true,
    //Adicionar div com essa class
    divClass: "form-group box-type box-remove",
    //Adicionar label (aninhado a div) com nome abaixo
    labelIdentifier: "Ação",
    //Adicionar input (aninhado a div)
    headerType: "text",
    headerName: "ata-prioridades-acao",
    headerPlaceholder: "Ação",
    //Adicionar button de exclusão "Remover"
    removeClass: "remove-ata-prioridades",
  },
  //Linhas
  {
    item: "Arquivo presente",
    name: "ata-de-prioridades-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Data anterior a 1ª compra",
    name: "ata-de-prioridades-data-anterior-prim-compra",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Saldo reprogramado",
    name: "ata-de-prioridades-saldo-reprogramado",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Repasse FNDE",
    name: "ata-de-prioridades-repasse-fnde",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Custeio: itens contemplam as compras",
    name: "ata-de-prioridades-custeio-itens",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Compra/item",
    detailsName: "ata-de-prioridades-custeio-detalhes",
    dataTarget: "ap-custeio-detalhes",
    detailsPlaceholder: "Especifique a compra não contemplada na Ata",
  },
  {
    item: "Capital: itens contemplam as compras",
    name: "ata-de-prioridades-capital-itens",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Compra/item",
    detailsName: "ata-de-prioridades-capital-detalhes",
    dataTarget: "ap-capital-detalhes",
    detailsPlaceholder: "Especifique a compra não contemplada na Ata",
  },
  {
    item: "Membros eleitos",
    name: "ata-de-prioridades-membros-eleitos",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Nome(s)",
    detailsName: "ata-de-prioridades-membros-nao-eleitos",
    dataTarget: "ap-membros-nao-eleitos",
    detailsPlaceholder: "Especifique o nome do membro não eleito",
  },
  {
    item: "Assinatura dos membros",
    name: "ata-de-prioridades-assinatura-membros",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Nome(s)",
    detailsName: "ata-de-prioridades-assinatura-membros",
    dataTarget: "ap-assinatura-membros",
    detailsPlaceholder: "Nome(s) do(s) membro(s) de assinatura incompatível",
  },
];

//Array do Plano de Ação
const planoAcaoData = [
  //Cabeçalho
  {
    header: true,
    //Adicionar div com essa identificação
    divClass: "form-group box-type box-remove",
    //Adicionar label (aninhado a div) com nome abaixo
    labelIdentifier: "Ação",
    //Adicionar input (aninhado a div)
    headerType: "text",
    headerName: "ata-plano-acao",
    headerPlaceholder: "Ação",
    //Adicionar button de exclusão "Remover" (aninhado a div)
    removeClass: "remove-plano-acao",
  },
  //Linhas
  {
    item: "Arquivo presente",
    name: "plano-de-acao-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Ação adequada",
    name: "plano-de-acao-acao",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Detalhamento dos itens",
    name: "plano-de-acao-detalhamento-itens",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
];

//Array Conta Corrente
const contaCCorrenteData = [
  //Cabeçalho
  {
    header: true,
    //Adicionar div com essa identificação
    divClass: "form-group box-type box-remove",
    //Adicionar label (aninhado a div) com nome abaixo
    labelIdentifier: "Conta nº",
    //Adicionar input (aninhado a div)
    headerType: "text",
    headerName: "cc-numero",
    headerPlaceholder: "Número da conta",
    //Adicionar button de exclusão "Remover" (aninhado a div)
    removeClass: "remove-c-corrente",
  },
  //Linhas
  {
    item: "Arquivo presente",
    name: "extrato-corrente-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Todos os meses presentes",
    name: "corrente-mensal-presente",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    detailsLabel: "cc-mensal-ausente",
    detailsName: "corrente-mensal-ausente",
    classDetails: "checkbox-group hidden bloco-checkbox",
    detailsOptions: [
      { value: "janeiro", label: "Jan" },
      { value: "fevereiro", label: "Fev" },
      { value: "março", label: "Mar" },
      { value: "abril", label: "Abr" },
      { value: "maio", label: "Mai" },
      { value: "junho", label: "Jun" },
      { value: "julho", label: "Jul" },
      { value: "agosto", label: "Ago" },
      { value: "setembro", label: "Set" },
      { value: "outubro", label: "Out" },
      { value: "novembro", label: "Nov" },
      { value: "dezembro", label: "Dez" },
    ],
    dataTarget: "cc-mes-ausente",
  },
  {
    item: "Mês: atualizado até último dia útil",
    name: "extrato-corrente-mes-completo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    detailsLabel: "Meses incompletos",
    detailsName: "corrente-mes-incompleto",
    classDetails: "checkbox-group hidden bloco-checkbox",
    detailsOptions: [
      { value: "janeiro", label: "Jan" },
      { value: "fevereiro", label: "Fev" },
      { value: "março", label: "Mar" },
      { value: "abril", label: "Abr" },
      { value: "maio", label: "Mai" },
      { value: "junho", label: "Jun" },
      { value: "julho", label: "Jul" },
      { value: "agosto", label: "Ago" },
      { value: "setembro", label: "Set" },
      { value: "outubro", label: "Out" },
      { value: "novembro", label: "Nov" },
      { value: "dezembro", label: "Dez" },
    ],
    dataTarget: "cc-mes-incompleto",
  },
  {
    item: "Valores recebidos aplicados no prazo",
    name: "extrato-corrente-valor-aplicado",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    classDetails: "hidden text-pendencia",
    detailsType: "textarea",
    detailsRow: "2",
    detailsCols: "18",
    detailsLabel: "",
    detailsName: "valores-nao-aplicados",
    detailsPlaceholder: "Valor (R$) , data",
    dataTarget: "cc-nao-aplicado", // ID do container dos campos
  },
  {
    item: "Despesas com documentação comprobatória",
    name: "extrato-corrente-despesa-comprovacao",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    classDetails: "hidden text-pendencia",
    detailsType: "textarea",
    detailsRow: "2",
    detailsCols: "18",
    detailsLabel: "",
    detailsName: "despesas-sem-comprovacao",
    detailsPlaceholder: "Valor (R$) , data",
    dataTarget: "cc-sem-comprovacao", // ID do container dos campos
  },
  {
    item: "Despesas autorizadas, conforme Resolução FNDE",
    name: "extrato-corrente-despesas-autorizadas",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    classDetails: "hidden text-pendencia",
    detailsType: "textarea",
    detailsRow: "2",
    detailsCols: "18",
    detailsLabel: "",
    detailsName: "despesas-nao-autorizadas",
    detailsPlaceholder: "Valor (R$) , data",
    dataTarget: "cc-nao-autorizada", // ID do container dos campos
  },
];

//Array Conta Investimento
const contaCInvestimentoData = [
  //Cabeçalho
  {
    header: true,
    //Adicionar div com essa identificação
    divClass: "form-group box-type box-remove",
    //Adicionar label (aninhado a div) com nome abaixo
    labelIdentifier: "Fundo",
    //Adicionar input (aninhado a div)
    headerType: "text",
    headerName: "ci-numero",
    headerPlaceholder: "nº da conta e Fundo",
    //Adicionar button de exclusão "Remover" (aninhado a div)
    removeClass: "remove-c-investimento",
  },
  //Linhas
  {
    item: "Arquivo presente",
    name: "extrato-investimento-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Todos os meses presentes",
    name: "investimento-mensal-presente",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    detailsLabel: "ci-mensal-ausente",
    detailsName: "investimento-mensal-ausente",
    classDetails: "checkbox-group hidden bloco-checkbox",
    detailsOptions: [
      { value: "janeiro", label: "Jan" },
      { value: "fevereiro", label: "Fev" },
      { value: "março", label: "Mar" },
      { value: "abril", label: "Abr" },
      { value: "maio", label: "Mai" },
      { value: "junho", label: "Jun" },
      { value: "julho", label: "Jul" },
      { value: "agosto", label: "Ago" },
      { value: "setembro", label: "Set" },
      { value: "outubro", label: "Out" },
      { value: "novembro", label: "Nov" },
      { value: "dezembro", label: "Dez" },
    ],
    dataTarget: "ci-mes-ausente",
  },
  {
    item: "Mês: atualizado até último dia útil",
    name: "extrato-investimento-mes-completo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    detailsLabel: "Meses incompletos",
    detailsName: "investimento-mes-incompleto",
    classDetails: "checkbox-group hidden bloco-checkbox",
    detailsOptions: [
      { value: "janeiro", label: "Jan" },
      { value: "fevereiro", label: "Fev" },
      { value: "março", label: "Mar" },
      { value: "abril", label: "Abr" },
      { value: "maio", label: "Mai" },
      { value: "junho", label: "Jun" },
      { value: "julho", label: "Jul" },
      { value: "agosto", label: "Ago" },
      { value: "setembro", label: "Set" },
      { value: "outubro", label: "Out" },
      { value: "novembro", label: "Nov" },
      { value: "dezembro", label: "Dez" },
    ],
    dataTarget: "ci-mes-incompleto",
  },
];

//Array devolução conta escola
const devolucaoEscolaData = [
  //Cabeçalho
  {
    header: true,
    //Adicionar div com essa identificação
    divClass: "form-group box-type box-remove",
    //Adicionar label (aninhado a div) com nome abaixo
    labelIdentifier: "Conta nº",
    //Adicionar input (aninhado a div)
    headerType: "text",
    headerName: "devol-escola-numero",
    headerPlaceholder: "Número da conta",
    //Adicionar button de exclusão "Remover" (aninhado a div)
    removeClass: "remove-devolucao-escola",
  },
  //Linhas
  {
    item: "Arquivo presente",
    name: "devolucao-conta-escola-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Comprovante de depósito",
    name: "devolucao-conta-escola-comprovante",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Cálculos de correção monetária",
    name: "devolucao-conta-escola-correcao",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Justificativa",
    name: "devolucao-conta-escola-justificativa",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
];

//Array devolução valores FNDE
const devolucaoFNDEData = [
  {
    item: "Arquivo presente",
    name: "devolucao-fnde-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Comprovante de depósito",
    name: "devolucao-fnde-comprovante",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "GRU (FNDE)",
    name: "devolucao-fnde-gru",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
];

//Array Documentos de compra
//Informações Gerais
const docsCompraData = [
  //Cabeçalho
  {
    header: true,
    //Adicionar div com essa identificação
    divClass: "form-group box-type box-remove",
    //Adicionar label (aninhado a div) com nome abaixo
    labelIdentifier: "Compra nº",
    //Adicionar input (aninhado a div)
    headerType: "number",
    headerName: "compra-identif",
    headerMin: "1",
    headerPlaceholder: "nº",
    //Adicionar button de exclusão "Remover" (aninhado a div)
    removeClass: "remove-docs-compras",
  },
  //Linhas
  {
    item: "Docs de compra (NF, orçamentos, comprovantes...)",
    name: "comprovante-compra-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
];

//Array Nota fiscal
const notaFiscalData = [
  {
    item: "Arquivo presente",
    name: "nota-fiscal-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Digitalização completa",
    name: "nota-fiscal-digitalizacao",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Razão social e CNPJ da UEx",
    name: "nota-fiscal-razao-social-cnpj",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Carimbo de recebido",
    name: "nota-fiscal-carimbo-recebido",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    detailsLabel: "Ocorrência",
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "carimbo-recebido",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      { value: "carimbo-ausente", label: "Carimbo ausente/não preenchido" },
      { value: "data-incorreta", label: "Data incorreta/ausente" },
      { value: "assinatura-difere", label: "Assinatura ausente" },
    ],
    dataTarget: "nf-recebido",
  },
  {
    item: "Carimbo de identificação do programa",
    name: "nota-fiscal-identificacao-programa",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    detailsLabel: "Ocorrência",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "nota-fiscal-identificacao-programa-incorreto",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      { value: "carimbo-ausente", label: "Carimbo ausente/não preenchido" },
      { value: "programa-incorreto", label: "Programa incorreto/incompleto" },
    ],
    dataTarget: "nf-programa-incorreto",
  },
  {
    item: "Carimbo de atesto",
    name: "nota-fiscal-atesto",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "carimbo-atesto",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      {
        value: "ausente-ou-nao-preenchido",
        label: "Carimbo ausente/não preenchido",
      },
      { value: "data-incorreta", label: "Data incorreta/ausente" },
      {
        value: "problema-matricula-assinatura",
        label: "Problema na matricula/assinatura",
      },
        {
    item: "Comprovante de pagamento",
    name: "comprovante-pagamento",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
    ],
    dataTarget: "nf-atesto",
  },
];

//Array Orçamento 1
const orcamentoUmData = [
  {
    item: "Arquivo presente",
    name: "orcamento-um-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Dados da empresa",
    name: "orcamento-um-dados-empresa",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Ajuste",
    detailsName: "orcamento-um-dados-empresa-incorretos",
    dataTarget: "o-um-empresa",
    detailsPlaceholder: "Informe os dados incorretos",
  },
  {
    item: "Data anterior/igual à NF",
    name: "orcamento-um-validade-data",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Itens em conformidade com a NF",
    name: "orcamento-um-itens-conformidade-nf",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Validade da proposta",
    name: "orcamento-um-validade-proposta",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "orcamento-um-validade",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      { value: "validade-ausente", label: "Validade ausente" },
      { value: "validade-vencida", label: "Validade vencida" },
    ],
    dataTarget: "o-um-validade",
  },
  {
    item: "Forma de pagamento",
    name: "orcamento-um-forma-pagamento",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Prazo de entrega",
    name: "orcamento-um-prazo-entrega",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Nome do Vendedor",
    name: "orcamento-um-vendedor",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
];

//Array Orçamento 2
const orcamentoDoisData = [
  {
    item: "Arquivo presente",
    name: "orcamento-dois-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Dados da empresa",
    name: "orcamento-dois-dados-empresa",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Ajuste",
    detailsName: "orcamento-dois-dados-empresa-incorretos",
    dataTarget: "o-dois-empresa",
    detailsPlaceholder: "Informe os dados incorretos",
  },
  {
    item: "Data anterior/igual à NF",
    name: "orcamento-dois-validade-data",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Itens em conformidade com a NF",
    name: "orcamento-dois-itens-conformidade-nf",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Validade da proposta",
    name: "orcamento-dois-validade-proposta",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "orcamento-dois-validade",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      { value: "validade-ausente", label: "Validade ausente" },
      { value: "validade-vencida", label: "Validade vencida" },
    ],
    dataTarget: "o-dois-validade",
  },
  {
    item: "Forma de pagamento",
    name: "orcamento-dois-forma-pagamento",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Prazo de entrega",
    name: "orcamento-dois-prazo-entrega",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Nome do Vendedor",
    name: "orcamento-dois-vendedor",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
];

//Array Orçamento 3
const orcamentoTresData = [
  {
    item: "Arquivo presente",
    name: "orcamento-tres-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Dados da empresa",
    name: "orcamento-tres-dados-empresa",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Ajuste",
    detailsName: "orcamento-tres-dados-empresa-incorretos",
    dataTarget: "o-tres-empresa",
    detailsPlaceholder: "Informe os dados incorretos",
  },
  {
    item: "Data anterior/igual à NF",
    name: "orcamento-tres-validade-data",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Itens em conformidade com a NF",
    name: "orcamento-tres-itens-conformidade-nf",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Validade da proposta",
    name: "orcamento-tres-validade-proposta",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "orcamento-tres-validade",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      { value: "validade-ausente", label: "Validade ausente" },
      { value: "validade-vencida", label: "Validade vencida" },
    ],
    dataTarget: "o-tres-validade",
  },
  {
    item: "Forma de pagamento",
    name: "orcamento-tres-forma-pagamento",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Prazo de entrega",
    name: "orcamento-tres-prazo-entrega",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Nome do Vendedor",
    name: "orcamento-tres-vendedor",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
];

//Array Contrato de Prestação de Serviço
const contratoServicoData = [
  {
    item: "Arquivo presente",
    name: "contrato-servico-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Itens, conforme NF",
    name: "contrato-servico-itens",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Datado antes/igual da NF e depois/igual dos orçamentos",
    name: "contrato-servico-data",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "contrato-servico-data-verificacao",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      { value: "posterior-nf", label: "Datado posterior à NF" },
      {
        value: "anterior-orcamento",
        label: "Contrato anterior a algum orçamento",
      },
    ],
    dataTarget: "cs-post-nf",
  },
  {
    item: "Assinatura das partes",
    name: "contrato-servico-assinaturas",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
];

//Array Processo de Incorporação de Bens
const incorporacaoBensData = [
  {
    item: "Processo relacionado",
    name: "p-incorporacao-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
];

//Array de parecer do conselho fiscal
const parecerCFData = [
  {
    item: "Arquivo presente",
    name: "parecer-conselho-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Identificação do programa",
    name: "parecer-conselho-fiscal-programa",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Reprogramação (parcial ou total)",
    name: "parecer-conselho-fiscal-reprogramacao",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Data posterior a última compra",
    name: "parecer-conselho-fiscal-posterior-ultima-compra",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Conselho fiscal: mínimo 03 conselheiros",
    name: "parecer-conselho-fiscal-conselheiros-minimo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Conselho fiscal: eleitos na ata",
    name: "parecer-conselho-fiscal-conselheiros-eleitos",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Nome(s)",
    detailsName: "parecer-conselho-fiscal-conselheiros-nao-eleitos",
    dataTarget: "pc-conselheiro-nao-eleito",
    detailsPlaceholder: "Nome do membro não eleito",
  },
  {
    item: "Conselho fiscal: assinaturas",
    name: "parecer-conselho-fiscal-conselheiros-assinatura",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Nome(s)",
    detailsName: "parecer-conselho-fiscal-conselheiros-assinatura-difere",
    dataTarget: "pc-assinatura",
    detailsPlaceholder: "Nome do membro que assinatura difere",
  },
  {
    item: "Referendo: membros eleitos",
    name: "parecer-conselho-fiscal-referendo-eleitos",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Nome(s)",
    detailsName: "parecer-conselho-fiscal-referendo-nao-eleitos",
    dataTarget: "pc-referendo-nao-eleito",
    detailsPlaceholder: "Nome do membro não eleito",
  },
  {
    item: "Referendo: assinaturas",
    name: "parecer-conselho-fiscal-referendo-assinaturas",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Nome(s)",
    detailsName: "parecer-conselho-fiscal-referendo-assinatura-difere",
    dataTarget: "pc-referendo-assinatura",
    detailsPlaceholder: "Nome do membro que assinatura difere",
  },
];

//Array do consulta escola REX
const rexData = [
  {
    item: "Arquivo presente",
    name: "consulta-escola-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Ano adequado",
    name: "consulta-escola-ano",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
];

//Array de parecer do conselho escolar
const aprovacaoPCAData = [
  {
    item: "Arquivo presente",
    name: "ata-aprovacao-pca-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Data igual/posterior ao Parecer do Conselho Fiscal",
    name: "ata-aprovacao-pca-data",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Texto",
    name: "ata-aprovacao-pca-texto",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: true,
    classDetails: "text-group hidden",
    detailsType: "text",
    detailsLabel: "Correção",
    detailsName: "ata-aprovacao-pca-erro-texto",
    dataTarget: "aprov-pca-erro-texto",
    detailsPlaceholder: "Especifique o texto que precisa ser corrigido",
  },
  {
    item: "Contagem de votos",
    name: "ata-aprovacao-pca-contagem",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Lista de presentes: representatividade",
    name: "ata-aprovacao-pca-representatividade",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Lista de presente: ausência de assinatura de membros",
    name: "ata-aprovacao-pca-lista-ausencia-membros",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
];

//Array das atas de conferências
//Ata da UEx
const constituicaoUExData = [
  {
    item: "Arquivo presente",
    name: "ata-caixa-escolar-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Mandato contempla execução",
    name: "ata-caixa-escolar-mandato",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Registro em cartório",
    name: "ata-caixa-escolar-registro-cartorio",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
];

//Termo de investidura do Conselho Escolar
const termoConselhoEscolarData = [
  {
    item: "Arquivo presente",
    name: "conselho-escolar-investidura-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Mandato contempla execução",
    name: "conselho-escolar-investidura-mandato",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
];

//Escolha dos membros do Conselho Escolar
const ataEscolhaConselhoEscolarData = [
  {
    item: "Arquivo presente",
    name: "conselho-escolar-escolha-membros-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
  {
    item: "Mandato contempla execução",
    name: "conselho-escolar-mandato",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    hasDetails: false,
  },
];

//Array Quadro Demonstrativo
//Informações Gerais
const quadroDemonstrativoData = [
  //Cabeçalho
  {
    header: true,
    //Adicionar div com essa class
    divClass: "form-group box-type box-remove",
    //Adicionar label (aninhado a div) com nome abaixo
    labelIdentifier: "Ação",
    //Adicionar input (aninhado a div)
    headerType: "text",
    headerName: "qd-acao",
    headerPlaceholder: "Informe a ação",
    //Adicionar button de exclusão "Remover"
    removeClass: "remove-quadro-demonstrativo",
  },
  //Linhas
  {
    item: "Arquivo presente",
    name: "quadro-demonstrativo-arquivo",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
];

//Array Bloco 01
const qdBlocoUmData = [
  {
    item: "Campos preenchidos adequadamente",
    name: "quadro-demonstrativo-bloco-um-preenchimento",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "quadro-demonstrativo-bloco-um-incorreto",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      { value: "programa-acao", label: "Programa/ação inadequado" },
      { value: "exercicio", label: "Exercício inadequado" },
      { value: "nome", label: "Nome inadequado" },
      { value: "cnpj", label: "CNPJ inadequado" },
    ],
    dataTarget: "qd-b-um",
  },
];

//Array Bloco 02
const qdBlocoDoisData = [
  {
    item: "Saldo reprogramado",
    name: "quadro-demonstrativo-bloco-dois-saldo-reprogramado",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "quadro-demonstrativo-bloco-dois-reprogramado-incorreto",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      { value: "total", label: "Valor total" },
      { value: "categoria-economica", label: "Custeio/capital" },
    ],
    dataTarget: "qd-b-dois-reprogramado",
  },
  {
    item: "Valor repasse - FNDE",
    name: "quadro-demonstrativo-bloco-dois-repasse-fnde",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "quadro-demonstrativo-bloco-dois-repasse-incorreto",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      { value: "total", label: "Valor total" },
      { value: "categoria-economica", label: "Custeio/capital" },
    ],
    dataTarget: "qd-b-dois-repasse",
  },
  {
    item: "Recursos próprios",
    name: "quadro-demonstrativo-bloco-dois-recursos-proprios",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "quadro-demonstrativo-bloco-dois-recursos-proprios-incorreto",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      { value: "total", label: "Valor total" },
      { value: "categoria-economica", label: "Custeio/capital" },
    ],
    dataTarget: "qd-b-dois-rec-proprios",
  },
  {
    item: "Rendimentos de aplicação financeira",
    name: "quadro-demonstrativo-bloco-dois-rendimentos",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Devolução de Recursos ao FNDE",
    name: "quadro-demonstrativo-bloco-dois-devolucao-fnde",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: false,
  },
  {
    item: "Valor total da receita",
    name: "quadro-demonstrativo-bloco-dois-total-receita",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "quadro-demonstrativo-bloco-dois-total-receita-incorreto",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      { value: "total", label: "Valor total" },
      { value: "categoria-economica", label: "Custeio/capital" },
    ],
    dataTarget: "qd-b-dois-total-receita",
  },
  {
    item: "Valor da despesa realizada",
    name: "quadro-demonstrativo-bloco-dois-valor-total-despesa",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName: "quadro-demonstrativo-bloco-dois-valor-despesa-incorreto",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      { value: "total", label: "Valor total" },
      { value: "categoria-economica", label: "Custeio/capital" },
    ],
    dataTarget: "qd-b-dois-despesa-total",
  },
  {
    item: "Saldo a reprogramar para o execício seguinte",
    name: "quadro-demonstrativo-bloco-dois-saldo-a-reprogramar",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    detailsType: "checkbox",
    //div com a classe abaixo
    classDetails: "checkbox-group hidden checkbox-line",
    detailsName:
      "quadro-demonstrativo-bloco-dois-saldo-a-reprogramar-incorreto",
    //tem que criar um span antes de cada label <span></span>
    detailsOptions: [
      {
        value: "total",
        label: "Valor total diferente do último dia útil de dezembro",
      },
      { value: "categoria-economica", label: "Custeio/capital inadequados" },
      {
        value: "remanejamento-entre-categorias",
        label: "Remanejamento entre categorias (custeio/capital)",
      },
      {
        value: "remanejamento-entre-acoes",
        label: "Remanejamento entre ações",
      },
    ],
    dataTarget: "qd-b-dois-a-reprogramar",
  },
];

//Array Bloco 03
const qdBlocoTresData = [
  {
    item: "Pagamentos efetuados",
    name: "quadro-demonstrativo-bloco-tres-pagamentos-efetuados",
    valueAprovado: "correto",
    valuePendencia: "incorreto",
    type: "radio",
    class: "checklist-item",
    hasDetails: true,
    classDetails: "hidden text-pendencia",
    detailsType: "textarea",
    detailsRow: "2",
    detailsCols: "18",
    detailsLabel: "",
    detailsName: "quadro-demonstrativo-itens",
    dataTarget: "qd-b-tres-itens",
    detailsPlaceholder: "Item , campo",
  },
];

//Seções dos documentos de compra
const sectionsCompras = [
  {
    data: notaFiscalData,
    fieldset: "nf-section",
    tableBodyId: "nf-table-body",
    dynamicContainerId: "nf-container",
    id: "nota-fiscal",
  },
  {
    data: orcamentoUmData,
    fieldset: "o-um-section",
    tableBodyId: "o-um-table-body",
    dynamicContainerId: "o-um-container",
    id: "orcamento-um",
  },
  {
    data: orcamentoDoisData,
    fieldset: "o-dois-section",
    tableBodyId: "o-dois-table-body",
    dynamicContainerId: "o-dois-container",
    id: "orcamento-dois",
  },
  {
    data: orcamentoTresData,
    fieldset: "o-tres-section",
    tableBodyId: "o-tres-table-body",
    dynamicContainerId: "o-tres-container",
    id: "orcamento-tres",
  },
  {
    data: contratoServicoData,
    fieldset: "ct-servico-section",
    tableBodyId: "ct-servico-table-body",
    dynamicContainerId: "ct-servico-container",
    id: "contrato-servico",
  },
  {
    data: incorporacaoBensData,
    fieldset: "proc-incorp-section",
    tableBodyId: "proc-incorp-table-body",
    dynamicContainerId: "proc-incorp-container",
    id: "incorporacao-bens",
  },
];
//Seções do Quadro Demonstrativo
const sectionsQD = [
  {
    data: qdBlocoUmData,
    fieldset: "bloco-01-section",
    tableBodyId: "bloco-01-table-body",
    dynamicContainerId: "bloco-01-container",
    id: "bloco-01",
  },
  {
    data: qdBlocoDoisData,
    fieldset: "bloco-02-section",
    tableBodyId: "bloco-02-table-body",
    dynamicContainerId: "bloco-02-container",
    id: "bloco-02",
  },
  {
    data: qdBlocoTresData,
    fieldset: "bloco-03-section",
    tableBodyId: "bloco-03-table-body",
    dynamicContainerId: "bloco-03-container",
    id: "bloco-03",
  },
];
