//FUNÇÕES DE RENDERIZAÇÃO
// 1. Função principal para carregar as opções
function carregarEscolas() {
  // 1.1 Encontra o elemento select no DOM
  const campoEscolas = document.getElementById("unidade-escolar");

  // 1.2 Percorre cada escola do array
  escolas.forEach((escola) => {
    // 1.3 Cria um novo elemento <option>
    const opcao = document.createElement("option");

    // 1.4 Define os atributos da opção
    opcao.value = escola.value; // Valor que será enviado pelo formulário
    opcao.textContent = escola.nome; // Texto visível ao usuário

    // 1.5 Adiciona a opção ao select
    campoEscolas.appendChild(opcao);
  });
}

//2. RENDERIZAÇÃO DE PROGRAMAS
function carregarProgramas() {
  const select = document.getElementById("programa");
  // 2.1 Percorre cada programa do array
  programas.forEach((programa) => {
    const option = document.createElement("option");
    option.value = programa.value;
    option.textContent = programa.label;
    select.appendChild(option);
  });
}

//RENDERIZAÇÃO DE AÇÕES CONFORME O PROGRAMA
// 3. Renderização das ações
function renderizarAcoes() {
  const container = document.querySelector(".form-group-acoes");
  // 3.1 Percorre cada grupo dos programas
  acoesConfig.forEach((grupo) => {
    const grupoDiv = document.createElement("div");
    grupoDiv.className = `hidden form-group-item ${grupo.tipo}`;
    grupoDiv.id = grupo.id;

    grupo.opcoes.forEach((opcao) => {
      const label = document.createElement("label");
      if (opcao.title) label.title = opcao.title;

      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = "acoes[]";
      input.value = opcao.value;
      if (opcao.disabled) input.disabled = true;
      if (opcao.checked) input.checked = true;

      const span = document.createElement("span");

      label.append(input, span, ` ${opcao.label}`);
      grupoDiv.appendChild(label);
    });

    container.appendChild(grupoDiv);
  });
}

// 3.2 Controle da visibilidade dos itens
document
  .getElementById("programa")
  .addEventListener("change", function (event) {
    const selectedProgram = event.target.value;

    //3.2.1 Ocultar todos os grupos de ações
    document.querySelectorAll(".form-group-item").forEach((item) => {
      item.classList.add("hidden");
    });

    // 3.2.2 Mostrar o grupo de ações correspondente ao programa selecionado
    if (selectedProgram) {
      const actionsGroup = document.getElementById(`acoes-${selectedProgram}`);
      if (actionsGroup) {
        actionsGroup.classList.remove("hidden");
      }
    }
  });

//RENDERIZANDO TEMPLATES
// Contador para gerar IDs dinâmicos
let templateCounter = 0;

// Renderizando cada linha
function renderRow(data, prefix) {
  const template = document.getElementById("row-template").content;
  const row = template.cloneNode(true);
  const cells = row.querySelectorAll(".checklist-cell");

  // Preenche o item
  cells[0].textContent = data.item;

  // Configura os radios de aprovação
  const aprovadoRadio = cells[1].querySelector("input");
  aprovadoRadio.type = data.type;
  aprovadoRadio.name = `${prefix}-${data.name}`;
  aprovadoRadio.value = data.valueAprovado;
  aprovadoRadio.id = `${prefix}-${data.name}-aprovado`;
  // Verifica se data.dataTarget existe antes de adicionar o atributo data-target
  if (data.dataTarget) {
    aprovadoRadio.setAttribute("data-target", `#${prefix}-${data.dataTarget}`);
  }

  cells[1]
    .querySelector("label")
    .setAttribute("for", `${prefix}-${data.name}-aprovado`);

  // Configura os radios de pendência
  const pendenciaRadio = cells[2].querySelector("input");
  pendenciaRadio.type = data.type;
  pendenciaRadio.name = `${prefix}-${data.name}`;
  pendenciaRadio.value = data.valuePendencia;
  pendenciaRadio.id = `${prefix}-${data.name}-pendencia`;
  if (data.dataTarget) {
    pendenciaRadio.setAttribute("data-target", `#${prefix}-${data.dataTarget}`); // Adiciona data-target
  }
  cells[2]
    .querySelector("label")
    .setAttribute("for", `${prefix}-${data.name}-pendencia`);

  // Adiciona detalhes se necessário
  if (data.hasDetails) {
    const detailsId = `${prefix}-${data.dataTarget}`;
    const detailsDiv = document.createElement("div");
    detailsDiv.id = detailsId;
    detailsDiv.className = `${data.classDetails}`;

    // Verifica o tipo de detalhe e renderiza conforme necessário
    switch (data.detailsType) {
      case "text":
        detailsDiv.innerHTML = `
                    <label for="${prefix}-${data.detailsName}">${data.detailsLabel}</label>
                    <input type="${data.detailsType}" id="${prefix}-${data.detailsName}" name="${prefix}-${data.detailsName}" placeholder="${data.detailsPlaceholder}">
                `;
        break;

      case "checkbox":
        detailsDiv.innerHTML = `
                    ${data.detailsOptions
                      .map(
                        (option) => `
                        <label>
                            <input type="checkbox" name="${prefix}-${data.detailsName}" value="${option.value}">
                            <span></span> ${option.label}
                        </label>
                    `
                      )
                      .join("")}
                `;
        break;

      case "group-date":
        detailsDiv.innerHTML = `
                    ${data.detailsFields
                      .map(
                        (field) => `
                        <label for="${prefix}-${field.name}">${
                          field.label
                        }</label>
                        <input type="${field.type}" id="${prefix}-${
                          field.name
                        }" name="${prefix}-${field.name}" placeholder="${
                          field.placeholder || ""
                        }" ${field.required ? "required" : ""}>
                    `
                      )
                      .join("")}
                `;
        break;

      case "textarea":
        detailsDiv.innerHTML = `
                    <label for="${prefix}-${data.detailsName}">${
          data.detailsLabel
        }</label>
                    <textarea id="${prefix}-${
          data.detailsName
        }" name="${prefix}-${data.detailsName}" rows="${
          data.detailsRow || 1
        }" cols="${data.detailsCols || 18}" placeholder="${
          data.detailsPlaceholder
        }"></textarea>
                `;
        break;

      default:
        console.error(`Tipo de detalhe não suportado: ${data.detailsType}`);
        break;
    }

    cells[2].appendChild(detailsDiv);
  }

  return row;
}

// Função o campo de observações
function addObservacoes(prefix, dynamicContainerId) {
  // Cria o container para as observações
  const observacoesContainer = document.createElement("div");
  observacoesContainer.id = `${prefix}-observacoes-container`;
  observacoesContainer.className = "observacoes-container";

  // Cria o label
  const label = document.createElement("label");
  label.setAttribute("for", `${prefix}-observacoes`);
  label.textContent = "Observações:";

  // Cria o textarea
  const textarea = document.createElement("textarea");
  textarea.id = `${prefix}-observacoes`;
  textarea.name = `${prefix}-observacoes`;
  textarea.placeholder = "Informações adicionais";

  // Adiciona o label e o textarea ao container
  observacoesContainer.appendChild(label);
  observacoesContainer.appendChild(textarea);

  // Adiciona o container de observações ao final do dynamic-container específico
  const dynamicContainer = document.getElementById(dynamicContainerId);
  if (dynamicContainer) {
    dynamicContainer.appendChild(observacoesContainer);
  } else {
    console.error(
      `Container dinâmico não encontrado para adicionar observações: ${dynamicContainerId}`
    );
  }
}

