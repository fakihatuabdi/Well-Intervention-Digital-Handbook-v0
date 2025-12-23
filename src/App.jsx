import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Handbook from './pages/Handbook';
import HandbookDetail from './pages/HandbookDetail';
import Search from './pages/Search';
import Calculator from './pages/Calculator';
import Bookmarks from './pages/Bookmarks';
import ArticleDetail from './pages/ArticleDetail';
import Chatbot from './pages/Chatbot';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/handbook" element={<Handbook />} />
          <Route path="/handbook/:id" element={<HandbookDetail />} />
          <Route path="/chapter/:handbookId/:chapterId" element={<ArticleDetail />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
