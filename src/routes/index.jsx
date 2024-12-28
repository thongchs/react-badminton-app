import { createBrowserRouter } from 'react-router-dom';

// routes
import LoginRoutes from './AuthenticationRoutes';
import MainRoutes from './MainRoutes';
import PublicRoutes from './PublicRoutes';

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([MainRoutes, PublicRoutes, LoginRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
