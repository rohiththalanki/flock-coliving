import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Overview',
    icon: 'pie-chart-outline',
    link: 'analytics',
    home: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: 'dashboard',
  },
  {
    title: 'House Keeping',
    icon: 'smartphone-outline',
    children: [
      {
        title: 'Service Requests',
        link: 'forms/inputs',
      },
      {
        title: 'Keeping Staff',
        link: 'house-keeping/staff',
      },
    ],
  },
  {
    title: 'Residents',
    icon: 'smartphone-outline',
    children: [
      {
        title: 'Guests-list',
        link: 'residents/list',
      },
      {
        title: 'New Guests',
        link: 'residents/add-new',
      },
    ],
  },
  {
    title: 'Food and Beverages',
    icon: 'keypad-outline',
  },
  {
    title: 'Accounts',
    icon: 'layout-outline',
  },
];
