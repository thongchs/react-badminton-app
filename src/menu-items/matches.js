// assets
import { IconCirclePlus, IconDeviceGamepad2 } from '@tabler/icons-react';

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const matches = {
  id: 'match',
  title: 'Match',
  type: 'group',
  children: [
    {
      id: 'create-match',
      title: 'Create Match',
      type: 'item',
      url: '/matchs/create',
      icon: IconCirclePlus,
      breadcrumbs: false
    },
    {
      id: 'list-match',
      title: 'List Match',
      type: 'item',
      url: '/matchs/list',
      icon: IconDeviceGamepad2,
      breadcrumbs: false
    }
  ]
};

export default matches;
