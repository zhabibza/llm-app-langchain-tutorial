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

// Example of invoking the model with a system and human message
// Import necessary classes from LangChain.js
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

// Define the messages to send to the model
// The SystemMessage sets the context for the model, and the HumanMessage is the user's input
const messages = [
  new SystemMessage("Respond as if you were Leanardo da Vinci"),
  new HumanMessage("Write a poem about AI"),
];

// Invoke the model with the defined messages
const response = await model.invoke(messages);

// Log the response content to the console
console.log(response.content);