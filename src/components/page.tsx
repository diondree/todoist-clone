import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import LeftMenu from './leftmenu';
import { RootState } from '../store';
import InboxPage from '../pages/inbox';
import TodayPage from '../pages/today';
import UpcomingPage from '../pages/upcoming';

const Page: React.FC = () => {
  const isMenuOpen = useSelector((state: RootState) => state.isMenuOpen);

  return (
    <div>
      <div className={`left-menu-overlay ${!isMenuOpen && 'left-menu-overlay--close'}`}></div>
      <LeftMenu />
      <div className={`content ${isMenuOpen && 'content--menu-open'}`}>
        <div className="main-content">
          <Switch>
            <Route exact path="/project">
              <InboxPage />
            </Route>
            <Route path="/today">
              <TodayPage />
            </Route>
            <Route path="/upcoming">
              <UpcomingPage />
            </Route>
            <Route>
              <Redirect to="project" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Page;
