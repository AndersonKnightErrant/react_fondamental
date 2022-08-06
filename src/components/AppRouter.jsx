import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/UI/Navbar/Navbar';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
  const isAuth = true;
  return isAuth ? (
    <Router>
      <Navbar />
      <Routes>
        {privateRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </Router>
  ) : (
    <Router>
      <Navbar />
      <Routes>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
