// app/actions/generateLore.ts
'use server'

export async function generateLore(prompt: string, type: string, genre: string) {

    const apiKey = process.env.HUGGINGFACE_API_TOKEN;

    // Construct a more detailed prompt for the AI
    let aiPrompt = ``;

    if (genre && genre !== 'general') {
      aiPrompt += `You are an expert storyteller in the ${genre} genre. `;
    } else {
      aiPrompt += `You are an expert storyteller. `;
    }

    aiPrompt += `Generate a detailed and compelling piece of ${type} lore. Focus on the following core concept: "${prompt}".\n\n`;

    // Add genre-specific instructions
    if (genre === 'fantasy') {
      aiPrompt += `Ensure the lore includes elements typical of high fantasy, such as ancient magic, mythical creatures, epic conflicts, and intricate political structures.`;
    } else if (genre === 'sci-fi') {
      aiPrompt += `Incorporate science fiction elements like advanced technology, space exploration, alien species, future societies, or dystopian themes.`;
    } else if (genre === 'cyberpunk') {
      aiPrompt += `Focus on a gritty, high-tech, low-life setting. Include themes of artificial intelligence, cybernetics, corporate control, and urban decay.`;
    } else if (genre === 'historical') {
      aiPrompt += `Ground the lore in a specific historical period (e.g., medieval, Victorian, ancient Rome) and weave in historically accurate details and societal norms.`;
    } else if (genre === 'horror') {
      aiPrompt += `Infuse the lore with elements of suspense, dread, cosmic horror, psychological terror, or monstrous entities. Maintain a dark and unsettling tone.`;
    }

    // Add more general guidance
    //aiPrompt += `\nMake the lore engaging, evocative, and suitable for a video game setting. It should inspire players and provide a rich backdrop for storytelling.\n\n`;


    const response = await fetch("https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta", {
        method: "POST",
        headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
          inputs: aiPrompt // Use the constructed prompt
        })
    });

    // Handle potential errors from the API
    if (!response.ok) {
        const errorData = await response.json();
        console.error("Hugging Face API Error:", errorData);
        throw new Error(`Failed to generate lore: ${errorData.error || response.statusText}`);
    }

    const data = await response.json()
    return data[0]?.generated_text || "No lore generated."
}