import { NavigationBarItem } from './NavigationBarItem';


export interface NavigationBarMenu extends NavigationBarItem {
  items: NavigationBarItemOrNavigationBarMenu[];
}

export type NavigationBarItemOrNavigationBarMenu = NavigationBarItem | NavigationBarMenu;
