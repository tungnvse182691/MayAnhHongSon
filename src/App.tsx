import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import OrderSuccess from './pages/OrderSuccess';
import Services from './pages/Services';
import Support from './pages/Support';
import ScamCheck from './pages/ScamCheck';
import AboutUs from './pages/AboutUs';
import BlogPost from './pages/BlogPost';
import Orders from './pages/Orders';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/success" element={<OrderSuccess />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/services" element={<Services />} />
        <Route path="/support" element={<Support />} />
        <Route path="/verify" element={<ScamCheck />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </>
  );
}
