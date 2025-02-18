// Crie um arquivo chamado "script.js" e adicione o seguinte código:

document.addEventListener('DOMContentLoaded', () => {
    const imagem = document.querySelector('.localizacao .imagem');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          imagem.classList.add('visible');
        }
      });
    });
  
    observer.observe(imagem);
  });

  document.addEventListener('DOMContentLoaded', () => {
    const bemVindoDiv = document.getElementById('bem_vindo');
    const savedUsername = localStorage.getItem('username');

    const showWelcomeMessage = (username) => {
        const message = `Bem-vindo__ ${username}!`;
        bemVindoDiv.innerHTML = '';
        message.split('').forEach((char, index) => {
            const charSpan = document.createElement('span');
            charSpan.className = 'bem-vindo-char';
            charSpan.style.animationDelay = `${index * 0.1}s`;
            charSpan.textContent = char;
            bemVindoDiv.appendChild(charSpan);
        });
    };

    if (savedUsername) {
        showWelcomeMessage(savedUsername);
    }

    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        localStorage.setItem('username', username);
        showWelcomeMessage(username);
    });
});