// Função de renderização da tabela
function renderTable(data, prefix, tableBody, dynamicContainerId, fieldset) {
  // Verifica se há um cabeçalho e o renderiza
  if (data[0] && data[0].header) {
    const headerData = data[0]; // Primeiro item é o cabeçalho
    const headerDiv = document.createElement("div");
    headerDiv.className = headerData.divClass;

    headerDiv.innerHTML = `
        <label for="${prefix}-${headerData.headerName}">${
      headerData.labelIdentifier
    }:</label>
        ${getHeaderInput(headerData, prefix)}
        <button type="button" class="${headerData.removeClass}">Remover</button>
    `;

    // Adiciona o evento de clique ao botão de remoção
    const removeButton = headerDiv.querySelector(`.${headerData.removeClass}`);
    if (removeButton) {
      removeButton.addEventListener("click", function () {
        if (window.confirm("Tem certeza que deseja excluir este elemento?")) {
          // Remove o fieldset correspondente
          if (fieldset) {
            fieldset.remove();
          }
        }
      });
    }

    // Função para gerar o input com base no headerType
    function getHeaderInput(headerData, prefix) {
      let inputHTML = "";
      //Verificar qual type de input é necessário
      switch (headerData.headerType) {
        case "text":
          inputHTML = `
                    <input type="text" id="${prefix}-${headerData.headerName}" name="${prefix}-${headerData.headerName}" placeholder="${headerData.headerPlaceholder}">
                `;
          break;

        case "number":
          inputHTML = `
                    <input type="number" id="${prefix}-${headerData.headerName}" name="${prefix}-${headerData.headerName}" min="${headerData.headerMin}" placeholder="${headerData.headerPlaceholder}">
                `;
          break;
      }
      return inputHTML;
    }

    // Adiciona o cabeçalho ao container
    const container = document.getElementById(dynamicContainerId);
    if (container) {
      container.insertBefore(headerDiv, container.firstChild);
    } else {
      console.error(`Container com ID ${dynamicContainerId} não encontrado.`);
    }
    // Remove o cabeçalho do array para não ser renderizado como linha da tabela
    data = data.slice(1);
  }

  // Renderiza as linhas da tabela
  data.forEach((item) => {
    const row = renderRow(item, prefix);
    tableBody.appendChild(row);
  });

  // Adiciona event listeners para todos os radios buttons
  const radios = tableBody.querySelectorAll('input[type="radio"]');
  radios.forEach((radio) => {
    radio.addEventListener("change", toggleDetails);
  });

  // Adiciona o campo de observações ao final do dynamic-container específico
  addObservacoes(prefix, dynamicContainerId);
}

// Função de renderização da tabela para seções internas
function renderTableSection(
  data,
  prefix,
  tableBody,
  dynamicContainerId,
  fieldset,
  name
) {
  // Renderiza as linhas da tabela
  data.forEach((item) => {
    const row = renderRow(item, name);
    tableBody.appendChild(row);
  });

  // Adiciona event listeners para todos os radios buttons
  const radios = tableBody.querySelectorAll('input[type="radio"]');
  radios.forEach((radio) => {
    radio.addEventListener("change", toggleDetails);
  });

  // Adiciona o campo de observações ao final do dynamic-container específico
  addObservacoes(name, dynamicContainerId);
}

// FUNÇÃO PRINCIPAL PARA INICIAR A RENDERIZAÇÃO
function initializeTable(Data, tableBodyId, sectionId, dynamicContainerId) {
  document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById(tableBodyId);
    const prefix = `template-${templateCounter++}`; // Gera um prefix único

    // Atualiza o ID do fieldset para corresponder ao prefix
    const fieldset = document.getElementById(sectionId);
    if (fieldset) {
      fieldset.id = `${prefix}-section`; // Atualiza o ID do fieldset
    } else {
      console.error("Fieldset não encontrado para atualizar o ID.");
      return; // Interrompe a execução se o fieldset não for encontrado
    }

    // Renderiza a tabela e adiciona o campo de observações
    renderTable(Data, prefix, tableBody, dynamicContainerId, fieldset);
  });
}

//FUNÇÕES DE INTERAÇÃO
// 1. Função para manipular a exibição dos detalhes de cada item
function toggleDetails(event) {
  const radioButton = event.target;
  const targetId = radioButton.getAttribute("data-target");
  const detalhes = document.querySelector(targetId);

  const valoresParaMostrarDetalhes = ["incorreto"]; // Valores que ativam os detalhes

  if (
    valoresParaMostrarDetalhes.includes(radioButton.value) &&
    radioButton.checked
  ) {
    if (detalhes) {
      detalhes.classList.remove("hidden"); // Mostra o campo de detalhes
    }
  } else {
    if (detalhes) {
      detalhes.classList.add("hidden"); // Oculta o campo de detalhes
    }
  }
}

// 2. Aplicando eventos aos radios por conta da quantidade de botões com mesmo comportamento
function applyRadioEventListeners(targetElement) {
  targetElement.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", toggleDetails);
  });
}

// 3. Gerenciamento de check-box "não se aplica"
function toggleVisibility() {
  // Seleciona todos os checkboxes de "Não se aplica"
  const checkboxes = document.querySelectorAll(".nao-se-aplica-checkbox");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function (event) {
      // Obtém o valor do atributo data-target
      const targetId = checkbox.getAttribute("data-target");
      const content = document.getElementById(targetId);

      if (content) {
        // Alterna a visibilidade do container
        if (event.target.checked) {
          content.classList.add("hidden");
        } else {
          content.classList.remove("hidden");
        }
      }
    });
  });
}

// 3. Gerenciamento de check-box "não se aplica" para templates com Section
function toggleVisibilitySection(receptacleId) {
  // Seleciona o receptáculo
  const receptacle = document.getElementById(receptacleId);
  if (!receptacle) return;

  // Observa mutações no DOM para detectar quando novos elementos são adicionados
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        // Para cada novo nó adicionado
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) {
            // Verifica se é um elemento
            // Seleciona todos os checkboxes de "Não se aplica" dentro do novo elemento
            const checkboxes = node.querySelectorAll(".nao-se-aplica-checkbox");

            checkboxes.forEach((checkbox) => {
              checkbox.addEventListener("change", function (event) {
                // Obtém o valor do atributo data-target
                const targetId = checkbox.getAttribute("data-target");
                const content = document.getElementById(targetId);

                if (content) {
                  // Alterna a visibilidade do container
                  if (event.target.checked) {
                    content.classList.add("hidden");
                  } else {
                    content.classList.remove("hidden");
                  }
                }
              });
            });
          }
        });
      }
    });
  });

  // Configura o observador para monitorar adições de filhos
  observer.observe(receptacle, { childList: true });
}

//FUNÇÃO DE CLONAR TEMPLATES
/**
 * Função genérica para clonar um template, renderizar as linhas e adicionar clones a um receptáculo.
 * @param {string} templateId - O ID do template a ser clonado.
 * @param {string} receptacleId - O ID do receptáculo onde os clones serão adicionados.
 * @param {string} addButtonId - O ID do botão que aciona a adição de clones.
 * @param {Array} data - Os dados a serem renderizados nas tabelas.
 */

//Contador único para containers clonados
let uniqueIdCounter = 0;

