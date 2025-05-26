<script>
    // Inicialize o Netlify Identity
    netlifyIdentity.init();

    // Verifica se o usuário já está logado ao carregar a página
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'index.html';
    }

    // Manipula eventos de login
    netlifyIdentity.on('login', user => {
        localStorage.setItem('isLoggedIn', 'true');
        document.getElementById('message').textContent = 'Login bem-sucedido! Redirecionando...';
        window.location.href = 'index.html';
    });

    // Manipula eventos de logout
    netlifyIdentity.on('logout', () => {
        localStorage.removeItem('isLoggedIn');
        document.getElementById('message').textContent = 'Logout realizado.';
        window.location.href = 'login.html';
    });

    // Manipula erros
    netlifyIdentity.on('error', err => {
        document.getElementById('message').textContent = 'Erro: ' + err.message;
    });
</script>
