import React from 'react';
export interface HeaderProps {
  isOpen?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="px-10 flex bg-todoist-red">
      <div className="left">
        <button>Menu</button>
        <button>Home</button>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Header;