function setupTemplateCloning(
  templateId,
  receptacleId,
  addButtonId,
  data,
  formName
) {
  const addButton = document.getElementById(addButtonId);
  const receptacle = document.getElementById(receptacleId);
  const template = document.getElementById(templateId);

  if (!addButton || !receptacle || !template) {
    console.error(
      "Elementos necessários não encontrados. Verifique os IDs fornecidos."
    );
    return;
  }

  addButton.addEventListener("click", () => {
    uniqueIdCounter++;

    // Clona o conteúdo do template
    const clone = document.importNode(template.content, true);

    // Adiciona prefixos únicos aos IDs dos elementos clonados
    const elementsWithId = clone.querySelectorAll("[id]");
    elementsWithId.forEach((element) => {
      const originalId = element.id;
      element.id = `${originalId}-${uniqueIdCounter}`;
    });

    // Adiciona o clone ao receptáculo
    receptacle.appendChild(clone);

    // Seleciona os elementos dentro do clone após adicioná-lo ao DOM
    const fieldset = receptacle.querySelector(
      `#${formName}-section-${uniqueIdCounter}`
    );
    const tableBody = receptacle.querySelector(
      `#${formName}-table-body-${uniqueIdCounter}`
    );
    const dynamicContainerId = `${formName}-container-${uniqueIdCounter}`;

    // Renderiza as linhas da tabela
    if (data && tableBody && fieldset) {
      renderTable(
        data,
        `prefix-${uniqueIdCounter}`,
        tableBody,
        dynamicContainerId,
        fieldset
      );
    } else {
      console.error(
        "Elementos não encontrados no clone. Verifique os IDs no template."
      );
    }

    // Adiciona event listeners para os elementos dentro do clone
    applyRadioEventListeners(fieldset);
  });
}

// Função para clonar templates com seções internas
function setupTemplateWithSectionCloning(
  templateId,
  receptacleId,
  addButtonId,
  data,
  formName
) {
  const addButton = document.getElementById(addButtonId);
  const receptacle = document.getElementById(receptacleId);
  const template = document.getElementById(templateId);

  if (!addButton || !receptacle || !template) {
    console.error(
      "Elementos necessários não encontrados. Verifique os IDs fornecidos."
    );
    return;
  }

  addButton.addEventListener("click", () => {
    uniqueIdCounter++;

    // Clona o conteúdo do template
    const clone = document.importNode(template.content, true);

    // Adiciona prefixos únicos aos IDs dos elementos clonados
    const elementsWithId = clone.querySelectorAll("[id]");
    elementsWithId.forEach((element) => {
      const originalId = element.id;
      element.id = `${originalId}-${uniqueIdCounter}`;
    });

    // Atualiza o data-target dos checkboxes
    const checkboxes = clone.querySelectorAll(".nao-se-aplica-checkbox");
    checkboxes.forEach((checkbox) => {
      const originalTarget = checkbox.getAttribute("data-target");
      checkbox.setAttribute(
        "data-target",
        `${originalTarget}-${uniqueIdCounter}`
      );
    });

    // Adiciona o clone ao receptáculo
    receptacle.appendChild(clone);

    // Seleciona os elementos dentro do clone após adicioná-lo ao DOM
    const fieldset = receptacle.querySelector(
      `#${formName}-section-${uniqueIdCounter}`
    );
    const tableBody = receptacle.querySelector(
      `#${formName}-table-body-${uniqueIdCounter}`
    );
    const dynamicContainerId = `${formName}-container-${uniqueIdCounter}`;

    // Renderiza as linhas da tabela
    if (data && tableBody && fieldset) {
      renderTable(
        data,
        `prefix-${uniqueIdCounter}`,
        tableBody,
        dynamicContainerId,
        fieldset
      );
    } else {
      console.error(
        "Elementos não encontrados no clone. Verifique os IDs no template."
      );
    }

    //Lógica utilizada apenas para a seção de Documentos de compra
    if (data === docsCompraData) {
      // sectionsCompras são as seções internas de Documentos de compra
      sectionsCompras.forEach((section) => {
        // Seleciona os elementos com base no uniqueIdCounter
        const fieldset = receptacle.querySelector(
          `#${section.fieldset}-${uniqueIdCounter}`
        );
        const tableBody = receptacle.querySelector(
          `#${section.tableBodyId}-${uniqueIdCounter}`
        );
        const dynamicContainerId = `${section.dynamicContainerId}-${uniqueIdCounter}`;
        const name = `${section.id}-${uniqueIdCounter}`;
        // Verifica se os elementos e os dados existem
        if (section.data && tableBody && fieldset) {
          // console.log(`Renderizando dados da seção ${section.fieldset}...`);
          renderTableSection(
            section.data,
            `prefix-${uniqueIdCounter}`,
            tableBody,
            dynamicContainerId,
            fieldset,
            name
          );
        } else {
          console.error(
            `Erro ao renderizar a seção ${section.fieldset}. Verifique os IDs e os dados.`
          );
        }
      });
    }

    //Lógica utilizada apenas para a seção de Quadro Demonstrativo
    if (data === quadroDemonstrativoData) {
      // sectionsQD são as seções internas do Quadro Demonstrativo
      sectionsQD.forEach((section) => {
        // Seleciona os elementos com base no uniqueIdCounter
        const fieldset = receptacle.querySelector(
          `#${section.fieldset}-${uniqueIdCounter}`
        );
        const tableBody = receptacle.querySelector(
          `#${section.tableBodyId}-${uniqueIdCounter}`
        );
        const dynamicContainerId = `${section.dynamicContainerId}-${uniqueIdCounter}`;
        const name = `${section.id}-${uniqueIdCounter}`;
        // Verifica se os elementos e os dados existem
        if (section.data && tableBody && fieldset) {
          // console.log(`Renderizando dados da seção ${section.fieldset}...`);
          renderTableSection(
            section.data,
            `prefix-${uniqueIdCounter}`,
            tableBody,
            dynamicContainerId,
            fieldset,
            name
          );
        } else {
          console.error(
            `Erro ao renderizar a seção ${section.fieldset}. Verifique os IDs e os dados.`
          );
        }
      });
    }
  });
}

// Função para configurar checkboxes dentro de um fieldset
function setupCheckboxes(fieldset) {
  const checkboxes = fieldset.querySelectorAll(".nao-se-aplica-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function (event) {
      const targetId = checkbox.getAttribute("data-target");
      const content = document.getElementById(targetId);

      if (content) {
        if (event.target.checked) {
          content.classList.add("hidden");
        } else {
          content.classList.remove("hidden");
        }
      }
    });
  });
}

//Formatar a data para dd/mm/aaa
function formatarDataBrasileira(dataISO) {
  if (!dataISO) return "";
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
}

//Função de quebrar linha no textarea
function escapeHtmlWithBreaks(text) {
  if (!text) return "";
  // Escapa caracteres HTML para evitar XSS
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
  // Converte quebras de linha em <br>
  return escaped.replace(/\n/g, "<br>");
}

