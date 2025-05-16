const targetDate = new Date('2025-05-23T12:00:00-04:00');

const countdown = setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(countdown);

    // Some com o cronômetro
    document.getElementById('countdown').style.display = 'none';

    // Mostra o link da surpresa
    const link = document.createElement('a');
    link.href = 'https://fabyolaldenadai.github.io/PatetaGift/';
    link.textContent = '🎁 Haz clic aquí para ver tu sorpresa 🎁';
    link.className = 'btn';

    document.body.appendChild(link);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}, 1000);
