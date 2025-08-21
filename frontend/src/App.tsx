import React, { useState } from 'react';
import ProductManagement from './ProductManagement';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'products'>('home');

  if (currentView === 'products') {
    return <ProductManagement onBack={() => setCurrentView('home')} />;
  }
  const containerStyle: React.CSSProperties = {
    margin: 0,
    padding: '40px',
    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
    color: 'white',
    minHeight: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
  };

  const cardStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '15px',
    padding: '30px',
    margin: '20px 0',
    border: '1px solid rgba(255,255,255,0.2)'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '3rem',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={titleStyle}>🛍️ Hoth Storefront</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>
          Premium rebel gear and supplies from Echo Base
        </p>
        
        <div style={cardStyle}>
          <div style={{ display: 'inline-block', background: '#10b981', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', margin: '10px 0' }}>
            🟢 Storefront Online
          </div>
          <p>Welcome to the galaxy's most secure shopping experience, protected by ion cannons and shield generators!</p>
          <div style={{ marginTop: '20px' }}>
            <button 
              onClick={() => setCurrentView('products')}
              style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              📦 Manage Products
            </button>
          </div>
        </div>

        <div style={cardStyle}>
          <h3>❄️ Featured Products</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', margin: '20px 0' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px' }}>
              <div style={{ fontSize: '2rem' }}>🥶</div>
              <strong>Tauntaun Sleeping Bag</strong>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>And you thought they smelled bad on the outside!</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px' }}>
              <div style={{ fontSize: '2rem' }}>⚔️</div>
              <strong>Lightsaber (Blue)</strong>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Perfect for cave exploration and Wampa encounters</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '10px' }}>
              <div style={{ fontSize: '2rem' }}>🚁</div>
              <strong>Snowspeeder Parts</strong>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Tow cable included. AT-AT takedown guaranteed*</p>
            </div>
          </div>
        </div>

        <div style={cardStyle}>
          <h3>🚀 System Status</h3>
          <ul style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
            <li>✅ React 18 with TypeScript</li>
            <li>✅ Vite development server</li>
            <li>✅ Backend API connection</li>
            <li>✅ PostgreSQL database</li>
            <li>✅ Ready for galactic commerce</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: '2rem', margin: '10px' }}>🌟</div>
          <p style={{ fontStyle: 'italic' }}>
            "Your lack of faith in our e-commerce platform is disturbing."
          </p>
          <p><strong>- Darth Vader, Customer Service</strong></p>
        </div>

        <div style={{ fontSize: '0.9rem', opacity: 0.7, marginTop: '40px' }}>
          <p>* Warranty void if Imperial forces destroy Echo Base</p>
        </div>
      </div>
    </div>
  );
}

export default App;