import React from 'react'
import '@/styles/sidebar.css';

const RightSidebar = () => {
  return (
    <section className="rightsidebar custom-scrollbar fixed top-0 right-0 w-[300px] min-h-screen flex flex-col justify-start items-center pt-8">
      <strong className='text-primary-400 text-xl uppercase mt-auto mb-4 select-none'>Quartz</strong>
    </section>
  )
}

export default RightSidebar