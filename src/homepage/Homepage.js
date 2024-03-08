import React, { useState } from 'react';
import config from '../config';
import "./Homepage.css";


// Component for the Homepage
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const oauthClientId = config.OAUTH_CLIENT_ID; // OAuth client ID pulled from config

  const handleOAuthButtonClick = async () => {
    try {
      setLoading(true);
      // Url to initiate OAuth flow
      const authorizationUrl = `https://www.bungie.net/en/oauth/authorize?client_id=${oauthClientId}&response_type=code&redirect_uri=https://surely-gentle-tiger.ngrok.io/auth/callback`;
      console.log('Redirecting to OAuth provider...');
      window.location.href = authorizationUrl; // Redirect user to OAuth provider
    } catch (error) {
      setError(error.message);
      console.error('Error initiating OAuth flow:', error);
    } finally {
      setLoading(false); // Set loading state to false when OAuth flow concludes.
    }
  };


  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to The Destiny 2 Stat Tracker</h1>
      <p className="homepage-description">
        Click the button below to give us permission to authorize with Bungie to acces your Bungie.net information.
      </p>
      <button className="homepage-button" onClick={handleOAuthButtonClick} disabled={loading}>
        {loading ? 'Loading...' : 'Log in with your Bungie.net account'}
      </button>
      {error && <p className="homepage-error">Error: {error}</p>}
    </div>
  );
};


export default HomePage;
