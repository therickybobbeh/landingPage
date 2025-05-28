"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button, Card, Form, InputGroup, Badge } from 'react-bootstrap';
import { Icon } from '../../atoms';
import styles from './ChatWidget.module.css';

// Define message interface for type safety
interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Function to get the API URL based on environment
const getApiUrl = () => {
  // For production in Azure Static Web Apps, use the relative API route which will be properly proxied
  if (process.env.NEXT_PUBLIC_AZURE_STATIC_WEB_APPS === 'true') {
    return '/api/chat';
  }
  
  // For local development, use the local Azure Functions endpoint
  return process.env.NEXT_PUBLIC_FUNCTION_API_URL || 'http://localhost:7071/api/chat';
};

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
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 300);
    }
  }, [isOpen]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Listen for the custom event to toggle the chat widget
  useEffect(() => {
    const handleToggleChat = () => {
      setIsOpen(prevIsOpen => !prevIsOpen);
      setApiError(null); // Clear any error when toggling
    };

    window.addEventListener('toggle-chat-widget', handleToggleChat);
    
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('toggle-chat-widget', handleToggleChat);
    };
  }, []);

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
      // Make the API call to the appropriate endpoint based on environment
      const response = await fetch(getApiUrl(), {
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
        className={`${styles.chatPanel} ${isOpen ? styles.open : ''} shadow border-0 rounded-3 overflow-hidden`}
      >
        <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center p-3">
          <div className="d-flex align-items-center">
            <Icon name="chat-fill" className="me-2" color="white" />
            <span className="fw-semibold">Chat with Robert</span>
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
          <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column gap-3">
            {messages.map((msg, index) => (
              <div 
                key={index}
                className={`d-flex ${msg.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="avatar me-2 align-self-end">
                    <Badge bg="primary" className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                      <Icon name="person" color="white" size="sm" />
                    </Badge>
                  </div>
                )}
                <div 
                  className={`p-3 rounded-3 ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-bottom-end-0' 
                      : 'bg-light text-dark rounded-bottom-start-0'
                  }`}
                  style={{ 
                    maxWidth: '75%',
                    boxShadow: '0 1px 2px rgba(0,0,0,.1)',
                    wordBreak: 'break-word'
                  }}
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="avatar ms-2 align-self-end">
                    <Badge bg="secondary" className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                      <Icon name="person" color="white" size="sm" />
                    </Badge>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="d-flex justify-content-start">
                <div className="bg-light rounded-3 p-3 d-flex align-items-center">
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