import React from 'react';
import { MdSettings } from 'react-icons/md';
import Image from 'next/image';
import "@/styles/sidebar.css";

const UserItem = () => {
  return (
    <div className='flex items-center'>
      <div className='relative z-10 avatar rounded-full border-2 border-primary-400 w-14 h-14'>
        <Image
          alt="User Avatar"
          src=""
          width={100}
          height={100}
          className='rounded-full w-full h-full object-cover'
        />
      </div>
      <div className='flex items-center justify-between p-1 rounded-full bg-gradient-to-r from-transparent to-material-700 h-14 ml-[-12px] pl-4 pr-2 w-52'>
        <div className='flex-grow overflow-hidden select-none'>
          <p className='text-white uppercase text-sm font-bold whitespace-nowrap overflow-hidden overflow-ellipsis ml-2'>Jakub</p>
          <p className='text-purple-400 text-xs whitespace-nowrap overflow-hidden overflow-ellipsis ml-2'>@ocelot</p>
        </div>
        <MdSettings className='text-primary-400 text-lg cursor-pointer mr-2 spin-on-hover' />
      </div>
    </div>
  );
}

export default UserItem;