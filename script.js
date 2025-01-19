// Função para disparar o confete dourado
function showConfetti() {
    console.log('Confetti function triggered!'); // Log para depuração
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#ffcc00', '#ff9900'], // Dourado
        gravity: 1,
        scalar: 1.2,
    });
}

// Garante que o DOM está carregado antes de adicionar o evento
document.addEventListener('DOMContentLoaded', () => {
    const btnPresenca = document.getElementById('presenca-btn');
    if (btnPresenca) {
        console.log('Button found! Adding click event listener.'); // Log para depuração
        btnPresenca.addEventListener('click', (event) => {
            event.preventDefault();
            showConfetti();
        });
    } else {
        console.error('Button with ID "presenca-btn" not found!'); // Log de erro
    }
});
