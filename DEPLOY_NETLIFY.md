# Guía de Despliegue en Netlify — OTHER ESTUDIO

Esta guía contiene todo lo necesario para exportar, compilar y desplegar esta aplicación en **Netlify** de forma segura y profesional.

---

## 1. Cómo exportar o descargar el proyecto desde Google AI Studio

Existen dos métodos principales para llevarte el código fuera de Google AI Studio:

### Método A: Exportar a GitHub (Recomendado)
1. En la esquina superior derecha de la interfaz de Google AI Studio, haz clic en el botón de **Export / GitHub** (o en el menú de opciones `...`).
2. Selecciona **Export to GitHub** (o *Push to GitHub*).
3. Vincula tu cuenta de GitHub y crea un nuevo repositorio (por ejemplo: `other-estudio-web`).
4. Una vez creado el repositorio en GitHub, Netlify podrá conectarse directamente a él y realizar despliegues automáticos cada vez que hagas cambios.

### Método B: Descargar en archivo ZIP
1. Si tu interfaz de AI Studio ofrece la opción de **Download ZIP**, pulsa para descargar todo el contenido.
2. Si prefieres clonarlo por terminal o empaquetarlo localmente:
   ```bash
   # Clonar tu repositorio exportado
   git clone https://github.com/tu-usuario/other-estudio-web.git
   cd other-estudio-web
   ```

---

## 2. Estructura de archivos del proyecto

Los archivos esenciales que componen el proyecto son:

```text
├── netlify.toml                # Configuración de compilación y redirecciones SPA para Netlify
├── package.json                # Dependencias (React 19, Vite, Tailwind CSS, Lucide, etc.)
├── index.html                  # Plantilla HTML principal con tipografías y metadatos SEO
├── vite.config.ts              # Configuración de Vite y Tailwind v4
├── tsconfig.json               # Configuración del compilador TypeScript
├── .env.example                # Plantilla de variables de entorno (sin secretos)
├── public/
│   └── _redirects              # Regla de fallback de Netlify para SPA (/* /index.html 200)
├── netlify/
│   └── functions/
│       └── gemini.ts           # Función Serverless segura para llamar a Gemini en el backend
└── src/
    ├── main.tsx                # Punto de entrada de React
    ├── App.tsx                 # Aplicación principal de OTHER ESTUDIO
    ├── index.css               # Estilos globales con Tailwind CSS
    └── components/
        ├── NoirRestaurantPage.tsx        # Demo interactivo: Restaurante / Cafetería
        ├── VeloraFashionPage.tsx        # Demo interactivo: Tienda de ropa
        ├── VectorLogisticsPage.tsx      # Demo interactivo: Empresa de servicios / Logística
        ├── SonrisaDentalPage.tsx        # Demo interactivo: Marca personal odontológica
        ├── SonrisaDentalClinicPage.tsx  # Demo interactivo: Negocio local
        └── OtraFormaTechPage.tsx        # Demo interactivo: Empresa tecnológica
```

---

## 3. Instalación de dependencias y compilación

En tu máquina local o en el servidor de Netlify:

```bash
# 1. Instalar dependencias
npm install

# 2. Probar en desarrollo local
npm run dev

# 3. Compilar para producción (genera la carpeta dist/)
npm run build

# 4. Probar la versión compilada localmente
npm run preview
```

---

## 4. Opciones de publicación en Netlify

El archivo `netlify.toml` ya está preconfigurado en la raíz del proyecto con:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Redirects:** `/* /index.html 200` (evita errores 404 al recargar)

### Opción 1: Conexión Automática con GitHub (La mejor opción)
1. Inicia sesión en [Netlify](https://app.netlify.com).
2. Haz clic en **"Add new site"** > **"Import an existing project"**.
3. Selecciona **GitHub** y busca tu repositorio.
4. Netlify detectará automáticamente el archivo `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Haz clic en **"Deploy OTHER ESTUDIO"**.
6. ¡Listo! Tu sitio estará activo con HTTPS gratuito y CDN global.

### Opción 2: Netlify Drop (Sin GitHub / Arrastrar y soltar)
1. Ejecuta en tu terminal local:
   ```bash
   npm run build
   ```
2. Ve a [https://app.netlify.com/drop](https://app.netlify.com/drop).
3. Arrastra la carpeta **`dist`** generada a la ventana del navegador.
4. Tu sitio se publicará en segundos.

---

## 5. Análisis de Gemini y Seguridad de la API Key

### ¿Cómo utiliza Gemini el proyecto actualmente?
1. **Estado en el frontend (`src/`):**
   - Todos los demos interactivos actuales (el chat de *Otra Forma*, el cotizador aduanal de *Vector*, el simulador dental de *Sonrisa Dental*, el checkout de *Velora*, etc.) funcionan mediante **estados de React y lógica simulada de alta fidelidad**.
   - **No hay ninguna llamada directa a la API de Gemini dentro del bundle de React.**
   - Esto significa que **puedes desplegar el sitio en Netlify hoy mismo sin necesidad de configurar ninguna clave secreta ni pagar servidores.**

2. **REGLA DE SEGURIDAD CRÍTICA (NUNCA exponer claves en el navegador):**
   - **NUNCA** pongas la clave secreta con prefijos del cliente como `VITE_GEMINI_API_KEY="AIza..."`.
   - Cualquier variable con prefijo `VITE_` es incrustada por Vite directamente en los archivos `.js` públicos. Cualquier visitante podría abrir las Herramientas de Desarrollador del navegador (F12) y robar tu clave para consumir tu saldo.

3. **Arquitectura de Servidor para Gemini en Netlify (Serverless Function):**
   - Para conectar Gemini en vivo de forma 100% segura, hemos configurado una función Serverless en:
     `netlify/functions/gemini.ts`
   - **Cómo funciona el flujo seguro:**
     ```
     [Navegador / React] ── POST sin claves ──> [Netlify Function: /api/gemini]
                                                          │
                                                Lee process.env.GEMINI_API_KEY
                                                          │
                                                          ▼
                                                  [Google Gemini API]
     ```
   - **Configuración de la API Key en Netlify:**
     1. En el panel de control de tu sitio en Netlify, dirígete a:
        **Site configuration** > **Environment variables**.
     2. Haz clic en **"Add a variable"**.
     3. Nombre: `GEMINI_API_KEY`
     4. Valor: Tu clave privada obtenida en Google AI Studio (`AIzaSy...`).
     5. Guarda la variable.
   - En tu código de React, solo necesitas hacer una petición al endpoint backend:
     ```typescript
     const response = await fetch('/.netlify/functions/gemini', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ prompt: 'Tu consulta aquí' }),
     });
     const data = await response.json();
     console.log(data.text);
     ```
   - De esta manera, **la clave secreta nunca abandona el servidor de Netlify**.
