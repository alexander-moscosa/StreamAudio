import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading } from '../modules/loading/pages/Loading';

const LazyLoggingIn = lazy( () => import(/* webpackChunkName: "LazyLoggingIn" */"../modules/logging-in/pages/Logging_in"));
const LazyLogin = lazy( () => import(/* webpackChunkName: "LazyLogin" */"../modules/login/pages/Login"));
const LazyHome = lazy( () => import(/* webpackChunkName: "LazyHome" */"../modules/home/pages/Home"));


export const Navigation = () => {
  return (
    <Suspense fallback={ <Loading /> }> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="login" element={<LazyLogin />} />
          <Route path="logging-in" element={<LazyLoggingIn /> } />
          <Route path="*" element={<LazyHome />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
