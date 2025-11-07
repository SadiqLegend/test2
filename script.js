/* ------------------ Promise Garden ------------------ */
const flowersEl = document.getElementById("flowers");
const promises = [
  "I promise to keep you akdam sajiya, like my princess — always loved, always cherished. 👑",
  "I promise to love you unconditionally, through every mood, every storm, every season.",
  "I promise to love you more… more, more, and more — forever and beyond.",
  "I promise I’ll make you the happiest girl in the world, because you already make me the happiest soul alive.",
  "I promise to stand by you, jaan, in every storm, every step, every up and every down of your life.",
  "I promise I am only yours — forever, mammaa. ❤️"
];

promises.forEach((promise, index) => {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.style.left = `${10 + index * 15}%`;
  flower.innerHTML = "🌸";
  flower.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("promise-modal");
    modal.innerHTML = `<div class='promise-content'><p>${promise}</p><button class='close-btn'>Close</button></div>`;
    document.body.appendChild(modal);
    modal.querySelector(".close-btn").addEventListener("click", () => modal.remove());
  });
  flowersEl.appendChild(flower);
});

const lastMessage = document.createElement("div");
lastMessage.classList.add("final-message");
lastMessage.innerHTML = `<p>I love you, mamma... forever yours 💞</p>`;
flowersEl.appendChild(lastMessage);

/* Playlist */
const playlistEl = document.getElementById("playlist");
playlistEl.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3hApyG8OiNp1ZvCnHwmd4K?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;

/* Sky */
const skyEl = document.getElementById("sky");
const sadiq = { lat: 22.365325, lon: 88.284981 };
const ishita = { lat: 22.396479, lon: 88.277160 };
skyEl.innerHTML = `<h2>Under the Same Sky</h2><p>No matter where we are, we’re always looking up at the same stars 🌌<br>My sky (Sadiq): (${sadiq.lat}, ${sadiq.lon})<br>Your sky (Ishita): (${ishita.lat}, ${ishita.lon})</p><canvas id='starCanvas'></canvas>`;

const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = 300;
function drawStars() {
  for (let i = 0; i < 150; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const r = Math.random() * 1.5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${Math.random()})`;
    ctx.fill();
  }
}
drawStars();

/* Background Music */
const bgMusic = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_3a6b3c0731.mp3?filename=soft-piano-romance.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5;
document.body.addEventListener("click", () => { if (bgMusic.paused) bgMusic.play(); });

/* Ending */
const endingEl = document.getElementById("ending");
endingEl.innerHTML = `<h2>Distance can’t dim our light ✨</h2><p>Happy Birthday, my love Ishita. You are my forever, my peace, and my everything. — Sadiq 💞</p><button id='returnBtn'>Return to Our Garden 🌷</button>`;
document.getElementById("returnBtn").addEventListener("click", () => {
  document.getElementById("promise-garden").scrollIntoView({ behavior: "smooth" });
});
