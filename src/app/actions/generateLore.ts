// app/actions/generateLore.ts
'use server'

import { GoogleAuth } from 'google-auth-library'

export async function generateLore(prompt: string, type: string, genre: string) {
  const auth = new GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS, // e.g., "./service-account.json"
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  })

  const client = await auth.getClient()
  const projectId = process.env.GCP_PROJECT_ID

  const url = `https://us-central1-aiplatform.googleapis.com/v1/projects/${projectId}/locations/us-central1/publishers/google/models/text-bison:predict`

  // Build the structured prompt
  let aiPrompt = ''

  if (genre && genre !== 'general') {
    aiPrompt += `You are an expert storyteller in the ${genre} genre. `
  } else {
    aiPrompt += `You are an expert storyteller. `
  }

  aiPrompt += `Generate a detailed and compelling piece of ${type} lore. Focus on the following core concept: "${prompt}".\n\n`

  if (genre === 'fantasy') {
    aiPrompt += `Ensure the lore includes elements typical of high fantasy, such as ancient magic, mythical creatures, epic conflicts, and intricate political structures.`
  } else if (genre === 'sci-fi') {
    aiPrompt += `Incorporate science fiction elements like advanced technology, space exploration, alien species, future societies, or dystopian themes.`
  } else if (genre === 'cyberpunk') {
    aiPrompt += `Focus on a gritty, high-tech, low-life setting. Include themes of artificial intelligence, cybernetics, corporate control, and urban decay.`
  } else if (genre === 'historical') {
    aiPrompt += `Ground the lore in a specific historical period (e.g., medieval, Victorian, ancient Rome) and weave in historically accurate details and societal norms.`
  } else if (genre === 'horror') {
    aiPrompt += `Infuse the lore with elements of suspense, dread, cosmic horror, psychological terror, or monstrous entities. Maintain a dark and unsettling tone.`
  }

  interface PredictionResponse {
    predictions?: { content?: string }[];
    [key: string]: any;
  }

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

  const result = res.data?.predictions?.[0]?.content;
  return result || 'No lore generated.';
}
