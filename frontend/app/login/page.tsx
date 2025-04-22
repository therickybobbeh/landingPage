'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Prepare form data for OAuth2 password flow
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);
      
      // Send login request to backend API
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
      
      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }
      
      const data = await response.json();
      
      // Store the token in localStorage
      localStorage.setItem('token', data.access_token);
      
      // Redirect to admin dashboard
      router.push('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 pt-24">
        <div className="max-w-md mx-auto px-4 py-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-md">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium rounded-md transition-colors"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              <p>
                This login is for the site administrator only. 
                <br />
                <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">
                  Return to home page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}