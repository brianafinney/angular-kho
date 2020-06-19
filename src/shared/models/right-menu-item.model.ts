export namespace RightMenu {

export class MenuTab {
  tabNumber?: number;
  tabIcon?: string;
  tabName: string; 
  items?: MenuItem[];
}

  export class MenuItem {
    groupName?: string;
    displayName: string;
    description?: string;
    disabled?: boolean;
    external?: boolean;
    iClass?: string;
    iconName?: string;
    badge?: boolean;
    badgeMessage?: string;
    badgeColor?: string;
    route?: string;
    children?: MenuItem[];
  }
}
