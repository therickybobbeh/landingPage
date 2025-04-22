'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Types for message data
type Message = {
  id: number;
  name: string;
  email: string;
  subject?: string;
  content: string;
  is_read: boolean;
};

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const router = useRouter();

  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    fetchMessages();
  }, [router]);

  // Function to fetch messages from the API
  async function fetchMessages() {
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      const queryParam = filter !== 'all' ? `?is_read=${filter === 'read'}` : '';
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/messages${queryParam}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 401) {
        // Token expired or invalid
        localStorage.removeItem('token');
        router.push('/login');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }

      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  // Function to mark message as read
  async function markAsRead(id: number) {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/messages/${id}/read`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to mark message as read');
      }

      // Update local state
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === id ? { ...msg, is_read: true } : msg
        )
      );

      // Update selected message if open
      if (selectedMessage?.id === id) {
        setSelectedMessage({ ...selectedMessage, is_read: true });
      }
    } catch (err) {
      console.error('Error marking message as read:', err);
    }
  }

  // Function to delete a message
  async function deleteMessage(id: number) {
    if (!window.confirm('Are you sure you want to delete this message?')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/messages/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete message');
      }

      // Update local state
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== id)
      );

      // Clear selected message if open
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
    } catch (err) {
      console.error('Error deleting message:', err);
    }
  }

  // Function to handle logout
  function handleLogout() {
    localStorage.removeItem('token');
    router.push('/login');
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
            >
              Logout
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-md">
              {error}
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Messages</h2>

              <div className="flex space-x-2">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                  className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                >
                  <option value="all">All Messages</option>
                  <option value="unread">Unread Only</option>
                  <option value="read">Read Only</option>
                </select>
                <button
                  onClick={() => fetchMessages()}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                >
                  Refresh
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Message list */}
              <div className="md:w-1/3 border-r border-gray-200 dark:border-gray-700">
                {loading ? (
                  <div className="p-6 text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <p className="mt-2">Loading messages...</p>
                  </div>
                ) : messages.length === 0 ? (
                  <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                    No messages found
                  </div>
                ) : (
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[600px] overflow-y-auto">
                    {messages.map((message) => (
                      <li key={message.id}>
                        <button
                          onClick={() => {
                            setSelectedMessage(message);
                            if (!message.is_read) {
                              markAsRead(message.id);
                            }
                          }}
                          className={`w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none ${
                            selectedMessage?.id === message.id
                              ? 'bg-blue-50 dark:bg-blue-900/20'
                              : ''
                          } ${
                            !message.is_read
                              ? 'font-semibold'
                              : 'font-normal'
                          }`}
                        >
                          <div className="flex justify-between">
                            <span className="block truncate">{message.name}</span>
                            {!message.is_read && (
                              <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-200">
                                New
                              </span>
                            )}
                          </div>
                          <span className="block text-sm text-gray-500 dark:text-gray-400 truncate">
                            {message.subject || 'No subject'}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Message view */}
              <div className="md:w-2/3 p-6">
                {selectedMessage ? (
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {selectedMessage.subject || 'No subject'}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          From: {selectedMessage.name} ({selectedMessage.email})
                        </p>
                      </div>
                      <button
                        onClick={() => deleteMessage(selectedMessage.id)}
                        className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm"
                      >
                        Delete
                      </button>
                    </div>

                    <div className="mt-4 bg-gray-50 dark:bg-gray-700 p-4 rounded-md whitespace-pre-wrap">
                      {selectedMessage.content}
                    </div>

                    <div className="mt-6 flex justify-end">
                      <a
                        href={`mailto:${selectedMessage.email}?subject=RE: ${
                          selectedMessage.subject || 'Your message'
                        }`}
                        className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                      >
                        Reply by Email
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 dark:text-gray-400 py-10">
                    <p>Select a message to view its contents</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}