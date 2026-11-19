// Copia capacitor.js adentro de public/ para la app de Android.
// Permite que la página use los plugins (por ejemplo, notificaciones) dentro de la app.
// En la web no hace falta: está en .gitignore y no se publica. Lo ejecuta "npm run android".
const fs = require("fs");
const path = require("path");

const raiz = path.join(__dirname, "..");
fs.copyFileSync(path.join(raiz, "node_modules", "@capacitor", "core", "dist", "capacitor.js"),
                path.join(raiz, "public", "capacitor.js"));
console.log("✓ capacitor.js copiado en public/");
