import React from 'react';
import { MdSettings } from 'react-icons/md';
import Image from 'next/image';

const UserItem = () => {
  return (
    <div className='flex items-center'>
      <div className='relative z-10 avatar rounded-full border-2 border-[#b58eff] w-14 h-14'>
        <Image
          alt="User Avatar"
          src="/placeholder-pfp.png"
          width={100}
          height={100}
          className='rounded-full w-full h-full object-cover'
        />
      </div>
      <div className='flex items-center justify-between p-1 rounded-full bg-gradient-to-r from-transparent to-[#2e2e2e] h-14 ml-[-12px] pl-4 pr-2 w-52'>
        <div className='flex-grow overflow-hidden'>
          <p className='text-white uppercase text-[14px] font-bold whitespace-nowrap overflow-hidden overflow-ellipsis ml-2'>Jakub</p>
          <p className='text-[#b58eff] text-[12px] whitespace-nowrap overflow-hidden overflow-ellipsis ml-2'>@ocelot</p>
        </div>
        <MdSettings color="#b58eff" className='text-lg cursor-pointer mr-2' />
      </div>
    </div>
  );
}

export default UserItem;
