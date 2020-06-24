import React from 'react';
import LeftMenu from './leftmenu';
import TodoList from './todolist';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Page: React.FC = () => {
  const isMenuOpen = useSelector((state: RootState) => state.isMenuOpen);
  const dateParts = new Date().toDateString().split(' ');
  const today = `${dateParts[0]} ${dateParts[1]} ${dateParts[2]}`;

  return (
    <div>
      <div className={`left-menu-overlay ${!isMenuOpen && 'left-menu-overlay--close'}`}></div>
      <LeftMenu />
      <div className={`content ${isMenuOpen && 'content--menu-open'}`}>
        <div className="main-content">
          <header className="page-header">
            <h1 className="page-header__title">
              Today
              <small>{today}</small>
            </h1>
          </header>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Page;
