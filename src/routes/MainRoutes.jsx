import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
// const MatchListPage = Loadable(lazy(() => import('views/bm-pages/match-page/MatchPage')));

import CreateMatchPage from 'views/bm-pages/match-page/CreateMatchPage';
import ListMatchPage from 'views/bm-pages/match-page/ListMatchPage';
import MatchPage from 'views/bm-pages/match-page/MatchPage';
import CreateUserPage from 'views/bm-pages/user-pages/CreateUserPage';
import ListUserPage from 'views/bm-pages/user-pages/ListUserPage';
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'tabler-icons',
    //       element: <UtilsTablerIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'icons',
    //   children: [
    //     {
    //       path: 'material-icons',
    //       element: <UtilsMaterialIcons />
    //     }
    //   ]
    // },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    // Badminton App
    {
      path: 'matchs',
      element: <MatchPage />
    },
    {
      path: 'matchs/create',
      element: <CreateMatchPage />
    },
    {
      path: 'matchs/list',
      element: <ListMatchPage />
    },
    //USER
    {
      path: 'users/create',
      element: <CreateUserPage />
    },
    {
      path: 'users/list',
      element: <ListUserPage />
    }
  ]
};

export default MainRoutes;
