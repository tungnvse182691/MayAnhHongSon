import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);

      // Hide if scrolling down past 100px, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className={`transition-all duration-300 ${isScrolled ? 'pt-0 px-0' : 'px-6 md:px-12 lg:px-16 pt-6'}`}>
        <nav className={`liquid-glass flex items-center justify-between shadow-sm transition-all duration-300 ${isScrolled ? 'px-6 md:px-12 lg:px-16 py-4 rounded-b-xl bg-black/80 backdrop-blur-md' : 'px-4 py-2 rounded-xl bg-black/40 backdrop-blur-sm'}`}>
          <Link to="/" className="text-2xl font-semibold tracking-tight text-white">Máy Ảnh HS</Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">Trang chủ</Link>
            <Link to="/products" className="text-white hover:text-gray-300 transition-colors">Sản phẩm</Link>
            <Link to="/blog/1" className="text-white hover:text-gray-300 transition-colors">Blog</Link>
            <Link to="/support" className="text-white hover:text-gray-300 transition-colors">Hỗ trợ</Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Link to="/cart" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-md" title="Giỏ hàng">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
