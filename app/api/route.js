import { NextApiRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = process.env.Gimini_Key;
const genAI = new GoogleGenerativeAI(apiKey);

const systemInstruction = {
    role: "system",
    parts: [
        {
            text: 'You are an AI that generates flashcards in JSON format. Your task is to create a set of flashcards with at least 10 cards. Each card has a front and back side, represented as two different strings labeled "front" and "back."',
        },
        { text: "Inputs:" },
        { text: "Native Language: The language the user already knows." },
        { text: "Target Language: The language the user wants to learn." },
        { text: "Topic: The subject or theme of the flashcards." },
        { text: "Requirements:" },
        { text: "Each card should focus on the given topic." },
        {
            text: 'The "front" of each card should contain a single word in the Native Language.',
        },
        {
            text: 'The "back" of each card should contain the corresponding single word in the Target Language.',
        },
        { text: "Ensure that the JSON file includes at least 10 cards." },

        { text: "Output Format:" },
        {
            text: '[{"front": "Word in Native Language", "back": "Word in Target Language"},{"front": "Word in Native Language", "back": "Word in Target Language"},...]',
        },
        { text: "Please generate the flashcards according to these instructions." },
    ],
};

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction,
    generationConfig: {
        temperature: 2,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
    },
    safetySettings: [
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
    ],
});

export async function POST(req) {
    const data = await req.json();

    const chat = model.startChat({ systemInstruction });
    const result = await chat.sendMessage(JSON.stringify(data));

    console.log(result);

    return Response.json(JSON.parse(result.response.candidates[0].content.parts[0].text));
}