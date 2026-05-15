import { GoogleGenAI, Type } from "@google/genai";

// Standard initialization for Vite environment
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface SEOContentRequest {
  currentText: string;
  targetKeyword: string;
  topic: string;
  intent: "transactional" | "informational";
  audience: string;
}

/**
 * SEO Optimizer Gem
 * Analyzes intent, keywords, and competitor patterns to optimize content.
 */
export const optimizeContentForSEO = async (request: SEOContentRequest): Promise<string> => {
  const { currentText, targetKeyword, topic, intent, audience } = request;

  const prompt = `
    Eres un experto en SEO Copywriting y optimización de contenido transaccional.
    
    OBJETIVO:
    Optimizar el siguiente texto para que sea altamente persuasivo, orientado a la conversión (transaccional) y esté perfectamente posicionado para la palabra clave: "${targetKeyword}".
    
    CONTEXTO:
    - Tema: ${topic}
    - Intencionalidad: ${intent} (Particular que busca contratar una reforma)
    - Audiencia: ${audience} (Propietarios de viviendas en Burgos y alrededores)
    
    TEXTO ACTUAL:
    """
    ${currentText}
    """
    
    REQUISITOS DE OPTIMIZACIÓN (TF*IDF & Persuasión):
    1. Incluye la palabra clave principal "${targetKeyword}" de forma natural pero estratégica (H1/H2, primer párrafo).
    2. Utiliza variaciones semánticas (LSI) y palabras clave secundarias como: "presupuesto sin compromiso", "empresa de reformas en Burgos", "calidad garantizada", "cumplimiento de plazos", "reforma integral de piso".
    3. Enfócate en el beneficio para el particular: tranquilidad, ahorro, revalorización de la vivienda, acabados de lujo.
    4. Usa un tono profesional pero cercano, eliminando frases genéricas y sustituyéndolas por propuestas de valor únicas (Unique Selling Points).
    5. Asegura que la llamada a la acción (CTA) sea potente y clara.
    
    FORMATO DE SALIDA:
    Devuelve únicamente el texto optimizado en formato Markdown, estructurado adecuadamente con encabezados si es necesario.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return response.text || currentText;
  } catch (error) {
    console.error("Error optimizing content:", error);
    return currentText;
  }
};

/**
 * Competitor Analysis Gem
 * Generates SEO insights based on competitor patterns.
 */
export const analyzeCompetitorsSEO = async (query: string): Promise<string> => {
  const prompt = `
    Analiza la intención de búsqueda y los patrones SEO para la consulta: "${query}".
    Simula el análisis de los 3 mejores resultados orgánicos para esta búsqueda en Google España.
    
    Identifica:
    1. Palabras clave TF*IDF más frecuentes.
    2. Estructura de encabezados (H1-H3) ganadora.
    3. Propuestas de valor que más convierten.
    4. Gaps de contenido que podemos aprovechar.
    
    Devuelve un resumen estratégico para usar en la redacción de contenidos del sitio web "Burgos Reformas Integrales".
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return response.text || "No se pudo realizar el análisis.";
  } catch (error) {
    console.error("Error analyzing competitors:", error);
    return "Error en el análisis de competencia.";
  }
};
