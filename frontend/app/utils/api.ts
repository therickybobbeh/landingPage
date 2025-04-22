// API service for communicating with the backend

// Base API URL from environment variable
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// Types
export type MessageFormData = {
  name: string;
  email: string;
  subject?: string;
  content: string;
};

/**
 * Send a message through the contact form
 * 
 * @param formData Message data from contact form
 * @returns Promise with the response
 */
export async function submitContactMessage(formData: MessageFormData): Promise<{ status: string; message: string }> {
  try {
    const response = await fetch(`${API_URL}/api/messages/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.detail || 'Failed to submit message');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting message:', error);
    throw error;
  }
}

/**
 * Fetch messages for admin dashboard
 * Requires authentication
 * 
 * @param token JWT token for authentication
 * @param isRead Optional filter for read/unread messages
 * @returns Promise with array of messages
 */
export async function fetchMessages(token: string, isRead?: boolean): Promise<any[]> {
  try {
    const url = new URL(`${API_URL}/api/messages`);
    
    // Add query parameter if isRead filter is provided
    if (isRead !== undefined) {
      url.searchParams.append('is_read', isRead.toString());
    }
    
    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch messages');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
}

/**
 * Mark a message as read
 * Requires authentication
 * 
 * @param token JWT token for authentication
 * @param messageId ID of the message to mark as read
 * @returns Promise with operation response
 */
export async function markMessageAsRead(token: string, messageId: number): Promise<{ status: string; message: string }> {
  try {
    const response = await fetch(`${API_URL}/api/messages/${messageId}/read`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to mark message as read');
    }

    return await response.json();
  } catch (error) {
    console.error('Error marking message as read:', error);
    throw error;
  }
}

/**
 * Delete a message
 * Requires authentication
 * 
 * @param token JWT token for authentication
 * @param messageId ID of the message to delete
 * @returns Promise with operation response
 */
export async function deleteMessage(token: string, messageId: number): Promise<{ status: string; message: string }> {
  try {
    const response = await fetch(`${API_URL}/api/messages/${messageId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete message');
    }

    return await response.json();
  } catch (error) {
    console.error('Error deleting message:', error);
    throw error;
  }
}