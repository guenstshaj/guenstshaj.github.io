/* const canvas = document.getElementById("matrix-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fonction pour dessiner un circuit abstrait
function drawTechBackground() {
  ctx.fillStyle = "#0d1117"; // fond sombre
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#00ff99"; // vert néon
  ctx.lineWidth = 1.5;

  // Dessiner des lignes façon circuits
  for (let i = 0; i < 60; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const w = Math.random() * 150 + 30;
    const h = Math.random() * 150 + 30;

    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.stroke();
  }

  // Ajouter des "puces électroniques"
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    ctx.fillStyle = "#00ff99";
    ctx.fillRect(x, y, 8, 8);
  }
}

drawTechBackground();

// Redessiner si on resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawTechBackground();
});
 */

const canvas = document.getElementById("matrix-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Icônes informatiques
const icons = ["💻", "🖥", "⌨️", "🖱️", "📁", "📂", "🔒", "⚙️", "🛠️", "🧑‍💻"];

function drawTechBackground() {
  ctx.fillStyle = "#0d1117"; // fond sombre
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#00ff99"; // vert néon
  ctx.lineWidth = 1.2;

  // ---- Circuits (rectangles reliés)
  for (let i = 0; i < 50; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const w = Math.random() * 120 + 40;
    const h = Math.random() * 120 + 40;

    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.stroke();
  }

  // ---- Puces électroniques
  for (let i = 0; i < 30; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    ctx.fillStyle = "#00ff99";
    ctx.fillRect(x, y, 10, 10);
  }

  // ---- Icônes informatiques
  ctx.font = "24px monospace";
  for (let i = 0; i < 20; i++) {
    const icon = icons[Math.floor(Math.random() * icons.length)];
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;

    ctx.fillStyle = "#00ff99";
    ctx.fillText(icon, x, y);
  }
}

// Dessiner une fois
drawTechBackground();

// Redessiner quand on resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawTechBackground();
});
