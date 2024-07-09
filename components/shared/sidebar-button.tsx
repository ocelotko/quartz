"use client"
import React, { useState, useEffect } from "react";

interface SideBarButtonProps {
  icon: React.ReactNode;
  label?: string;
  isActive: boolean;
  onClick: () => void;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({ icon, label, isActive, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    return () => setIsPressed(false); // Cleanup on unmount
  }, []);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <button
      className={`sidebar-button group ${isPressed ? "pressed" : ""} ${isActive ? "active" : ""}`}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="circle-container group-hover:bg-opacity-60 transition duration-200">
        <span className="button-icon">{icon}</span>
      </div>
      {label && <span className="button-text">{label}</span>}
    </button>
  );
};

export default SideBarButton;