import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import TodayIcon from './todayIcon';
import { ReactComponent as InboxIcon } from '../svgs/inbox.svg';
import { ReactComponent as UpcomingIcon } from '../svgs/upcoming.svg';
import { RootState } from '../store';

export interface LeftMenuProps {}

const LeftMenu: React.FC<LeftMenuProps> = () => {
  const isMenuOpen = useSelector((state: RootState) => state.isMenuOpen);

  return (
    <div className={`left-menu ${!isMenuOpen && 'left-menu--close'}`}>
      <div className="left-menu-container">
        <div>
          <ul className="top-filters p-0 m md:m-0">
            <NavLink to="project" activeClassName="current">
              <li className="filter">
                <span className="filter__icon">
                  <InboxIcon color="#246fe0" />
                </span>
                <span className="filter__content">Inbox</span>
              </li>
            </NavLink>
            <NavLink to="today" activeClassName="current">
              <li className="filter">
                <span className="filter__icon">
                  <TodayIcon />
                </span>
                <span className="filter__content">Today</span>
              </li>
            </NavLink>
            <NavLink to="upcoming" activeClassName="current">
              <li className="filter">
                <span className="filter__icon">
                  <UpcomingIcon />
                </span>
                <span className="filter__content">Upcoming</span>
              </li>
            </NavLink>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LeftMenu;
