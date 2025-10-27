
# Letras Mágicas — Extended (Firebase-ready)

Este es un ejemplo extendido del proyecto *Letras Mágicas* (bilingüe ES/EN), preparado para **modo online** (lista para conectar con Firebase).
Incluye:
- selección de idioma (ES/EN)
- niveles por edad (3 niveles)
- sistema simple de recompensas (estrellas)
- lectura guiada con TTS (expo-speech)
- archivo firebase.example.js con la configuración a completar

Cómo usar:
1. Instala Node.js (LTS) y Expo CLI.
2. Copia esta carpeta a tu ordenador.
3. Desde la carpeta, ejecuta `npm install`.
4. Para probar: `npx expo start` (o `npm start`) y escanea el QR con Expo Go.

Conectar Firebase (opcional):
- Crea proyecto en https://console.firebase.google.com
- Añade una app Web, copia credenciales y pégalas en `firebase.js` (sigue firebase.example.js)
- Instala `firebase` si quieres usarlo: `npm install firebase`

Archivos incluidos:
- App.js
- /screens (Home, Game, Settings)
- /lib (i18n, levels)
- firebase.example.js

