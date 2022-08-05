import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import './styles/App.css'


function App() {
	return (
    <Router>
      <Routes>
				<Route path="/about" element={<About />} />
				<Route path="/posts" element={<Posts/>} />
      </Routes>
    </Router>
	)
}

export default App