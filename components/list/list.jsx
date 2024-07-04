import React from 'react'
import "./list.css"
import UserInfo from './user-info/user-info'
import ChatList from './chat-list/chat-list'

const List = () => {
  return (
    <div className='list'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default List