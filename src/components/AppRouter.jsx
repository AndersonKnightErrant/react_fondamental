import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/UI/Navbar/Navbar';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostsIdPag from '../pages/PostIdPage'


const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About/>} />
				<Route path='/posts' element={<Posts />} />
				<Route exact path='/posts/:id' element={<PostsIdPag/>} />
        <Route exact path='/error' element={<Error/>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