// Função para imprimir relatório de pendências
function printPendenciasReport() {
  // Cria uma nova janela para o relatório
  const reportWindow = window.open("", "_blank");

  // Obtém informações gerais do processo
  let unidadeEscolar = "Não especificada";
  let programa = "Não especificado";
  let acao = "Não especificado";
  let processo = "Não especificado";
  let exercicio = "Não especificado";

  // Tenta obter os valores, mas não falha se os elementos não existirem
  const unidadeEscolarElement = document.getElementById("unidade-escolar");
  if (
    unidadeEscolarElement &&
    unidadeEscolarElement.options &&
    unidadeEscolarElement.selectedIndex >= 0
  ) {
    unidadeEscolar =
      unidadeEscolarElement.options[unidadeEscolarElement.selectedIndex].text;
  }

  const programaElement = document.getElementById("programa");
  if (
    programaElement &&
    programaElement.options &&
    programaElement.selectedIndex >= 0
  ) {
    programa = programaElement.options[programaElement.selectedIndex].text;
  }

  const acoesSelecionadas = Array.from(
    document.querySelectorAll('input[name="acoes[]"]:checked')
  ).map((cb) => cb.parentElement.textContent.trim());
  acao = acoesSelecionadas.join(", ") || "Não especificado";

  const processoElement = document.getElementById("processo");
  if (processoElement) {
    processo = processoElement.value || "Não especificado";
  }

  const exercicioElement = document.getElementById("exercicio");
  if (exercicioElement) {
    exercicio = exercicioElement.value || "Não especificado";
  }

  // Inicia o HTML do relatório
  let reportHTML = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Relatório de Pendências - ${unidadeEscolar}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    color: #333;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                h1, h2, h3, h4 {
                    color: #222;
                }
                .header {
                    text-align: left;
                    margin-bottom: 30px;
                    border-bottom: 1px solid #333;
                    padding-bottom: 10px;
                }
                h1 {
                text-align: center;
                }
                .section {
                    margin-bottom: 20px;
                    padding: 15px;
                    background-color: #f9f9f9;
                    border: 1px solid #ddd;
                }
                .subsection {
                    margin: 15px 0;
                    padding: 10px;
                    background-color: #f5f5f5;
                    border-left: 3px solid #ddd;
                }
                .section-title {
                    font-weight: bold;
                    margin-bottom: 10px;
                    font-size: 16px;
                    text-decoration: underline;
                }
                .subsection-title {
                    font-weight: bold;
                    margin-bottom: 8px;
                    font-size: 14px;
                }
                .item {
                    margin-bottom: 10px;
                    padding-left: 20px;
                }
                .item-title,
                .item-details {
                color: #444;
                }
                .item-title {
                    font-size: 14px;
                    font-weight: bold;
                }

                .item-details {
                    margin-left: 20px;
                    font-style: italic;
                    font-size: 14px;
                }
                .observacoes {
                    margin-top: 10px;
                    padding: 10px;
                    background-color: #f0f0f0;
                    border-left: 3px solid #ccc;
                }
                .pendencia {
                    color: #333;
                }
                .footer {
                    margin-top: 30px;
                    text-align: center;
                    font-size: 0.9em;
                    color: #666;
                    border-top: 1px solid #ddd;
                    padding-top: 10px;
                }
                @media print {
                    body {
                        font-size: 12pt;
                    }
                    .section, .subsection {
                        page-break-inside: avoid;
                    }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Relatório de Pendências</h1>
                <p><strong>Processo:</strong> ${processo}</p>
                <p><strong>Unidade Escolar:</strong> ${unidadeEscolar}</p>
                <p><strong>Programa:</strong> ${programa}/${exercicio}</p>
                <p><strong>Ação:</strong> ${acao}</p>
            </div>
    `;

  // Função para inverter o texto do item quando marcado como pendência
  function getInvertedText(text) {
    // Mapeia textos comuns para suas versões invertidas
    const textMap = {
      "Arquivo presente": "Ausente",
      "Arquivo assinado via SEI": "Arquivo não assinado (via SEI)",
      "Digitalização completa": "Digitalização incompleta",
      "Dados da unidade escolar": "Dados da unidade escolar incorretos",
      Texto: "Texto incorreto",
      "Assinatura da autoridade competente":
        "Assinado por autoridade não competente",
      "Data anterior a 1ª compra": "Data posterior a 1ª compra",
      "Saldo reprogramado": "Saldo reprogramado incorreto",
      "Repasse FNDE": "Repasse FNDE incorreto",
      "Custeio: itens contemplam as compras":
        "Despesa de custeio não contemplada na ata",
      "Capital: itens contemplam as compras":
        "Despesa de capital não contemplada na ata",
      "Membros eleitos": "Membros não eleitos pela ata de eleição inserida",
      "Assinatura dos membros":
        "Assinatura ausente ou difere com a ata de eleição",
      "Ação adequada": "Ação inadequada",
      "Detalhamento dos itens": "Detalhamento dos itens ausente ou incorreto",
      "Todos os meses presentes": "Extrato(s) ausente(s)",
      "Mês: atualizado até último dia útil":
        "Extrato(s) incompleto(s) ou não atualizado(s) até último dia útil",
      "Valores recebidos aplicados no prazo":
        "Valores recebidos não aplicados no prazo",
      "Despesas com documentação comprobatória":
        "Despesas sem documentação comprobatória",
      "Despesas autorizadas, conforme Resolução FNDE": "Despesas não aprovadas",
      "Comprovante de depósito": "Comprovante de depósito ausente",
      "Cálculos de correção monetária":
        "Cálculos de correção monetária ausentes",
      Justificativa: "Justificativa ausente",
      "GRU (FNDE)": "GRU (FNDE) ausente",
      "Docs de compra (NF, orçamentos, comprovantes...)":
        "Despesa realizada sem documentos comprobatórios (NF, mín 03 orçamentos, comprovante de compra e, se for o caso, contrato de prestação de serviço",
      "Razão social e CNPJ da UEx": "Razão social e/ou CNPJ da UEx incorretos",
      "Carimbo de recebido": "Carimbo de recebido",
      "Carimbo de identificação do programa":
        "Carimbo de identificação do programa",
      "Carimbo de atesto": "Carimbo de atesto",
      "Dados da empresa": "Dados da empresa incorretos ou ausentes",
      "Data anterior/igual à NF": "Data posterior à NF",
      "Itens em conformidade com a NF": "Itens não conformes com a NF",
      "Validade da proposta": "Validade da proposta",
      "Forma de pagamento": "Forma de pagamento ausente",
      "Prazo de entrega": "Prazo de entrega ausente",
      "Datado antes/igual da NF e depois/igual dos orçamentos":
        "Data incorreta em relação à NF ou orçamentos",
      "Assinatura das partes": "Assinatura das partes ausente",
      "Processo relacionado": "Processo não relacionado (via SEI)",
      "Campos preenchidos adequadamente": "Campos preenchidos inadequadamente",
      "Identificação do programa": "Identificação do programa incorreta",
      "Reprogramação (parcial ou total)":
        "Reprogramação (parcial ou total) incorreta",
      "Data posterior a última compra": "Data anterior a última compra",
      "Conselho fiscal: mínimo 03 conselheiros":
        "Conselheiros fiscais: não possui mínimo de 03 assinaturas",
      "Conselho fiscal: eleitos na ata": "Conselheiros fiscais: não eleitos",
      "Conselho fiscal: assinaturas":
        "Conselho fiscal: assinaturas ausente(s) ou difere(m) com a ata de eleição",
      "Referendo: membros eleitos": "Referendo: membros não eleitos",
      "Referendo: assinaturas":
        "Referendo: assinaturas ausente(s) ou difere(m) com a ata de eleição",
      "Ano adequado": "Ano inadequado",
      "Data igual/posterior ao Parecer do Conselho Fiscal":
        "Data anterior ao Parecer do Conselho Fiscal",
      "Contagem de votos": "Contagem de votos incorreta ou ausente",
      "Lista de presentes: representatividade":
        "Lista de presentes: sem representatividade",
      "Lista de presente: ausência de assinatura de membros":
        "Lista de presente: ausência de assinatura de membros",
      "Mandato contempla execução": "Mandato não contempla execução",
      "Registro em cartório": "Registro em cartório ausente",
    };

    return textMap[text] || `${text} - Incorreto`;
  }

  // Função para identificar o tipo de seção
  function getSectionType(fieldset) {
    const id = fieldset.id || "";

    // Verifica se é um documento de compra
    if (id.includes("docs-compras")) {
      return "docs-compras";
    }

    // Verifica se é um quadro demonstrativo
    if (id.includes("qd-")) {
      return "qd";
    }

    return "regular";
  }

  // Função para obter o título da seção
  function getSectionTitle(fieldset) {
    // Tenta obter o título da seção do cabeçalho
    const headerDiv = fieldset.querySelector(".form-group.box-type");

    // Tenta obter do legend
    const legend = fieldset.querySelector("legend");

    //Tratamento para Ofício
    if (legend.textContent == "Ofício") {
      return "Ofício";
    }
    //Tratamento para Ata de prioridades
    if (legend.textContent == "Ata de Prioridades") {
      const input = headerDiv.querySelector('input[type="text"]');
      if (input && input.value) {
        return "Ata de Prioridades: " + input.value.trim();
      } else {
        return "Ata de Prioridades";
      }
    }
    //Tratamento para Plano de ação/atendimento
    if (legend.textContent == "Plano de ação/atendimento") {
      const input = headerDiv.querySelector('input[type="text"]');
      if (input && input.value) {
        return "Plano de ação/atendimento: " + input.value.trim();
      } else {
        return "Plano de ação/atendimento";
      }
    }
    //Tratamento para Extrato bancário: conta corrente
    if (legend.textContent == "Extrato bancário: conta corrente") {
      const input = headerDiv.querySelector('input[type="text"]');
      if (input && input.value) {
        return "Conta nº: " + input.value.trim() + " - Conta corrente";
      } else {
        return "Conta Corrente";
      }
    }
    //Tratamento para Extrato bancário: conta investimento
    if (legend.textContent == "Extrato bancário: conta investimento") {
      const input = headerDiv.querySelector('input[type="text"]');
      if (input && input.value) {
        return "Conta nº: " + input.value.trim() + " - Conta investimento";
      } else {
        return "Conta Investimento";
      }
    }
    //Tratamento para Comprovantes de compra
    if (legend.textContent == "Comprovantes de compra") {
      const input = headerDiv.querySelector('input[type="number"]');
      if (input && input.value) {
        return "Compra: " + input.value.trim();
      } else {
        return "Comprovantes de compra";
      }
    }

    //Tratamento para Devolução de valores ao FNDE
    if (
      legend.textContent == "Devolução de valores a conta da unidade escolar"
    ) {
      const input = headerDiv.querySelector('input[type="text"]');
      if (input && input.value) {
        return (
          "Conta nº: " + input.value.trim() + " - Devolução a conta da UEx"
        );
      } else {
        return "Devolução de valores a conta da UEx";
      }
    }
    //Tratamento para Devolução FNDE
    if (legend.textContent == "Devolução de valores ao FNDE") {
      return "Devolução de valores ao FNDE";
    }

    //Tratamento para Comprovante de compra
    if (legend.textContent == "Comprovantes de compra") {
      const input = headerDiv.querySelector('input[type="number"]');
      if (input && input.value) {
        return "Compra nº: " + input.value.trim();
      } else {
        return "Comprovantes de compra";
      }
    }

    //Tratamento para Quadro Demonstrativo
    if (legend.textContent == "Quadro Demonstrativo") {
      const input = headerDiv.querySelector('input[type="text"]');
      if (input && input.value) {
        return "Quadro Demonstrativo: " + input.value.trim();
      } else {
        return "Quadro Demonstrativo";
      }
    }

    //Tratamento para REX
    if (legend.textContent == "REX") {
      return "Consulta escola (antigo REX)";
    }
    //Tratamento para Parecer Conselho Fiscal
    if (legend.textContent == "Parecer Conselho Fiscal") {
      return "Parecer Conselho Fiscal";
    }
    //Tratamento para Ata de Aprovação PCA
    if (legend.textContent == "Ata de Aprovação PCA") {
      return "Ata de Aprovação PCA";
    }
    //Tratamento para Ata de Constituição UEx
    if (legend.textContent == "Ata de Constituição UEx") {
      return "Ata de Constituição UEx";
    }
    //Tratamento para Termo Conselho Escolar
    if (legend.textContent == "Termo Conselho Escolar") {
      return "Termo Conselho Escolar";
    }
    //Tratamento para Ata Escolha Conselho Escolar
    if (legend.textContent == "Ata Escolha Conselho Escolar") {
      return "Ata Escolha Conselho Escolar";
    }

    if (headerDiv) {
      const input = headerDiv.querySelector('input[type="text"]');
      if (input && input.value) {
        return input.value;
      }

      if (legend && legend.textContent) {
        return legend.textContent.trim();
      }
      // Se não encontrar input, tenta obter do label
      const label = headerDiv.querySelector("label");
      if (label && label.textContent) {
        return label.textContent.replace(":", "").trim();
      }
    }

    // Identifica pelo ID
    const id = fieldset.id || "";

    // Mapeamento de IDs para títulos
    const idMap = {
      "oficio-section": "Ofício",
      "dev-fnde-section": "Devolução FNDE",
      "rex-section": "Consulta Escola REX",
      "parecer-conselho-fiscal-section": "Parecer do Conselho Fiscal",
      "ata-aprov-pca-section": "Ata de Aprovação PCA",
      "ata-uex-section": "Ata da UEx",
      "termo-conselho-escolar-section": "Termo do Conselho Escolar",
      "ata-conselho-escolar-section": "Ata de Escolha do Conselho Escolar",
    };

    // Verifica se o ID está no mapeamento
    for (const [pattern, title] of Object.entries(idMap)) {
      if (id.includes(pattern)) {
        return title;
      }
    }

    // Identifica por padrões no ID
    if (id.includes("ata-prioridades")) {
      return "Ata de Prioridades";
    } else if (id.includes("plano-acao")) {
      return "Plano de Ação";
    } else if (id.includes("cc-")) {
      return "Conta Corrente";
    } else if (id.includes("ci-")) {
      return "Conta Investimento";
    } else if (id.includes("dev-escola")) {
      return "Devolução Escola";
    } else if (id.includes("docs-compras")) {
      return "Documentos de Compra";
    } else if (id.includes("qd-")) {
      return "Quadro Demonstrativo";
    }

    return "Seção";
  }
  //FIM fuction getSectionTitle

  // Função para obter o título da subseção
  function getSubsectionTitle(section) {
    // Tenta obter do legend
    const legend = section.querySelector("legend");
    if (legend && legend.textContent) {
      return legend.textContent.trim();
    }

    // Identifica pelo ID
    const id = section.id || "";

    // Mapeamento de IDs para títulos
    const idMap = {
      "nf-section": "Nota Fiscal",
      "o-um-section": "Orçamento 1",
      "o-dois-section": "Orçamento 2",
      "o-tres-section": "Orçamento 3",
      "ct-servico-section": "Contrato de Prestação de Serviço",
      "proc-incorp-section": "Processo de Incorporação de Bens",
      "bloco-01-section": "Bloco 1",
      "bloco-02-section": "Bloco 2",
      "bloco-03-section": "Bloco 3",
    };

    // Verifica se o ID está no mapeamento
    for (const [pattern, title] of Object.entries(idMap)) {
      if (id.includes(pattern)) {
        return title;
      }
    }

    return "Subseção";
  }

  // Função para coletar dados de uma subseção
  function collectSubsectionData(section) {
    const subsectionData = {
      title: getSubsectionTitle(section),
      items: [],
      observacoes: "",
    };

    // Coleta todos os itens marcados como pendência
    const rows = section.querySelectorAll(".checklist-row");
    rows.forEach((row) => {
      const itemTitle = row
        .querySelector(".checklist-item")
        ?.textContent.trim();
      const pendenciaRadio = row.querySelector(
        'input[value="incorreto"]:checked'
      );

      if (itemTitle && pendenciaRadio) {
        const item = {
          title: getInvertedText(itemTitle),
          details: [],
        };

        // Verifica se há detalhes para este item
        const detailsContainer = row.querySelector(
          ".details-container:not(.hidden), .text-group:not(.hidden), .checkbox-group:not(.hidden), .group-date:not(.hidden), .text-pendencia:not(.hidden)"
        );
        console.log(detailsContainer);
        if (detailsContainer) {
          // Coleta detalhes de texto
          const textInputs =
            detailsContainer.querySelectorAll('input[type="text"]');
          textInputs.forEach((input) => {
            if (input.value) {
              item.details.push(
                `${input.previousElementSibling?.textContent || "Detalhe"}: ${
                  input.value
                }`
              );
            }
          });

          // Coleta detalhes de data
          const dateInputs =
            detailsContainer.querySelectorAll('input[type="date"]');
          dateInputs.forEach((input) => {
            if (input.value) {
              const dataFormatada = formatarDataBrasileira(input.value);
              item.details.push(
                `${
                  input.previousElementSibling?.textContent || "Data"
                }: ${dataFormatada}`
              );
            }
          });

          // Coleta detalhes de checkbox
          const checkboxes = detailsContainer.querySelectorAll(
            'input[type="checkbox"]:checked'
          );
          if (checkboxes.length > 0) {
            const checkboxLabels = Array.from(checkboxes)
              .map((checkbox) => {
                const label = checkbox.closest("label");
                return label ? label.textContent.trim() : "";
              })
              .filter((label) => label); // Remove valores vazios
            if (checkboxLabels.length > 0) {
              item.details.push(`Pendência: ${checkboxLabels.join(", ")}`);
            }
          }

          // Coleta detalhes de textarea de observações
          const textareas = detailsContainer.querySelectorAll("textarea");
          textareas.forEach((textarea) => {
            if (textarea.value) {
              item.details.push(
                `${textarea.previousElementSibling?.textContent || ""}${
                  textarea.value
                }`
              );
            }
          });
        }

        subsectionData.items.push(item);
      }
    });

    // Coleta observações gerais
    const observacoesTextarea = section.querySelector(
      'textarea[id*="-observacoes"]'
    );
    if (observacoesTextarea && observacoesTextarea.value) {
      subsectionData.observacoes = observacoesTextarea.value;
    }

    return subsectionData;
  }

  // Função para coletar dados de um fieldset
  function collectFieldsetData(fieldset) {
    const sectionType = getSectionType(fieldset);

    const sectionData = {
      title: getSectionTitle(fieldset),
      items: [],
      subsections: [],
      observacoes: "",
    };

    // Se for um tipo especial com subseções
    if (sectionType === "docs-compras" || sectionType === "qd") {
      //código da IA
      // const mainRows = fieldset.querySelectorAll(
      //   ":scope > .checklist-grid > .checklist-body > .checklist-row"
      // );
      const mainRows = fieldset.querySelectorAll(
        ":scope > .dynamic-container > .checklist-grid > .checklist-body > .checklist-row"
      );
      mainRows.forEach((row) => {
        const itemTitle = row
          .querySelector(".checklist-item")
          ?.textContent.trim();
        const pendenciaRadio = row.querySelector(
          'input[value="incorreto"]:checked'
        );

        if (itemTitle && pendenciaRadio) {
          const item = {
            title: getInvertedText(itemTitle),
            details: [],
          };

          // Verifica se há detalhes para este item
          const detailsContainer = row.querySelector(
            ".details-container:not(.hidden), .text-group:not(.hidden), .checkbox-group:not(.hidden), .group-date:not(.hidden)"
          );
          if (detailsContainer) {
            // Coleta detalhes de texto
            const textInputs =
              detailsContainer.querySelectorAll('input[type="text"]');
            textInputs.forEach((input) => {
              if (input.value) {
                item.details.push(
                  `${input.previousElementSibling?.textContent || "Detalhe"}: ${
                    input.value
                  }`
                );
              }
            });

            // Coleta detalhes de data
            const dateInputs =
              detailsContainer.querySelectorAll('input[type="date"]');
            dateInputs.forEach((input) => {
              if (input.value) {
                const dataFormatada = formatarDataBrasileira(input.value);
                item.details.push(
                  `${
                    input.previousElementSibling?.textContent || "Data"
                  }: ${dataFormatada}`
                );
              }
            });

            // Coleta detalhes de checkbox
            const checkboxes = detailsContainer.querySelectorAll(
              'input[type="checkbox"]:checked'
            );
            if (checkboxes.length > 0) {
              const checkboxLabels = Array.from(checkboxes)
                .map((checkbox) => {
                  const label = checkbox.closest("label");
                  return label ? label.textContent.trim() : "";
                })
                .filter((label) => label); // Remove valores vazios
              if (checkboxLabels.length > 0) {
                item.details.push(`Pendência: ${checkboxLabels.join(", ")}`);
              }
            }

            // Coleta detalhes de textarea
            const textareas = detailsContainer.querySelectorAll("textarea");
            textareas.forEach((textarea) => {
              if (textarea.value) {
                item.details.push(
                  `${
                    textarea.previousElementSibling?.textContent || "Observação"
                  }: ${textarea.value}`
                );
              }
            });
          }

          sectionData.items.push(item);
        }
      });

      // Coleta observações gerais da seção principal
      //Adicionei .dynamic-container
      const mainObservacoesTextarea = fieldset.querySelector(
        ":scope > .dynamic-container > .observacoes-container textarea"
      );
      if (mainObservacoesTextarea && mainObservacoesTextarea.value) {
        sectionData.observacoes = mainObservacoesTextarea.value;
      }

      // Coleta dados das subseções
      const subsections = fieldset.querySelectorAll("section");
      subsections.forEach((section) => {
        if (!section.classList.contains("hidden")) {
          const subsectionData = collectSubsectionData(section);
          if (subsectionData.items.length > 0 || subsectionData.observacoes) {
            sectionData.subsections.push(subsectionData);
          }
        }
      });
      //Fim das seções QD e Compras
    } else {
      // Para seções regulares
      const rows = fieldset.querySelectorAll(".checklist-row");
      rows.forEach((row) => {
        const itemTitle = row
          .querySelector(".checklist-item")
          ?.textContent.trim();
        const pendenciaRadio = row.querySelector(
          'input[value="incorreto"]:checked'
        );

        if (itemTitle && pendenciaRadio) {
          const item = {
            title: getInvertedText(itemTitle),
            details: [],
          };

          // Verifica se há detalhes para este item
          const detailsContainer = row.querySelector(
            ".details-container:not(.hidden), .text-group:not(.hidden), .checkbox-group:not(.hidden), .group-date:not(.hidden)"
          );
          if (detailsContainer) {
            // Coleta detalhes de texto
            const textInputs =
              detailsContainer.querySelectorAll('input[type="text"]');
            textInputs.forEach((input) => {
              if (input.value) {
                item.details.push(
                  `${input.previousElementSibling?.textContent || "Detalhe"}: ${
                    input.value
                  }`
                );
              }
            });

            // Coleta detalhes de data
            const dateInputs =
              detailsContainer.querySelectorAll('input[type="date"]');
            dateInputs.forEach((input) => {
              if (input.value) {
                const dataFormatada = formatarDataBrasileira(input.value);
                item.details.push(
                  `${
                    input.previousElementSibling?.textContent || "Data"
                  }: ${dataFormatada}`
                );
              }
            });

            // Coleta detalhes de checkbox
            const checkboxes = detailsContainer.querySelectorAll(
              'input[type="checkbox"]:checked'
            );
            if (checkboxes.length > 0) {
              const checkboxLabels = Array.from(checkboxes)
                .map((checkbox) => {
                  const label = checkbox.closest("label");
                  return label ? label.textContent.trim() : "";
                })
                .filter((label) => label); // Remove valores vazios
              if (checkboxLabels.length > 0) {
                item.details.push(`Pendência: ${checkboxLabels.join(", ")}`);
              }
            }

            // Coleta detalhes de textarea
            const textareas = detailsContainer.querySelectorAll("textarea");
            textareas.forEach((textarea) => {
              if (textarea.value) {
                item.details.push(
                  `${
                    textarea.previousElementSibling?.textContent || "Observação"
                  }: ${textarea.value}`
                );
              }
            });
          }

          sectionData.items.push(item);
        }
      });

      // Coleta observações gerais
      const observacoesTextarea = fieldset.querySelector(
        'textarea[id*="-observacoes"]'
      );
      if (observacoesTextarea && observacoesTextarea.value) {
        sectionData.observacoes = observacoesTextarea.value;
      }
    }

    return sectionData;
  }

  // Coleta dados de todos os fieldsets
  const fieldsets = document.querySelectorAll("fieldset");
  const sectionsData = [];

  fieldsets.forEach((fieldset) => {
    if (!fieldset.classList.contains("hidden")) {
      const sectionData = collectFieldsetData(fieldset);
      if (
        sectionData.items.length > 0 ||
        sectionData.subsections.length > 0 ||
        sectionData.observacoes
      ) {
        sectionsData.push(sectionData);
      }
    }
  });

  // Adiciona as seções ao relatório
  sectionsData.forEach((section) => {
    reportHTML += `
            <div class="section">
                <div class="section-title">${section.title}</div>
        `;

    // Adiciona os itens com pendências da seção principal
    section.items.forEach((item) => {
      reportHTML += `
                <div class="item">
                    <div class="item-title pendencia">${item.title}</div>
            `;

      // Adiciona os detalhes do item
      if (item.details.length > 0) {
        reportHTML += `<div class="item-details">`;
        item.details.forEach((detail) => {
          reportHTML += `<div>${escapeHtmlWithBreaks(detail)}</div>`;
        });
        reportHTML += `</div>`;
      }

      reportHTML += `</div>`;
    });

    // Adiciona as subseções
    section.subsections.forEach((subsection) => {
      reportHTML += `
                <div class="subsection">
                    <div class="subsection-title">${subsection.title}</div>
            `;

      // Adiciona os itens com pendências da subseção
      subsection.items.forEach((item) => {
        reportHTML += `
                    <div class="item">
                        <div class="item-title pendencia">${item.title}</div>
                `;

        // Adiciona os detalhes do item
        if (item.details.length > 0) {
          reportHTML += `<div class="item-details">`;
          item.details.forEach((detail) => {
            reportHTML += `<div>${escapeHtmlWithBreaks(detail)}</div>`;
          });
          reportHTML += `</div>`;
        }

        reportHTML += `</div>`;
      });

      // Adiciona as observações da subseção
      if (subsection.observacoes) {
        reportHTML += `
                    <div class="observacoes">
                        <strong>Observações:</strong>
                        <div>${escapeHtmlWithBreaks(
                          subsection.observacoes
                        )}</div>
                    </div>
                `;
      }

      reportHTML += `</div>`;
    });

    // Adiciona as observações gerais da seção
    if (section.observacoes) {
      reportHTML += `
                <div class="observacoes">
                    <strong>Observações:</strong>
                    <div>${escapeHtmlWithBreaks(section.observacoes)}</div>
                </div>
            `;
    }

    reportHTML += `</div>`;
  });

  // Finaliza o HTML do relatório
  reportHTML += `
            <div class="footer">
                <p>Unidade de Administração Geral de Sobradinho</p>
            </div>
        </body>
        </html>
    `;

  // Escreve o HTML na nova janela
  reportWindow.document.write(reportHTML);
  reportWindow.document.close();

  // Imprime o relatório após carregar
  reportWindow.onload = function () {
    reportWindow.print();
  };
}

//EM DESENVOLVIMENTO

// Função para salvar os dados do formulário
function saveFormData() {
  // Coleta todos os dados do formulário
  const formData = {};

  // Informações gerais - com verificação de existência
  const unidadeEscolarElement = document.getElementById("unidade-escolar");
  if (unidadeEscolarElement) {
    formData.unidadeEscolar = unidadeEscolarElement.value || "";
  }

  const programaElement = document.getElementById("programa");
  if (programaElement) {
    formData.programa = programaElement.value || "";
  }

  const processoElement = document.getElementById("processo");
  if (processoElement) {
    formData.processo = processoElement.value || "";
  }

  const exercicioElement = document.getElementById("exercicio");
  if (exercicioElement) {
    formData.exercicio = exercicioElement.value || "";
  }

  // Ações selecionadas
  formData.acoes = Array.from(
    document.querySelectorAll('input[name="acoes[]"]:checked')
  ).map((cb) => cb.value);

  // Função para coletar dados de um fieldset
  function collectFieldsetData(fieldset) {
    const fieldsetData = {};

    // Coleta cabeçalho (se existir)
    const headerInput = fieldset.querySelector(
      '.form-group.box-type input[type="text"]'
    );
    if (headerInput) {
      fieldsetData.header = headerInput.value;
    }

    // Coleta radios
    const radios = fieldset.querySelectorAll('input[type="radio"]:checked');
    radios.forEach((radio) => {
      fieldsetData[radio.name] = radio.value;
    });

    // Coleta checkboxes
    const checkboxGroups = fieldset.querySelectorAll(".checkbox-group");
    checkboxGroups.forEach((group) => {
      const groupName = group.id;
      fieldsetData[groupName] = Array.from(
        group.querySelectorAll('input[type="checkbox"]:checked')
      ).map((cb) => cb.value);
    });

    // Coleta inputs de texto e data
    const textInputs = fieldset.querySelectorAll(
      'input[type="text"]:not([id$="-observacoes"])'
    );
    textInputs.forEach((input) => {
      if (input.value && !input.closest(".form-group.box-type")) {
        fieldsetData[input.name] = input.value;
      }
    });

    const dateInputs = fieldset.querySelectorAll('input[type="date"]');
    dateInputs.forEach((input) => {
      if (input.value) {
        fieldsetData[input.name] = input.value;
      }
    });

    // Coleta observações
    const observacoesTextarea = fieldset.querySelector(
      'textarea[id*="-observacoes"]'
    );
    if (observacoesTextarea) {
      fieldsetData.observacoes = observacoesTextarea.value;
    }

    // Coleta dados das subseções (para documentos de compra e quadro demonstrativo)
    const subsections = fieldset.querySelectorAll("section");
    if (subsections.length > 0) {
      fieldsetData.subsections = {};

      subsections.forEach((section) => {
        const sectionId = section.id;
        if (sectionId) {
          fieldsetData.subsections[sectionId] = collectSubsectionData(section);
        }
      });
    }

    return fieldsetData;
  }

  // Função para coletar dados de uma subseção
  function collectSubsectionData(section) {
    const sectionData = {};

    // Coleta radios
    const radios = section.querySelectorAll('input[type="radio"]:checked');
    radios.forEach((radio) => {
      sectionData[radio.name] = radio.value;
    });

    // Coleta checkboxes
    const checkboxGroups = section.querySelectorAll(".checkbox-group");
    checkboxGroups.forEach((group) => {
      const groupName = group.id;
      sectionData[groupName] = Array.from(
        group.querySelectorAll('input[type="checkbox"]:checked')
      ).map((cb) => cb.value);
    });

    // Coleta inputs de texto e data
    const textInputs = section.querySelectorAll(
      'input[type="text"]:not([id$="-observacoes"])'
    );
    textInputs.forEach((input) => {
      if (input.value) {
        sectionData[input.name] = input.value;
      }
    });

    const dateInputs = section.querySelectorAll('input[type="date"]');
    dateInputs.forEach((input) => {
      if (input.value) {
        sectionData[input.name] = input.value;
      }
    });

    // Coleta observações
    const observacoesTextarea = section.querySelector(
      'textarea[id*="-observacoes"]'
    );
    if (observacoesTextarea) {
      sectionData.observacoes = observacoesTextarea.value;
    }

    return sectionData;
  }

  // Coleta dados de todos os fieldsets
  formData.fieldsets = {};
  const fieldsets = document.querySelectorAll("fieldset");
  fieldsets.forEach((fieldset, index) => {
    if (!fieldset.classList.contains("hidden")) {
      formData.fieldsets[fieldset.id || `fieldset-${index}`] =
        collectFieldsetData(fieldset);
    }
  });

  // Converte para JSON
  const jsonData = JSON.stringify(formData, null, 2);

  // Cria um blob e um link para download
  const blob = new Blob([jsonData], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `checklist-pdde-${formData.processo || "dados"}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Função para carregar os dados do formulário
function loadFormData() {
  // Cria um input de arquivo invisível
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".json";
  fileInput.style.display = "none";
  document.body.appendChild(fileInput);

  // Quando um arquivo for selecionado
  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const formData = JSON.parse(e.target.result);

        // Preenche informações gerais
        if (formData.unidadeEscolar)
          document.getElementById("unidade-escolar").value =
            formData.unidadeEscolar;
        if (formData.programa) {
          document.getElementById("programa").value = formData.programa;
          // Dispara o evento change para mostrar as ações correspondentes
          document
            .getElementById("programa")
            .dispatchEvent(new Event("change"));
        }
        if (formData.processo)
          document.getElementById("processo").value = formData.processo;
        if (formData.exercicio)
          document.getElementById("exercicio").value = formData.exercicio;

        // Marca as ações selecionadas
        if (formData.acoes && formData.acoes.length > 0) {
          document.querySelectorAll('input[name="acoes[]"]').forEach((cb) => {
            cb.checked = formData.acoes.includes(cb.value);
          });
        }

        // Função para preencher um fieldset com dados
        function fillFieldsetData(fieldset, fieldsetData) {
          // Preenche cabeçalho (se existir)
          if (fieldsetData.header) {
            const headerInput = fieldset.querySelector(
              '.form-group.box-type input[type="text"]'
            );
            if (headerInput) headerInput.value = fieldsetData.header;
          }

          // Marca radios
          for (const [name, value] of Object.entries(fieldsetData)) {
            if (
              name !== "header" &&
              name !== "observacoes" &&
              name !== "subsections" &&
              !Array.isArray(value)
            ) {
              const radio = fieldset.querySelector(
                `input[name="${name}"][value="${value}"]`
              );
              if (radio) {
                radio.checked = true;
                // Dispara o evento change para mostrar/ocultar detalhes
                radio.dispatchEvent(new Event("change"));
              }
            }
          }

          // Marca checkboxes
          for (const [groupName, values] of Object.entries(fieldsetData)) {
            if (Array.isArray(values)) {
              const group = fieldset.querySelector(`#${groupName}`);
              if (group) {
                values.forEach((value) => {
                  const checkbox = group.querySelector(
                    `input[value="${value}"]`
                  );
                  if (checkbox) checkbox.checked = true;
                });
              }
            }
          }

          // Preenche inputs de texto e data
          for (const [name, value] of Object.entries(fieldsetData)) {
            if (
              name !== "header" &&
              name !== "observacoes" &&
              name !== "subsections" &&
              !Array.isArray(value)
            ) {
              const input = fieldset.querySelector(
                `input[name="${name}"]:not([type="radio"])`
              );
              if (input) input.value = value;
            }
          }

          // Preenche observações
          if (fieldsetData.observacoes) {
            const observacoesTextarea = fieldset.querySelector(
              'textarea[id*="-observacoes"]'
            );
            if (observacoesTextarea)
              observacoesTextarea.value = fieldsetData.observacoes;
          }

          // Preenche subseções
          if (fieldsetData.subsections) {
            for (const [sectionId, sectionData] of Object.entries(
              fieldsetData.subsections
            )) {
              const section = fieldset.querySelector(`#${sectionId}`);
              if (section) {
                fillSubsectionData(section, sectionData);
              }
            }
          }
        }

        // Função para preencher uma subseção com dados
        function fillSubsectionData(section, sectionData) {
          // Marca radios
          for (const [name, value] of Object.entries(sectionData)) {
            if (name !== "observacoes" && !Array.isArray(value)) {
              const radio = section.querySelector(
                `input[name="${name}"][value="${value}"]`
              );
              if (radio) {
                radio.checked = true;
                // Dispara o evento change para mostrar/ocultar detalhes
                radio.dispatchEvent(new Event("change"));
              }
            }
          }

          // Marca checkboxes
          for (const [groupName, values] of Object.entries(sectionData)) {
            if (Array.isArray(values)) {
              const group = section.querySelector(`#${groupName}`);
              if (group) {
                values.forEach((value) => {
                  const checkbox = group.querySelector(
                    `input[value="${value}"]`
                  );
                  if (checkbox) checkbox.checked = true;
                });
              }
            }
          }

          // Preenche inputs de texto e data
          for (const [name, value] of Object.entries(sectionData)) {
            if (name !== "observacoes" && !Array.isArray(value)) {
              const input = section.querySelector(
                `input[name="${name}"]:not([type="radio"])`
              );
              if (input) input.value = value;
            }
          }

          // Preenche observações
          if (sectionData.observacoes) {
            const observacoesTextarea = section.querySelector(
              'textarea[id*="-observacoes"]'
            );
            if (observacoesTextarea)
              observacoesTextarea.value = sectionData.observacoes;
          }
        }

        // Preenche todos os fieldsets existentes
        if (formData.fieldsets) {
          for (const [fieldsetId, fieldsetData] of Object.entries(
            formData.fieldsets
          )) {
            const fieldset = document.getElementById(fieldsetId);
            if (fieldset) {
              fillFieldsetData(fieldset, fieldsetData);
            }
          }
        }

        // Recria templates clonados que não existem mais
        if (formData.fieldsets) {
          // Identifica templates que precisam ser clonados
          const templateTypes = {
            "ata-prioridades": {
              buttonId: "add-ata-prioridades",
              count: 0,
            },
            "plano-acao": {
              buttonId: "add-plano-acao",
              count: 0,
            },
            cc: {
              buttonId: "add-cc",
              count: 0,
            },
            ci: {
              buttonId: "add-ci",
              count: 0,
            },
            "dev-escola": {
              buttonId: "add-dev-escola",
              count: 0,
            },
            "docs-compras": {
              buttonId: "add-docs-compras",
              count: 0,
            },
            qd: {
              buttonId: "add-qd",
              count: 0,
            },
          };

          // Conta templates existentes
          for (const type in templateTypes) {
            const existingTemplates = document.querySelectorAll(
              `fieldset[id^="${type}-section-"]`
            );
            templateTypes[type].count = existingTemplates.length;
          }

          // Conta templates no arquivo
          for (const fieldsetId in formData.fieldsets) {
            for (const type in templateTypes) {
              if (fieldsetId.includes(`${type}-section-`)) {
                const match = fieldsetId.match(/-(\d+)$/);
                if (match) {
                  const index = parseInt(match[1]);
                  if (index > templateTypes[type].count) {
                    templateTypes[type].count = index;
                  }
                }
              }
            }
          }

          // Clona templates adicionais
          for (const type in templateTypes) {
            const button = document.getElementById(
              templateTypes[type].buttonId
            );
            if (button) {
              const existingCount = document.querySelectorAll(
                `fieldset[id^="${type}-section-"]`
              ).length;
              const neededCount = templateTypes[type].count;

              // Clica no botão para adicionar templates
              for (let i = existingCount; i < neededCount; i++) {
                button.click();
              }
            }
          }

          // Preenche os templates recém-clonados
          setTimeout(() => {
            for (const [fieldsetId, fieldsetData] of Object.entries(
              formData.fieldsets
            )) {
              const fieldset = document.getElementById(fieldsetId);
              if (fieldset) {
                fillFieldsetData(fieldset, fieldsetData);
              }
            }
          }, 500);
        }

        alert("Dados carregados com sucesso!");
      } catch (error) {
        console.error("Erro ao carregar o arquivo:", error);
        alert(
          "Erro ao carregar o arquivo. Verifique se é um arquivo JSON válido."
        );
      }
    };
    reader.readAsText(file);
  });

  // Clica no input de arquivo para abrir o seletor
  fileInput.click();

  // Remove o input após o uso
  setTimeout(() => {
    document.body.removeChild(fileInput);
  }, 5000);
}

