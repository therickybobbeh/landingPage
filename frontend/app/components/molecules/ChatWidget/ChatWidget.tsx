"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button, Card, Form, InputGroup } from 'react-bootstrap';
import { Icon } from '../../atoms';
import styles from './ChatWidget.module.css';

// Define message interface for type safety
interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "👋 Hi there! Ask me anything about Bob's experience, skills, or projects." 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 300);
    }
  }, [isOpen]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setApiError(null); // Clear any error when toggling
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: Message = { role: 'user', content: message.trim() };
    
    // Update messages immutably to trigger proper re-renders
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setMessage('');
    setIsLoading(true);
    setApiError(null); // Clear any previous error

    try {
      // Make the actual API call to the backend
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data._fallback) {
        console.log('Server used fallback response system');
      }
      
      // Add the assistant's response to the messages
      setMessages(prevMessages => [
        ...prevMessages, 
        { role: 'assistant', content: data.message }
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Set error message for UI
      setApiError(error instanceof Error ? error.message : 'Failed to connect to chat service');
      
      // Add error message as assistant message
      setMessages(prevMessages => [
        ...prevMessages, 
        { 
          role: 'assistant', 
          content: "Sorry, I'm having trouble connecting to the chat service. Please try again later." 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatWidgetContainer}>
      {/* Chat Panel */}
      <Card 
        className={`${styles.chatPanel} ${isOpen ? styles.open : ''} shadow mb-2`}
      >
        <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center p-3">
          <div className="d-flex align-items-center">
            <Icon name="chat-fill" className="me-2" color="white" />
            <span className="fw-semibold">Chat with Bob</span>
          </div>
          <Button 
            variant="link"
            className="p-0 text-white"
            onClick={toggleChat}
            aria-label="Close chat"
          >
            <Icon name="x-lg" color="white" />
          </Button>
        </Card.Header>
        
        <div className="d-flex flex-column" style={{ height: '350px' }}>
          {/* Messages area */}
          <div className={styles.messagesContainer}>
            {messages.map((msg, index) => (
              <div 
                key={index}
                className={`d-flex ${msg.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div 
                  className={`${styles.message} rounded-3 p-2 px-3 ${
                    msg.role === 'user' ? styles.userMessage : styles.assistantMessage
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="d-flex justify-content-start">
                <div className="bg-light rounded-3 p-2 px-3 d-flex align-items-center">
                  <div className="spinner-grow spinner-grow-sm text-primary me-2" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <span className="small">Thinking...</span>
                </div>
              </div>
            )}
            {apiError && (
              <div className="alert alert-danger small py-2 mb-0">
                <Icon name="exclamation-triangle-fill" className="me-2" color="danger" />
                Connection error: {apiError}
              </div>
            )}
            <div ref={messagesEndRef}></div>
          </div>
          
          {/* Message input */}
          <div className="p-2 border-top">
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Form.Control
                  ref={inputRef}
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isLoading}
                  aria-label="Type a message"
                />
                <Button 
                  variant="primary" 
                  type="submit"
                  disabled={!message.trim() || isLoading}
                >
                  <Icon name="send" color="white" />
                </Button>
              </InputGroup>
            </Form>
          </div>
        </div>
      </Card>
      
      {/* Chat toggle button */}
      <Button
        variant="primary"
        className={`${styles.chatToggle} rounded-circle d-flex justify-content-center align-items-center`}
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        <Icon 
          name={isOpen ? "chat-fill" : "chat"} 
          color="white"
          size="md"
        />
      </Button>
    </div>
  );
};

export default ChatWidget;