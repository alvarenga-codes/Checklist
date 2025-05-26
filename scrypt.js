document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");

    const username = usernameInput.value;
    const password = passwordInput.value;

    // Credenciais pré-definidas (substitua por valores seguros)
    const validUsername = "admin";
    const validPassword = "123456"; // Em produção, use algo mais seguro!

    if (username === validUsername && password === validPassword) {
      // Salva o status de login no localStorage
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html"; // Redireciona para a página principal
    } else {
      message.textContent = "Usuário ou senha inválidos!";
      usernameInput.value = "";
      passwordInput.value = "";
      usernameInput.focus();
    }
  });

// Verifica se o usuário já está logado ao carregar a página
window.onload = function () {
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "index.html";
  }
};
