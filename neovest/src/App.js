import logo from './logo.svg';
import React from 'react';
import './App.css';
import ConnectButton from './components/ConnectButton';

function App() {
  return (
    <>
      <header>
        <div className="header-container">
          <h1>NeoVest</h1>
          <ConnectButton />
        </div>
      </header>

      <main>
        <section className="holdings">
          <h2>Holdings</h2>
          {/* Holdings content */}
        </section>

        <section className="transactions">
          <h2>Transactions</h2>
          {/* Transactions content */}
        </section>
      </main>
    </>
  );
}

export default App;
