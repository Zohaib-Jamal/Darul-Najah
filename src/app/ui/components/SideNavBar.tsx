"use client";

import React, { useState } from "react";
import { X, Menu } from "lucide-react";

type SideNavBarMenuProps = {
  pageName: string[];
  setClose: Function;
  isOpen: Boolean
};

type SideNavBarProps = {
    pageName: string[];
  };

const SideNavBarMenu: React.FC<SideNavBarMenuProps> = ({ pageName, setClose, isOpen }) => {

  return (
    <nav
      className={`flex flex-row transition-all duration-500 ease-in-out absolute max-w-full min-w-56 h-full justify-between items-start bg-white border rounded-br-xl pt-10 py-10
        ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
      `}
    >
      <ul className="text-primary_text flex flex-col">
        {pageName.map((name, index) => (
          <li
            key={index}
            className="m-5 text-primary_text font-medium border-b-2 pb-2 min-w-0 border-secondary"
          >
            {name}
          </li>
        ))}
      </ul>

      <X className="text-tertiary m-5 " onClick={()=>setClose()}/>
    </nav>
  );
};

const SideNavBar: React.FC<SideNavBarProps> = ({ pageName }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Menu
        className="text-tertiary m-5 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      <SideNavBarMenu
        pageName={pageName}
        setClose={() => setIsOpen(false)}
        isOpen={isOpen} 
        
      />
    </>
  );
};

export default SideNavBar;
