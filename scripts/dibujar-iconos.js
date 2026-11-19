// Dibuja las imágenes base del ícono y de la pantalla de inicio (splash) de la app de Android,
// con el cochecito blanco sobre el degradé rosa → lila de MamaSegui.
// Después "capacitor-assets" arma todos los tamaños que pide Android. Se ejecuta con: npm run iconos
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");   // viene con @capacitor/assets

const carpeta = path.join(__dirname, "..", "assets");
fs.mkdirSync(carpeta, { recursive: true });

const degrade = `<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
  <stop offset="0" stop-color="#c2557a"/><stop offset="1" stop-color="#7d5ba6"/></linearGradient>`;

// Cochecito (el mismo dibujo del encabezado), centrado en (cx, cy) y agrandado "escala" veces
const cochecito = (cx, cy, escala) => `
  <g transform="translate(${cx} ${cy}) scale(${escala}) translate(-11 -12.5)"
     fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 5h2.5l2 7h11a6.5 6.5 0 0 0-6.5-6.5H11V12"/>
    <circle cx="9" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>
  </g>`;

const imagenes = {
  // Ícono completo (para Android viejo)
  "icon-only.png": [1024, `<defs>${degrade}</defs><rect width="1024" height="1024" fill="url(#g)"/>${cochecito(512, 512, 26)}`],
  // Ícono adaptable (Android 8+): fondo y dibujo por separado; el dibujo dentro de la zona segura
  "icon-background.png": [1024, `<defs>${degrade}</defs><rect width="1024" height="1024" fill="url(#g)"/>`],
  "icon-foreground.png": [1024, cochecito(512, 512, 22)],
  // Pantalla de inicio: fondo claro y el ícono redondeado al medio
  "splash.png": [2732, `<defs>${degrade}</defs><rect width="2732" height="2732" fill="#faf6f9"/>
    <rect x="1066" y="1066" width="600" height="600" rx="140" fill="url(#g)"/>${cochecito(1366, 1366, 15)}`],
  "splash-dark.png": [2732, `<defs>${degrade}</defs><rect width="2732" height="2732" fill="#2a1f2e"/>
    <rect x="1066" y="1066" width="600" height="600" rx="140" fill="url(#g)"/>${cochecito(1366, 1366, 15)}`]
};

(async () => {
  for (const [nombre, [lado, contenido]] of Object.entries(imagenes)) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${lado}" height="${lado}" viewBox="0 0 ${lado} ${lado}">${contenido}</svg>`;
    await sharp(Buffer.from(svg)).png().toFile(path.join(carpeta, nombre));
    console.log("✓ assets/" + nombre);
  }
})();
