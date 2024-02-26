import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed w-full flex flex-row px-8 py-4 items-center gap-4 bg-white bg-opacity-50 backdrop-blur-lg cursor-pointer">
      <div onClick={() => navigate('/')}>
        Cards
      </div>
      <div onClick={() => navigate('/deck')}>
        Deck
      </div>
    </div>
  )
}