if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not set in environment variables');
  }
  
  export const config = {
    openaiKey: process.env.OPENAI_API_KEY
  } as const; 