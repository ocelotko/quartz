"use client";

import React from 'react';
import MessageForm from './MessageForm';

const Home: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>Matrix Client</h1>
      </header>
      <main>
        <MessageForm />
      </main>
    </div>
  );
};

export default Home;
