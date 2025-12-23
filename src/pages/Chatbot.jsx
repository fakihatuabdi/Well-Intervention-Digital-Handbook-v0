import React, { useState } from 'react';
import Header from '../components/Header';
import './Chatbot.css';

function Chatbot() {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Hi! Ask anything about the Well Intervention Digital Handbook. I can help summarize procedures, safety steps, or point you to the right chapter.'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) return;

    // Placeholder response. Wire this to your AI backend that is grounded on handbook content.
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: trimmed },
      {
        role: 'assistant',
        content:
          'Thanks for your question! The AI chatbot will use the handbook to answer once connected. Meanwhile, try Search or open the related handbook chapter.'
      }
    ]);
    setQuestion('');
  };

  const quickPrompts = [
    'What are the safety checks before well intervention?',
    'Summarize the wireline operations steps.',
    'What equipment is needed for coiled tubing?',
    'Show me risk controls for slickline work.'
  ];

  return (
    <div className="page">
      <Header title="AI Chatbot" showBack={false} />
      <div className="chatbot-page">
        <section className="chatbot-hero">
          <div className="chatbot-hero-content">
            <p className="chatbot-badge">Assistant</p>
            <h2 className="chatbot-title">Ask the Handbook</h2>
            <p className="chatbot-subtitle">
              Ask anything about procedures, equipment, or safety. The assistant is designed to learn from the digital handbook.
            </p>
            <div className="chatbot-pills">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="chatbot-pill"
                  onClick={() => setQuestion(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="chatbot-panel">
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-message ${msg.role}`}>
                <div className="chatbot-message-role">{msg.role === 'assistant' ? 'Assistant' : 'You'}</div>
                <div className="chatbot-message-body">{msg.content}</div>
              </div>
            ))}
          </div>

          <form className="chatbot-input" onSubmit={handleSubmit}>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Type your question about the handbook..."
            />
            <button type="submit">Send</button>
          </form>

          <p className="chatbot-hint">
            Note: Connect this form to your AI service with handbook grounding for real answers.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Chatbot;
