<<<<<<< HEAD
import React from 'react'
import List from './components/list/list';
import Chat from './components/chat/chat';
import Detail from './components/detail/detail';
=======
"use client";
>>>>>>> 61cb2633cd83d0675ef1d54daa5ab9309bc08722

import React from 'react';
import MessageForm from './MessageForm';

const Home: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}
=======
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
>>>>>>> 61cb2633cd83d0675ef1d54daa5ab9309bc08722

export default Home;
