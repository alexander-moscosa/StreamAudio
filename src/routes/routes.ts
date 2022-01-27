import { lazy } from 'react';

const LoggingIn = lazy(
  () =>
    import(
      /* webpackChunkName: "LoggingIn" */ '../modules/logging-in/pages/Logging_in'
    ),
);
const Login = lazy(
  () => import(/* webpackChunkName: "Login" */ '../modules/login/pages/Login'),
);
const Home = lazy(
  () => import(/* webpackChunkName: "Home" */ '../modules/home/pages/Home'),
);
const Dashboard = lazy(
  () =>
    import(
      /* webpackChunkName: "Dashboard" */ '../modules/dashboard/pages/Dashboard'
    ),
);

export { LoggingIn, Login, Home, Dashboard };
