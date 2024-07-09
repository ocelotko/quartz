"use client"
import React, { useState } from "react";
import { MdSearch, MdChat, MdGroup, MdCall } from "react-icons/md";
import SideBarButton from "./sidebar-button";
import UserItem from './user-item';
import {
  ChatsTabContent,
  GroupsTabContent,
  CallsTabContent,
} from "./tab-content";

function LeftSidebar() {
  const [activeTab, setActiveTab] = useState("Chats");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  // Render content based on activeTab state
  const renderTabContent = () => {
    switch (activeTab) {
      case "Chats":
        return <ChatsTabContent />;
      case "Groups":
        return <GroupsTabContent />;
      case "Calls":
        return <CallsTabContent />;
      default:
        return null;
    }
  };

  return (
    <section className="custom-scrollbar leftsidebar w-[300px] fixed min-h-screen bg-material-800 flex flex-col justify-start items-center pt-8">
      {/* Searchbar */}
      <div className="relative w-[250px] rounded-full border-2 border-material-700 mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-8 px-4 outline-none bg-transparent placeholder:text-white placeholder-opacity-70"/>
        <button className="absolute right-0 top-0 h-full px-4 flex items-center justify-center">
          <MdSearch size={20} className='text-primary-400' />
        </button>
      </div>

      {/* Icons */}
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-around w-full px-8 pt-2 pb-2">
          <SideBarButton
            icon={<MdChat size="20" />}
            label="Chats"
            isActive={activeTab === "Chats"} // Ensure isActive prop is passed correctly
            onClick={() => handleTabClick("Chats")}
          />
          <SideBarButton
            icon={<MdGroup size="20" />}
            label="Groups"
            isActive={activeTab === "Groups"} // Ensure isActive prop is passed correctly
            onClick={() => handleTabClick("Groups")}
          />
          <SideBarButton
            icon={<MdCall size="20" />}
            label="Calls"
            isActive={activeTab === "Calls"} // Ensure isActive prop is passed correctly
            onClick={() => handleTabClick("Calls")}
          />
        </div>
        <div className="w-4/5 border-t border-material-700 mt-4"></div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 w-full overflow-y-auto">
        {renderTabContent()}
      </div>

      {/* Profile card */}
      <div className="mt-auto mb-4">
        <UserItem />
      </div>
    </section>
  );
}

export default LeftSidebar;
