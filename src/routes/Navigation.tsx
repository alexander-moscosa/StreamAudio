import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loading } from '../modules/loading/pages/Loading';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Dashboard, Home, LoggingIn, Login } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="login"
            element={
              <PublicRoute to="/dashboard">
                <Login />
              </PublicRoute>
            }
          />
          <Route path="logging-in" element={<LoggingIn />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute to="/">
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
