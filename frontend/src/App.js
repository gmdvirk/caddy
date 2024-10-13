import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePing = async () => {
    setLoading(true);
    setError(null);
    try {
      // Update URL to Caddy proxy URL
      const response = await fetch('http://localhost:3002/ping');
      const data = await response.json();
      console.log(data);
      if (response.ok && data.number !== undefined) {
        setNumber(data.number);
      } else if (data.error) {
        setError(data.error);
      } else {
        setError('Unknown error occurred');
      }
    } catch (err) {
      console.error('Error fetching ping:', err);
      setError('Error fetching ping');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Ping Frontend</h1>
      <div id="number">{number}</div>
      <button id="pingButton" onClick={handlePing} disabled={loading}>
        {loading ? 'Pinging...' : 'Ping'}
      </button>
      {error && <p className="error">Error: {error}</p>}
    </div>
  );
}

export default App;
