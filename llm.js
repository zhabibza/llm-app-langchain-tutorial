// Example of using the Groq LLM with LangChain.js
// Import the ChatGroq class from LangChain.js
// Ensure you have installed the necessary packages: @langchain/groq and dotenv
import { ChatGroq } from "@langchain/groq";

// Load environment variables from .env file
// Ensure you have a .env file with your Groq API key
import * as dotenv from "dotenv";
dotenv.config();

// Initialize the ChatGroq model and model configuration
const model = new ChatGroq({
  model: "llama-3.3-70b-versatile",
  temperature: 0.7,
})

// Invoke the model with the defined messages
const response0 = await model.invoke("Choose an ancient philosopher. Respond only with their name");

// Log the response content to the console
console.log(response0.content);

// Use the response from the first invocation to ask a follow-up question
// This will use the content of response0 as part of the next question
const response1 = await model.invoke("Who is" + response0.content + " in short?");

// Log the content of the second response to the console
console.log(response1.content);