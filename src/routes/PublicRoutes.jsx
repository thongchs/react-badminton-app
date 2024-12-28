// project imports
// import MinimalLayout from 'layout/MinimalLayout';
import MinimalLayout from 'layout/MinimalLayout';
import PublicMatchPage from 'views/bm-pages/public-pages/PublicMatchPage';
// ==============================|| PUBLIC ROUTING ||============================== //

const PublicRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/group/:match_id/match',
      element: <PublicMatchPage />
    }
  ]
};

export default PublicRoutes;
