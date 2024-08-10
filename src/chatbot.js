import React, { useState } from 'react';
import './chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');

      // Simulated response (replace with your own AI chatbot logic)
      const response = `You said: ${input}`;
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: response }]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">AI Chatbot</div>
      <div className="chatbot-body">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-footer">
        <input
          type="text"
          className="chatbot-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
