document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const msg = document.getElementById('mensagem');
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (re.test(email)) {
    msg.textContent = 'Email válido!';
    msg.style.color = 'green';
    } else {
    msg.textContent = 'Por favor, insira um email válido.';
    msg.style.color = 'red';
    }
    });
    