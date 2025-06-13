import { useState, useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

// Use Next.js environment variables
const LANGFLOW_CHAT_FLOW_ID = process.env.NEXT_PUBLIC_LANGFLOW_CHAT_ID;

// Validate environment variable
if (!LANGFLOW_CHAT_FLOW_ID) {
    console.error('NEXT_PUBLIC_LANGFLOW_CHAT_ID environment variable is not set');
}

interface ChatMessage {
    text: string;
    sender: 'user' | 'ai';
    id: number;
}

interface ChatResponse {
    output: string; // Assuming your API returns { output: "AI's response" }
}

interface UseChatbotResult {
    messages: ChatMessage[];
    isLoading: boolean;
    error: string | null;
    sendMessage: (message: string) => Promise<void>;
    resetChat: () => void; // Optional: to clear chat history
}

export const useChatbot = (): UseChatbotResult => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [sessionId, setSessionId] = useState<string | null>(null);

    // Generate a new session ID when the hook is first mounted or if needed
    useEffect(() => {
        if (!sessionId) {
            setSessionId(uuidv4()); // Use uuidv4 consistently
        }
    }, [sessionId]); // Dependency array ensures it only runs once per mount

    const sendMessage = useCallback(async (text: string) => {
        if (!text.trim() || isLoading) return;

        // Validate environment variable before making API call
        if (!LANGFLOW_CHAT_FLOW_ID) {
            setError('Chat configuration error: Missing Langflow Flow ID');
            return;
        }

        const userMessage: ChatMessage = { text: text, sender: 'user', id: Date.now() };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setIsLoading(true);
        setError(null); // Clear previous errors

        try {
            // Use Next.js API route
            const apiEndpoint = '/api/voicechat';

            const response = await axios.post(apiEndpoint, {
                    message: text,
                    flowId: LANGFLOW_CHAT_FLOW_ID,
                    sessionId: sessionId, // Pass the session Id
            },{
                headers:{
                    'Content-Type':'application/json',
                }
            });
                   
            if (response.status !== 200) {
                throw new Error(response.data?.message || `HTTP error! Status: ${response.status}`);
            }

            const data: ChatResponse = response.data;
            const aiMessage: ChatMessage = {
                text: data.output || 'No response from AI.',
                sender: 'ai',
                id: Date.now() + 1, // Use timestamp for unique IDs
            };
            setMessages((prevMessages) => [...prevMessages, aiMessage]);

        } catch (err: any) {
            console.error('Error in useChatbot:', err);
            setError(err.message || 'An unknown error occurred.');
            // Optionally add an error message to chat for user feedback
            const errorMessage: ChatMessage = { text: `Error: ${err.message || 'Failed to get a response.'}`, sender: 'ai', id: Date.now() + 2 };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, sessionId]); // Removed messages.length dependency

    const resetChat = useCallback(() => {
        setMessages([]);
        setSessionId(uuidv4()); // Use uuidv4 consistently
        setError(null);
        setIsLoading(false);
    }, []);

    return { messages, isLoading, error, sendMessage, resetChat };
};