import React, { useState } from 'react';
import Groq from 'groq-sdk';
import './App.css';

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [...messages, userMessage],
        model: 'llama3-8b-8192',
        temperature: 0.7,
        max_tokens: 1024,
      });

      const assistantMessage = {
        role: 'assistant',
        content: chatCompletion.choices[0]?.message?.content || 'No response'
      };

      setMessages([...messages, userMessage, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        role: 'assistant',
        content: 'Sorry, there was an error processing your request.'
      };
      setMessages([...messages, userMessage, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="chat-header">
          <h1>Groq AI Chat</h1>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
            >
              <strong>{message.role === 'user' ? 'You' : 'AI'}:</strong>
              <p>{message.content}</p>
            </div>
          ))}
          {isLoading && (
            <div className="message assistant-message">
              <strong>AI:</strong>
              <p>Typing...</p>
            </div>
          )}
        </div>
        <form onSubmit={sendMessage} className="chat-input-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="chat-input"
          />
          <button type="submit" disabled={isLoading} className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
