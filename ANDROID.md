# MamaSegui para Android (Capacitor)

MamaSegui es una app independiente: su web se publica en https://maximus163.github.io/mamasegui/
y la app de Android usa exactamente las mismas páginas (carpeta `public/`).
La carpeta `android/` es el proyecto de Android Studio. App id: `com.mamasegui.app`.

## Requisitos (una sola vez)
- Node.js y Android Studio instalados.
- En esta carpeta: `npm install`

## Generar el APK
1. `npm run android`: pasa los cambios de `public/` al proyecto Android.
   Hacelo **cada vez** que cambies algo en la app.
2. `npm run abrir-android`: abre Android Studio. La primera vez esperá a que termine "Gradle sync" (abajo).
3. Menú **Build > Generate App Bundles or APKs > Generate APKs**.
4. Cuando termine, tocá **locate**: el archivo es `android/app/build/outputs/apk/debug/app-debug.apk`.
5. Pasalo al celular (cable, Drive, WhatsApp) y abrilo. Android pide permitir "instalar apps desconocidas".

Sin abrir Android Studio (desde la terminal, en la carpeta `android`), con el Java de Android Studio:
```
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
.\gradlew.bat assembleDebug
```

## Íconos y pantalla de inicio
Se dibujan con `scripts/dibujar-iconos.js` (cochecito blanco sobre el degradé rosa → lila).
Si cambiás el dibujo o los colores: `npm run iconos` y después `npm run android`.

## Para publicar en Google Play
El APK "debug" sirve para probar. Para Play Store hace falta una versión firmada:
**Build > Generate Signed App Bundle or APK** (crea una "keystore": guardala bien, sin ella no se puede actualizar la app).

## Notas
- Ya tiene instalado el plugin de notificaciones y sus permisos, listo para usar
  (por ejemplo, para recordar los turnos de "Mis controles").
- `public/capacitor.js` lo copia `npm run android`: no se sube a GitHub ni hace falta en la web.
- Esta MamaSegui empezó como copia de `C:\practica-claude\mamasegui`, pero es un proyecto aparte:
  los cambios en una no aparecen solos en la otra.
