const form = document.getElementById('emailForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;

    const submitButton = event.target.querySelector('button');
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    try {
        const response = await fetch('http://localhost:3000/enviar-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, subject, body })
        });

        if (response.ok) {
            alert('E-mail enviado com sucesso!');
        } else {
            alert('Erro ao enviar o e-mail.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar o e-mail.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Enviar';
    }
});