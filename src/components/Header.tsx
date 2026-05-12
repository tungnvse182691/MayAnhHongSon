import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Sản phẩm', path: '/products' },
    { name: 'Blog', path: '/blog/1' },
    { name: 'Hỗ trợ', path: '/support' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className={`transition-all duration-300 ${isScrolled ? 'pt-0 px-0' : 'px-6 md:px-12 lg:px-16 pt-6'}`}>
        <nav className={`liquid-glass flex items-center justify-between shadow-sm transition-all duration-300 relative ${isScrolled ? 'px-6 md:px-12 lg:px-16 py-4 rounded-b-xl bg-black/80 backdrop-blur-md' : 'px-4 py-2 rounded-xl bg-black/40 backdrop-blur-sm'}`}>
          <Link to="/" className="text-2xl font-bold tracking-tight text-white uppercase z-10">Máy Ảnh HS</Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-white hover:text-gray-300 transition-colors">{link.name}</Link>
            ))}
          </div>
          
          <div className="flex items-center gap-2 z-10">
            <Link to="/cart" className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-md" title="Giỏ hàng">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            </Link>
            <button 
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg overflow-hidden md:hidden rounded-b-xl border-t border-white/10"
              >
                <div className="flex flex-col p-6 gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-lg text-white hover:text-gray-300 transition-colors py-2 border-b border-white/5 last:border-0"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
