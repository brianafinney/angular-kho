import { INavData } from '@coreui/angular';

/* 1/30/2020 [briana] - sits on top of CoreUI menu 
 * Add additional properties wanted for navigation (side menu) here and use the sidebar-service
 * to control the menu item results
 */ 
export interface KhoINavData extends INavData {
  roles?: string[]; 
  permissions?: string[]; 
}
/*used only for Right Side*/
export interface KhoINavDataForRightSide extends KhoINavData {
  tabNumber?: number;
}
