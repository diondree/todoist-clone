export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

interface OpenMenuAction {
  type: typeof OPEN_MENU;
}
interface CloseMenuAction {
  type: typeof CLOSE_MENU;
}

export type MenuActionTypes = OpenMenuAction | CloseMenuAction;
