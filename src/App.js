import React, { useState } from 'react';
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
import ScrollToTop from './components/Assets/ScrollToTop';
import Checkout from './pages/Checkout/Checkout';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productInfo) => {
    // Prüfe, ob das Produkt bereits im Warenkorb ist
    const isProductInCart = cartItems.some((item) => item.id === productInfo.id);

    if (!isProductInCart) {
      // Füge das Produkt zum Warenkorb hinzu, nur wenn es nicht vorhanden ist
      setCartItems((prevCartItems) => [...prevCartItems, { ...productInfo, cartItemId: productInfo.id }]);
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar cartItems={cartItems} setCartItems={setCartItems}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/markone" element={<MarkOne onAddToCart={handleAddToCart}/>} />
          <Route path="/marktwo" element={<MarkTwo onAddToCart={handleAddToCart}/>} />
          <Route path="/xx59" element={<XX59 onAddToCart={handleAddToCart}/>} />
          <Route path="/yx1" element={<YX1 onAddToCart={handleAddToCart}/>} />
          <Route path="/zx7" element={<ZX7 onAddToCart={handleAddToCart}/>} />
          <Route path="/zx9" element={<ZX9 onAddToCart={handleAddToCart}/>} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems}/>} />
        </Routes>
        <Footer className="App-footer" />
      </div>
    </Router>
  );
}

export default App;

