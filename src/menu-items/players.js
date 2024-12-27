// assets
import { IconUserCog } from '@tabler/icons-react';

// constant
const icons = {
  IconUserCog
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const players = {
  id: 'players',
  title: 'Users',
  caption: 'User Management',
  type: 'group',
  children: [
    {
      id: 'user-management',
      title: 'User Management',
      type: 'collapse',
      icon: icons.IconUserCog,
      children: [
        {
          id: 'createUser',
          title: 'Create User',
          type: 'item',
          url: '/users/create'
        },
        {
          id: 'listUser',
          title: 'List User',
          type: 'item',
          url: '/users/list'
        }
      ]
    }
  ]
};

export default players;
