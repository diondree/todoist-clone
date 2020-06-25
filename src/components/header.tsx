import React, { useState } from 'react';

import { ReactComponent as MenuIcon } from '../svgs/menu.svg';
import { ReactComponent as CloseIcon } from '../svgs/close.svg';
import { ReactComponent as HomeIcon } from '../svgs/home.svg';
import { ReactComponent as PlusIcon } from '../svgs/plus.svg';
import { ReactComponent as CompletedIcon } from '../svgs/completed.svg';
import { ReactComponent as NotificationIcon } from '../svgs/notification.svg';
import { ReactComponent as SettingsIcon } from '../svgs/settings.svg';
import { ReactComponent as SearchIcon } from '../svgs/search.svg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { closeMenu, openMenu } from '../store/menu/actions';

export interface HeaderProps {
  isOpen?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const [isEditing, setIsEditing] = useState(false);
  const isMenuOpen = useSelector((state: RootState) => state.isMenuOpen);
  const dispatch = useDispatch();

  const onInputClick = () => {
    setIsEditing(true);
  };

  const onInputBlur = () => {
    setIsEditing(false);
  };

  const closeFind = () => {
    setIsEditing(false);
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  };

  return (
    <div className="header px-3 md:px-10 flex justify-between bg-todoistred text-white fixed top-0 w-screen z-50">
      <div className="left flex items-center justify-start">
        <button className="top-bar-btn mr-1" onClick={toggleMenu}>
          <CloseIcon
            aria-label="Close Menu"
            className={`close-menu-icon ${isMenuOpen && 'close-menu-icon--open'}`}
          />
          <MenuIcon
            aria-label="Open Menu"
            className={`open-menu-icon ${isMenuOpen && 'open-menu-icon--open'}`}
          />
        </button>
        <button className="top-bar-btn">
          <HomeIcon />
        </button>
        <div
          className={`quick-find relative ${isEditing && 'active'} ${
            isMenuOpen && 'quick-find--menu-open'
          }`}
        >
          <SearchIcon className="quick-find__icon hidden md:block absolute text-white" />
          <input
            className="quick-find__input"
            type="text"
            placeholder="Find"
            autoComplete="off"
            onClick={onInputClick}
            onBlur={onInputBlur}
          />
          <a
            href="https://get.todoist.help/hc/articles/360000394949"
            rel="noopener noreferrer"
            target="_blank"
            className={`quick-find__help-icon ${isEditing && 'quick-find__help-icon--open'}`}
            tab-index="0"
          >
            <svg width="24" height="24">
              <g fill="none" fillRule="evenodd">
                <path
                  fill="currentColor"
                  d="M11.9 16.5c-.46 0-.8-.35-.8-.85s.34-.86.8-.86c.48 0 .8.36.8.86s-.32.85-.8.85zM9.5 9.87c.06-1.32.9-2.37 2.54-2.37 1.46 0 2.46.95 2.46 2.21 0 .96-.47 1.64-1.22 2.11-.73.46-.94.8-.94 1.45v.4h-1.02v-.57c0-.8.37-1.36 1.16-1.86.68-.43.94-.82.94-1.47 0-.76-.56-1.32-1.43-1.32-.87 0-1.43.55-1.5 1.42H9.5z"
                ></path>
                <circle cx="12" cy="12" r="7.5" stroke="currentColor"></circle>
              </g>
            </svg>
          </a>
          <button
            className={`quick-find__close-icon ${isEditing && 'quick-find__close-icon--open'}`}
            aria-label="Close Find"
            onClick={closeFind}
          >
            <CloseIcon />
          </button>
        </div>
      </div>
      <div className="right flex items-center justify-end space-x-3">
        <button className="top-bar-btn">
          <PlusIcon />
        </button>
        <button className="top-bar-btn">
          <CompletedIcon />
        </button>
        <button className="top-bar-btn">
          <NotificationIcon />
        </button>
        <button className="top-bar-btn">
          <SettingsIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
