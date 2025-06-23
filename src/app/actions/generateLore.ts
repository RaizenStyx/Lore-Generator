// app/actions/generateLore.ts
'use server'

import { GoogleAuth } from 'google-auth-library'

interface PredictionResponse {
    predictions?: Array<{ content?: string }>;
}

export async function generateLore(prompt: string, type: string, genre: string): Promise<string> {
  const auth = new GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS, // e.g., "./service-account.json"
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  })

  const client = await auth.getClient()
  const projectId = process.env.GCP_PROJECT_ID
  const url = `https://us-central1-aiplatform.googleapis.com/v1/projects/${projectId}/locations/us-central1/publishers/google/models/text-bison:predict`

  const genreInstructions: Record<string, string> = {
    fantasy: 'Ensure the lore includes elements typical of high fantasy, such as ancient magic, mythical creatures, epic conflicts, and intricate political structures.',
    scifi: 'Incorporate science fiction elements like advanced technology, space exploration, alien species, future societies, or dystopian themes.',
    cyberpunk: 'Focus on a gritty, high-tech, low-life setting. Include themes of artificial intelligence, cybernetics, corporate control, and urban decay.',
    historical: 'Ground the lore in a specific historical period (e.g., medieval, Victorian, ancient Rome) and weave in historically accurate details and societal norms.',
    horror: 'Infuse the lore with elements of suspense, dread, cosmic horror, psychological terror, or monstrous entities. Maintain a dark and unsettling tone.',
  }

  const baseIntro = genre && genre !== 'general'
    ? `You are an expert storyteller in the ${genre} genre. `
    : 'You are an expert storyteller. '

  const aiPrompt = [
    baseIntro,
    `Generate a detailed and compelling piece of ${type} lore. Focus on the following core concept: "${prompt}".\n\n`,
    genreInstructions[genre] || ''
  ].join('')

  const res = await client.request<PredictionResponse>({
    url,
    method: 'POST',
    data: {
      instances: [{ prompt: aiPrompt }],
      parameters: {
        temperature: 0.7,
        maxOutputTokens: 300,
      },
    },
  })

  return res.data?.predictions?.[0]?.content ?? 'No lore generated.'
}