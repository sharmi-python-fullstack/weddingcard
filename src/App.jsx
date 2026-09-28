import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import WeddingCards from './pages/WeddingCards';
import CategoryListing from './pages/CategoryListing';
import ProductDetail from './pages/ProductDetail';
import WeddingDetails from './pages/WeddingDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderPlaced from './pages/OrderPlaced';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';
import Search from './pages/Search';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ';
import HowToOrder from './pages/HowToOrder';

import './styles/tokens.css';

// Automatically scroll to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const location = useLocation();
  // Check if Wedding Details page (The Wedding Details frame doesn't have the normal nav in the preview)
  const isDedicatedWeddingDetails = location.pathname.includes('/details') || location.pathname === '/wedding-details';

  return (
    <div className="app-layout">
      <ScrollToTop />
      {!isDedicatedWeddingDetails && <Header />}
      {!isDedicatedWeddingDetails && <Nav />}

      <main className="main-content-region">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wedding-cards" element={<WeddingCards />} />
          <Route path="/wedding-cards/:category" element={<CategoryListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product/:id/details" element={<WeddingDetails />} />
          <Route path="/wedding-details" element={<WeddingDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderPlaced />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/how-to-order" element={<HowToOrder />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {!isDedicatedWeddingDetails && <Footer />}
    </div>
  );
};

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
