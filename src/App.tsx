import React from 'react';
import { PackProvider } from './context/PackContext';
import Header from './components/Header';
import PackList from './components/PackList';
import Footer from './components/Footer';
import './styles/globals.css';

const App: React.FC = () => {
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
