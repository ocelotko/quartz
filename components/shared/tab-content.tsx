import React from "react";

const ChatsTabContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl text-white">Chats Content</h1>
      {/* Add more content as needed */}
    </div>
  );
};

const GroupsTabContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl text-white">Groups Content</h1>
      {/* Add more content as needed */}
    </div>
  );
};

const CallsTabContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl text-white">Calls Content</h1>
      {/* Add more content as needed */}
    </div>
  );
};

export { ChatsTabContent, GroupsTabContent, CallsTabContent };