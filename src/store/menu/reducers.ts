import { MenuActionTypes } from './types';

const initialValue = window.innerWidth > 750;

export const menu = (state = initialValue, action: MenuActionTypes) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return true;
    case 'CLOSE_MENU':
      return false;
    default:
      return state;
  }
};
