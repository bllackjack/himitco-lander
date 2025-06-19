'use client';

import React, { useState, FormEvent, useEffect, useRef } from 'react';
import { useChatbot } from '@/hooks/useChatbot';
import { useTextToSpeech } from '@/hooks/useTextToSpeech';
import useSpeechToText from '@/hooks/useSpeechToText';
import { AiOutlineAudioMuted, AiOutlineAudio, AiOutlineRedo, AiOutlineSend } from "react-icons/ai";
import ReactMarkdown from 'react-markdown';

export default function ChatPage() {

    const lastSpokenMessageId = useRef<number | null>(null);
    const { messages, isLoading, error, sendMessage, resetChat } = useChatbot();
    const {
        transcript,
        listening,
        toggleListening,
        stopListening
    } = useSpeechToText();

    const { speak,
        cancel,
        speaking,
        supported } = useTextToSpeech();

    const [input, setInput] = useState<string>('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const prevMessagesLength = useRef<number>(0);

    useEffect(() => {
        // Only scroll if there are messages and the number of messages has increased
        if (messages.length > 0 && messages.length > prevMessagesLength.current) {
            // Use a small delay to ensure the DOM has updated
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end'
                   
                });
            }, 100);
        }
        prevMessagesLength.current = messages.length;
    }, [messages]);

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling

        if (listening) {
            stopListening();
        }
        if (!speaking) {
            cancel();
        }

        const currentInput = input;
        setInput(''); // Clear input immediately

        if (currentInput.trim()) {
            await sendMessage(currentInput);
        }
    };

    useEffect(() => {
        if (!transcript || !listening) return;

        const debounceTimeout = setTimeout(async () => {
            stopListening();       // Stop mic
            if (!speaking) cancel(); // Cancel any ongoing speech
            await sendMessage(transcript);  // Send message
            setInput('');          // Clear input
        }, 1000); //  debounce

        return () => clearTimeout(debounceTimeout); // Clear timeout on next transcript change
    }, [transcript, listening, stopListening, speaking, cancel, sendMessage]);

    useEffect(() => {
        if (supported && messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.sender === 'ai' && lastMessage.id !== lastSpokenMessageId.current) {
                if (speaking) {
                    cancel();
                }
                // speak(lastMessage.text);
                // lastSpokenMessageId.current = lastMessage.id;
            }
        }
    }, [messages, supported, speaking, speak, cancel]);

    const suggestedMessages = [
        "What services do you offer?",
        "How can I contact support?",
        "Tell me about your pricing.",
    ];

    return (
        <div className="flex flex-col h-full w-full bg-gray-100 rounded-lg items-center justify-center overflow-hidden">
            <div className="flex flex-col w-full max-w-full bg-[#171717] shadow-lg rounded-lg h-full overflow-hidden">
                <div className="p-2 sm:p-4 border-b text-gradient border-gray-900 text-center text-2xl sm:text-5xl font-semibold flex-shrink-0">
                    Chat With Us — We're Here to Help!
                </div>

                <div className="flex-1 p-2 sm:p-4 overflow-y-auto h-full border-2 border-b-0 border-neon-cyan rounded-lg space-y-3 sm:space-y-4 max-h-[calc(100vh-200px)] scroll-smooth custom-scrollbar">
                    {messages.length === 0 && !isLoading && !error && (
                        <div className="text-center flex flex-col justify-between h-[95%] text-grey-700  overflow-hidden text-sm sm:text-base">
                            <div className='flex flex-col '>
                            <h1 className='font-semibold text-grey-500 text-xl'> AI-Powered Solutions for Smarter Business</h1>
                                <span className='text-m'>I'm here to help with your business queries, support, and insights. </span>
                                <span className='text-m'>Type a question to get started or click one below!</span>
                            </div>
                                
                            <div className="flex flex-wrap justify-center gap-4  ">
                                {suggestedMessages.map((msg, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setInput('');
                                            sendMessage(msg);
                                        }}
                                        className="sm:max-w-xs px-3 md:max-w-2xl sm:px-4 py-2 border-2 border-neon-cyan rounded-lg text-sm sm:text-base bg-black text-white   hover:shadow-lg hover:shadow-neon-cyan "
                                    >
                                        {msg}
                                    </button>
                                ))}
                            </div>

                        </div>

                    )}
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`prose prose-sm sm:prose-base max-w-[80%] sm:max-w-xs md:max-w-2xl px-3 sm:px-4 py-2 border-2 border-neon-cyan rounded-lg ${msg.sender === 'user'
                        ? 'bg-black text-white'
                        : 'bg-gray-300 text-gray-800 dark:prose-invert'
                        }`}>
                        {msg.sender === 'ai' ? (
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        ) : (
                          msg.text
                        )}
                      </div>
                    </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="max-w-[80%] sm:max-w-xs px-3 sm:px-4  md:max-w-2xl border-2 border-neon-cyan py-2 rounded-lg bg-gray-300 text-gray-800 text-sm sm:text-base">
                                Thinking...
                            </div>
                        </div>
                    )}
                    {error && (
                        <div className="text-red-500 text-center mt-4 text-sm sm:text-base">
                            <h1>Try again Later</h1>
                        </div>
                    )}
                    <div ref={messagesEndRef} /> {/* For auto-scrolling */}
                </div>

                <form onSubmit={handleFormSubmit} className="p-2 sm:p-4 border-r-2 border-l-2 border-b-2 border-neon-cyan rounded-lg flex flex-col sm:flex-row justify-center gap-2 sm:space-x-2 flex-shrink-0">
                    <input
                        type="text"
                        value={input || transcript}
                        onChange={(e) => {
                            if (!listening) {
                                setInput(e.target.value);
                            }
                        }}
                        placeholder="Type your message..."
                        className="flex-1 p-2 sm:p-3 text-white bg-[#171717] border border-neon-cyan rounded-lg focus:shadow-neon-cyan/20 focus:outline-none focus:ring-2 sm:focus:ring-5 focus:ring-neon-cyan-500 text-sm sm:text-base"
                        disabled={isLoading}
                    />

                    <div className="flex gap-2 sm:gap-0 border-neon-cyan sm:space-x-2">
                        {/* <button
                            type="button"
                            onClick={toggleListening}
                            className="flex-1 sm:flex-none border border-neon-cyan px-3 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 text-sm sm:text-base"
                            disabled={isLoading}
                        >
                            {listening ? <AiOutlineAudio className="w-4 h-4 sm:w-5 sm:h-5" /> : <AiOutlineAudioMuted className="w-4 h-4 sm:w-5 sm:h-5" />}
                        </button> */}
                        <button
                            type="submit"
                            className="flex-1 sm:flex-none border border-neon-cyan px-3 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 text-sm sm:text-base"
                            disabled={isLoading}
                        >
                            <AiOutlineSend className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button
                            type="button"
                            onClick={resetChat}
                            className="flex-1 sm:flex-none border border-neon-cyan px-3 sm:px-8 py-2 sm:py-4 rounded-lg font-semibold text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300 text-sm sm:text-base"
                        >
                            <AiOutlineRedo className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}