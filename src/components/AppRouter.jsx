import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/UI/Navbar/Navbar';
import { routes } from '../router';


const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
				{routes.map(route => 
					<Route key={route.path}
						path={route.path}
						element={<route.element/>}
					/>
				)}
      </Routes>
    </Router>
  );
};

export default AppRouter;
