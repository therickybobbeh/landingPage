'use client';

import { useState, FormEvent } from 'react';
import { submitContactMessage, MessageFormData } from '../utils/api';

export default function ContactForm() {
  const [formData, setFormData] = useState<MessageFormData>({
    name: '',
    email: '',
    subject: '',
    content: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    
    try {
      await submitContactMessage(formData);
      setSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        content: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong while submitting your message.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div id="contact" className="py-16 px-4 md:px-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
      
      {success && (
        <div className="mb-8 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-md">
          <p className="font-medium">Message sent successfully!</p>
          <p className="text-sm mt-1">Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      )}
      
      {error && (
        <div className="mb-8 p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-md">
          <p className="font-medium">Error sending message</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="How can I help you?"
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="content"
            name="content"
            rows={5}
            value={formData.content}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message here..."
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}