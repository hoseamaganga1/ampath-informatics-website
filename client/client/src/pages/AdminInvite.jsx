import React, { useState } from 'react';
import axios from 'axios';
import './AdminInvite.css'; // Import styles

export default function AdminInvite() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendInvite = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      let token = localStorage.getItem('token');
      if (token && token.startsWith('{')) {
        token = JSON.parse(token).token;
      }

      if (!token) {
        setMessage(' You must be logged in to send invites.');
        return;
      }

      const res = await axios.post(
        'http://localhost:4000/admin/invite',
        { email },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      setMessage(` Invite link sent! `);
      setEmail('');
    } catch (err) {
      console.error('Error sending invite:', err);
      setMessage(err.response?.data?.error || ' Failed to send invite.');
    }
  };

  return (
    <div className="invite-container">
      <h1>Send Admin Invite</h1>
      <form onSubmit={sendInvite} className="invite-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter admin email"
          required
        />
        <button type="submit">Send Invite</button>
      </form>
      {message && <p className="invite-message">{message}</p>}
    </div>
  );
}
