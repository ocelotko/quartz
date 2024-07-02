import React from 'react'
import List from './components/list/list';
import Chat from './components/chat/chat';
import Detail from './components/detail/detail';
import MessageForm from './MessageForm';

const Home: React.FC = () => {
  return (
    <div className='container'>
      <header>
        <h1>Matrix Client</h1>
      </header>
      <List/>
      <Chat/>
      <Detail/>
      <MessageForm/>
    </div>
  )
}

export default Home;
