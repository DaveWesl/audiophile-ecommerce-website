import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Earphones from './pages/Earphones/Earphones';
import Headphones from './pages/Headphones/Headphones';
import Home from './pages/Home/Home';
import MarkOne from './pages/Mark-One/Mark-One';
import MarkTwo from './pages/Mark-Two/Mark-Two';
import XX59 from './pages/XX59/XX59';
import YX1 from './pages/YX1/YX1';
import ZX7 from './pages/ZX7/ZX7';
import ZX9 from './pages/ZX9/ZX9';
import Speakers from './pages/Speakers/Speakers';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/markone" element={<MarkOne />} />
          <Route path="/marktwo" element={<MarkTwo />} />
          <Route path="/xx59" element={<XX59 />} />
          <Route path="/yx1" element={<YX1 />} />
          <Route path="/zx7" element={<ZX7 />} />
          <Route path="/zx9" element={<ZX9 />} />
        </Routes>
        <Footer className="App-footer" />
      </div>
    </Router>
  );
}

export default App;
