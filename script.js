// Music
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = 'Pause Our Song 🎶';
  } else {
    music.pause();
    musicBtn.textContent = 'Play Our Song 🎶';
  }
});

document.body.addEventListener('click', () => music.muted = false, { once: true });

// Floating Hearts
function createFloatingHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = Math.random() > 0.6 ? '❤️' : Math.random() > 0.3 ? '💗' : '💞';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (1 + Math.random() * 2.2) + 'rem';
  heart.style.animationDuration = (6 + Math.random() * 10) + 's';
  heart.style.animationDelay = Math.random() * 6 + 's';
  document.querySelector('.hearts-container').appendChild(heart);
  setTimeout(() => heart.remove(), 16000);
}
setInterval(createFloatingHeart, 350);

// Heart Burst
function createHeartBurst() {
  const container = document.querySelector('.heart-burst-container');
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const count = 45;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    const angle = Math.random() * 360;
    const dist = 180 + Math.random() * 420;
    const x = Math.cos(angle * Math.PI / 180) * dist;
    const y = Math.sin(angle * Math.PI / 180) * dist;
    const rot = Math.random() * 1080 - 540;

    heart.style.setProperty('--x', x + 'px');
    heart.style.setProperty('--y', y + 'px');
    heart.style.setProperty('--rot', rot + 'deg');
    heart.style.left = centerX + 'px';
    heart.style.top = centerY + 'px';
    heart.style.fontSize = (1.4 + Math.random() * 2.5) + 'rem';
    heart.style.animationDelay = Math.random() * 0.5 + 's';

    container.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}

// Yes & No
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

yesBtn.addEventListener('click', () => {
  response.classList.remove('hidden');
  noBtn.style.display = 'none';
  yesBtn.style.display = 'none';
  createHeartBurst();
  // Extra burst after 0.5s
  setTimeout(createHeartBurst, 500);
});

noBtn.addEventListener('click', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 150);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 150);
  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
  createHeartBurst(); // No-তেও burst
});
