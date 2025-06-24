// app/actions/generateLore.ts
'use server'

import { GoogleAuth, OAuth2Client } from 'google-auth-library'; // Import OAuth2Client for client type

// --- Type Definitions for API Response ---
interface PredictionInstance {
  prompt: string;
}

interface PredictionParameters {
  temperature: number;
  maxOutputTokens: number;
  // Add other parameters if you use them, e.g., topK?: number; topP?: number;
}

interface PredictionRequestData {
  instances: PredictionInstance[];
  parameters: PredictionParameters;
}

interface PredictionResultContent {
  content?: string;
  // Add other properties if the model's prediction returns more data
}

interface PredictionResponse {
  predictions?: PredictionResultContent[];
  // You might see other top-level properties here like 'metadata', etc.
  [key: string]: unknown; // Allows for additional, unknown properties
}

// --- Service Account Key Type ---
interface ServiceAccountKey {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
  universe_domain?: string; // Optional for newer keys
}

// --- Helper Function for Service Account JSON ---
function getServiceAccountJSON(): ServiceAccountKey {
  const base64 = process.env.GCP_SERVICE_ACCOUNT_KEY_BASE64;
  if (!base64) {
    // Crucial for deployment to ensure env var is set
    console.error('Missing GCP_SERVICE_ACCOUNT_KEY_BASE64 env variable during server action execution.');
    throw new Error('Server configuration error: Google Cloud service account credentials missing.');
  }

  try {
    const jsonString = Buffer.from(base64, 'base64').toString('utf8');
    const parsedJson: ServiceAccountKey = JSON.parse(jsonString);

    // --- ADD THIS CONSOLE.LOG ---
    console.log('Successfully decoded and parsed service account JSON:');
    console.log({
      project_id: parsedJson.project_id,
      client_email: parsedJson.client_email,
      // DO NOT LOG private_key for security reasons
    });

    // --- END CONSOLE.LOG ---


    // Basic validation to ensure it's a service account key
    if (!parsedJson.private_key || !parsedJson.client_email) {
      throw new Error('Decoded JSON is not a valid service account key structure.');
    }
    return parsedJson;
  } catch (error) {
    console.error('Error parsing GCP_SERVICE_ACCOUNT_KEY_BASE64:', error);
    throw new Error('Invalid Google Cloud service account key format.');
  }
}

// --- Main Lore Generation Function ---
export async function generateLore(prompt: string, type: string, genre: string): Promise<string> {
  let client: OAuth2Client; // Explicitly type the client

  try {
    const serviceAccountKey = getServiceAccountJSON(); // Get the parsed JSON (we know this works)

    const auth = new GoogleAuth({
      credentials: serviceAccountKey, // Use the parsed service account key
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    client = await auth.getClient() as OAuth2Client; // Get the authenticated client
  } catch (authError: unknown) {
    console.error("SERVER ERROR: Authentication with Google Cloud failed:", authError);
    console.error("SERVER ERROR: Full authentication error object:", authError);
    throw new Error("Failed to authenticate with Google Cloud. Check credentials.");
  }

    // Ensure projectId is available from environment variables
  const projectId = process.env.GCP_PROJECT_ID;
  if (!projectId) {
    console.error("GCP_PROJECT_ID environment variable not set.");
    throw new Error("Server configuration error: Google Cloud Project ID missing.");
  }

  // Model URL (This looks correct based on Google's pattern for publisher models)
  const url = `https://us-central1-aiplatform.googleapis.com/v1/projects/${projectId}/locations/us-central1/publishers/google/models/text-bison:predict`;

  // --- AI Prompt Construction (Your existing logic, types added for clarity) ---
  let aiPrompt = genre !== 'general'
    ? `You are an expert storyteller in the ${genre} genre. `
    : `You are an expert storyteller. `;
  aiPrompt += `Generate a detailed and compelling piece of ${type} lore. Focus on the following core concept: "${prompt}".\n\n`;

  const genreInstructions: Record<string, string> = {
    fantasy: 'Ensure the lore includes elements typical of high fantasy, such as ancient magic, mythical creatures, epic conflicts, and intricate political structures.',
    'sci-fi': 'Incorporate science fiction elements like advanced technology, space exploration, alien species, future societies, or dystopian themes.',
    cyberpunk: 'Focus on a gritty, high-tech, low-life setting. Include themes of artificial intelligence, cybernetics, corporate control, and urban decay.',
    historical: 'Ground the lore in a specific historical period (e.g., medieval, Victorian, ancient Rome) and weave in historically accurate details and societal norms.',
    horror: 'Infuse the lore with elements of suspense, dread, cosmic horror, psychological terror, or monstrous entities. Maintain a dark and unsettling tone.',
  };

  if (genreInstructions[genre]) {
    aiPrompt += genreInstructions[genre] + '\n\n'; // Add newline for better prompt structure
  }
  // Add a general concluding instruction for word count/tone, as in previous advice
  aiPrompt += `Make the lore engaging, evocative, and suitable for a game setting. Aim for a length of around 200-300 words.`;


  // --- Make the API Request ---
  try {
    const requestBody: PredictionRequestData = {
      instances: [{ prompt: aiPrompt }],
      parameters: {
        temperature: 0.7,
        maxOutputTokens: 300,
        // Optional: topK: 40,
        // Optional: topP: 0.95,
      },
    };

    const res = await client.request<PredictionResponse>({
      url,
      method: 'POST',
      data: requestBody, // Use the typed request body
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Handle API errors more robustly
    if (!res.data) {
        console.error("Vertex AI API returned no data:", res);
        throw new Error("Failed to get a response from Vertex AI.");
    }
    if (res.status && res.status >= 400) {
        console.error(`Vertex AI API Error (Status ${res.status}):`, res.data);
        throw new Error(`Vertex AI API Error: ${JSON.stringify(res.data)}`);
    }

    const result = res.data?.predictions?.[0]?.content;
    return result || 'No lore generated. The AI may have struggled with the prompt or returned an empty response.';

  } catch (apiError) {
    console.error("Error during Vertex AI API call:", apiError);
    // Provide a more user-friendly error message
    if (apiError instanceof Error) {
        throw new Error(`Failed to generate lore: ${apiError.message}. Please check your project settings and try again.`);
    }
    throw new Error("An unknown error occurred during lore generation.");
  }
}