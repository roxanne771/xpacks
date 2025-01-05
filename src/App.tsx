import React, { useEffect, useState } from 'react';
import { PackProvider } from './context/PackContext';
import Header from './components/Header';
import PackList from './components/PackList';
import Footer from './components/Footer';
import './styles/globals.css';

const App: React.FC = () => {

  const [consentConfirmed, setConsentConfirmed] = useState<boolean>(false);

  useEffect(() => {
    const isAgeConfirmed = sessionStorage.getItem('consentConfirmed') === 'true';
    setConsentConfirmed(isAgeConfirmed);
  }, []);

  const confirmConsent = () => {
    sessionStorage.setItem('consentConfirmed', 'true');
    setConsentConfirmed(true);
  };

  const leaveThisSite = () => {
    if (window.close) {
      window.close();
    }
    window.location.href = 'https://www.google.com';
  };

  if (!consentConfirmed) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.9)',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          lineHeight: 2,
        }}
      >
        <div
          style={{
            background: '#fff',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '600px',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <h2 style={{ color: '#333', marginBottom: '4px', }}>
            This site contains <span style={{ color: 'red' }}>sexually suggestive material</span>!
          </h2>
          <p style={{ color: '#555', marginBottom: '4px', }}>
            This site contains explicit, sexually suggestive, pornographic and inappropriate material.
            This site contains adult content, fetishes, cp (consented), leaked packs and onlyfans.
          </p>
          <p style={{ color: '#555', marginBottom: '4px', }}>
            Access to this site is strictly restricted to individuals who are of legal age in their jurisdiction.
            If you do not wish to access the above content, we ask that you exit immediately.
            Otherwise, you declare that you assume full responsibility for the content accessed.
          </p>
          <p style={{ color: '#555', marginBottom: '4px', }}>
            All content within the site is available only for low-cost payments via PayPal.
            Consumption of the content is a personal and individual responsibility.
          </p>
          <button
            onClick={confirmConsent}
            style={{
              background: '#007BFF',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              margin: '10px',
            }}
          >
            I understand — Enter
          </button>
          <button
            onClick={leaveThisSite}
            style={{
              background: '#DC3545',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Exit
          </button>
        </div>
      </div>
    );
  }

  return (
    <PackProvider>
      <div className="app">
        <Header />
        <main>
          <PackList />
        </main>
        <Footer />
      </div>
    </PackProvider>
  );
};

export default App;


