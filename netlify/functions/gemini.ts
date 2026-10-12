import { GoogleGenAI } from '@google/genai';

/**
 * Netlify Function: Backend Proxy seguro para la API de Gemini.
 * 
 * SEGURIDAD:
 * - La clave GEMINI_API_KEY se lee exclusivamente en el servidor mediante process.env.GEMINI_API_KEY.
 * - NUNCA expongas claves en variables con prefijo VITE_ ni en el código del navegador.
 * - En Netlify, configura esta clave en: Site configuration > Environment variables > GEMINI_API_KEY.
 */
export default async (req: Request) => {
  // Manejo de CORS preflight (OPTIONS)
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  // Solo permitir solicitudes POST
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Método no permitido. Utiliza POST.' }),
      {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({
        error:
          'GEMINI_API_KEY no configurada. Agrega GEMINI_API_KEY en las variables de entorno de tu sitio en Netlify.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const data = await req.json();
    const prompt = data?.prompt || 'Hola';

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return new Response(
      JSON.stringify({
        text: response.text || '',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: error?.message || 'Error al comunicarse con la API de Gemini',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
};
