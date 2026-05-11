import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PRODUCT_DATA = {
  bestSellers: [
    { id: 1, name: "Canon EOS 800D", price: "22.000.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/kisspng-single-lens-reflex-camera-photography-digital-came-7d-side-5ab06dcdd82109-8187864315215118858853.png", subtitle: "MÁY ẢNH BLUE", badge: "Hot" },
    { id: 2, name: "Canon EOS 600D", price: "18.500.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/pngtree-canon-png-free-download-png-image_11620600.png", subtitle: "MÁY ẢNH RED" },
    { id: 3, name: "Canon EOS 200D", price: "15.000.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/Hinh_anh_-_Banner_top-removebg-preview.png", subtitle: "MÁY ẢNH CAM" },
    { id: 4, name: "Canon EOS 800D", price: "22.000.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/kisspng-single-lens-reflex-camera-photography-digital-came-7d-side-5ab06dcdd82109-8187864315215118858853.png", subtitle: "MÁY ẢNH BLUE" },
    { id: 5, name: "Canon EOS 600D", price: "18.500.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/pngtree-canon-png-free-download-png-image_11620600.png", subtitle: "MÁY ẢNH RED" },
    { id: 6, name: "Canon EOS 200D", price: "15.000.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/Hinh_anh_-_Banner_top-removebg-preview.png", subtitle: "MÁY ẢNH CAM" },
    { id: 7, name: "Canon EOS 800D", price: "22.000.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/kisspng-single-lens-reflex-camera-photography-digital-came-7d-side-5ab06dcdd82109-8187864315215118858853.png", subtitle: "MÁY ẢNH BLUE" },
    { id: 8, name: "Canon EOS 600D", price: "18.500.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/pngtree-canon-png-free-download-png-image_11620600.png", subtitle: "MÁY ẢNH RED" },
  ],
  newArrivals: [
    { id: 9, name: "Canon EOS 800D", price: "22.000.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/kisspng-single-lens-reflex-camera-photography-digital-came-7d-side-5ab06dcdd82109-8187864315215118858853.png", subtitle: "MÁY ẢNH BLUE", badge: "Mới" },
    { id: 10, name: "Canon EOS 600D", price: "18.500.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/pngtree-canon-png-free-download-png-image_11620600.png", subtitle: "MÁY ẢNH RED" },
    { id: 11, name: "Canon EOS 200D", price: "15.000.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/Hinh_anh_-_Banner_top-removebg-preview.png", subtitle: "MÁY ẢNH CAM" },
    { id: 12, name: "Canon EOS 800D", price: "22.000.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/kisspng-single-lens-reflex-camera-photography-digital-came-7d-side-5ab06dcdd82109-8187864315215118858853.png", subtitle: "MÁY ẢNH BLUE", badge: "Mới" },
    { id: 13, name: "Canon EOS 600D", price: "18.500.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/pngtree-canon-png-free-download-png-image_11620600.png", subtitle: "MÁY ẢNH RED" },
    { id: 14, name: "Canon EOS 200D", price: "15.000.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/Hinh_anh_-_Banner_top-removebg-preview.png", subtitle: "MÁY ẢNH CAM" },
    { id: 15, name: "Canon EOS 800D", price: "22.000.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/kisspng-single-lens-reflex-camera-photography-digital-came-7d-side-5ab06dcdd82109-8187864315215118858853.png", subtitle: "MÁY ẢNH BLUE" },
    { id: 16, name: "Canon EOS 600D", price: "18.500.000đ", img: "https://chomayanh.vn/wp-content/uploads/2026/04/pngtree-canon-png-free-download-png-image_11620600.png", subtitle: "MÁY ẢNH RED" },
  ],
  leicaProducts: [
    { id: 17, name: "Leica Leitzphone powered by Xiaomi", price: "Liên hệ", img: "https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-127081-Leitzphone_Black_Back_1920x1440px.webp?itok=DTtfUwdc", subtitle: "Điện thoại Leitzphone" },
    { id: 18, name: "Noctilux-M 35 f/1.2 ASPH.", price: "Liên hệ", img: "https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-126378-11635_Leica_Noctilux-M_35_f1_2_ASPH_upright_1920px.webp?itok=mD93j4l5", subtitle: "Ống kính huyền thoại" },
    { id: 19, name: "Leica Q3 Monochrom", price: "Liên hệ", img: "https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-124986-19200_Leica_Q3_Monochrom_front_1920px.webp?itok=7G711CH8", subtitle: "Q3 Series" },
    { id: 20, name: "Leica SL3 Reporter", price: "Liên hệ", img: "https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-124798-10661_Leica_SL3_Reporter_front_1920px.webp?itok=PaXtg7Tq", subtitle: "Phiên bản phóng viên" },
    { id: 21, name: "Leica M EV1", price: "Liên hệ", img: "https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-124583-20229_Leica_M_EV1_front_1920px.webp?itok=Q6m5G-Hd", subtitle: "Hệ thống M Mới" },
    { id: 22, name: "Leica D-Lux 8 100 YEARS OF LEICA", price: "Liên hệ", img: "https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-122758-19197_D-Lux-8_100-YEARS-OF-LEICA_front_1920px.webp?itok=Yu9n9qcW", subtitle: "D-LUX Series", badge: "Kỷ niệm" },
    { id: 23, name: "Leica SOFORT 2 100 YEARS OF LEICA", price: "Liên hệ", img: "https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-122768-19195_SOFORT-2_100-YEARS-OF-LEICA_front_lenscap_1920px.webp?itok=FgP1G3vc", subtitle: "SOFORT Kỷ niệm" },
    { id: 24, name: "Vario-Elmarit-SL 28-70 f/2.8 ASPH.", price: "Liên hệ", img: "https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-122438-11196_Leica_Vario-Elmarit-SL_28-70_f_2_8_upright_1920px.webp?itok=tuhOX3yO", subtitle: "Ống kính SL" },
    { id: 25, name: "Leica ZM 2 Urban Green", price: "Liên hệ", img: "https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-122321-98289_Leica_ZM2_Urban_Green_Milanaise_Stainless_Steel_metal_bracelet_front_1920px_0.webp?itok=TCzr9h9b", subtitle: "Đồng hồ Leica" },
    { id: 26, name: "Leica M11-P Safari", price: "Liên hệ", img: "https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-121649-20235_M11-P_safari_front_1920px.webp?itok=RksBjFaK", subtitle: "M11 Phiên bản Safari" },
  ]
};

const ProductCard = ({ item }: { item: any, key?: any }) => (
  <Link to={`/product/${item.id}`} className="block h-[400px] bg-[#fafafa] hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 rounded-[2rem] p-8 flex flex-col items-center justify-between group overflow-hidden relative">
    <div className="w-full text-left z-10 flex justify-between items-start">
      <div>
        <h3 className="text-xl font-medium text-gray-900 tracking-tight">{item.name}</h3>
        <p className="text-xs font-medium text-gray-500 mt-1 uppercase tracking-wider">{item.subtitle}</p>
      </div>
      {item.badge && <span className="inline-block mt-0.5 px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-gray-900 text-white rounded-full">{item.badge}</span>}
    </div>
    
    <div className="flex-1 w-full flex items-center justify-center relative z-10 py-6">
      <div className="w-48 h-48 bg-gray-200 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
      <img src={item.img} alt={item.name} className="w-[85%] max-w-[220px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)] group-hover:-translate-y-2 group-hover:scale-105 group-hover:drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] relative z-10" />
    </div>
    
    <div className="w-full flex justify-between items-end z-10">
      <span className="text-[17px] font-medium text-gray-800 tracking-tight">{item.price}</span>
      <div className="flex items-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
        <button 
          onClick={(e) => { e.preventDefault(); alert("Đã thêm vào giỏ hàng!"); }}
          className="bg-black text-white px-3 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-semibold hover:bg-black/80 transition-colors flex items-center gap-1 mr-2"
        >
          <span className="material-symbols-outlined text-[14px]">add_shopping_cart</span>
          Thêm
        </button>
        <div className="flex items-center gap-1">
          <span className="text-[11px] uppercase tracking-widest font-semibold text-gray-900">Chi tiết</span>
          <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
        </div>
      </div>
    </div>
  </Link>
);

const CarouselSection = ({ title, items }: { title: string, items: any[] }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Create columns of 2 rows
  const columns = [];
  for (let i = 0; i < items.length; i += 2) {
    const col = [items[i]];
    if (i + 1 < items.length) col.push(items[i + 1]);
    columns.push(col);
  }

  useEffect(() => {
    if (isHovered) return; // Pause on hover

    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const firstChild = container.children[0] as HTMLElement;
        if (firstChild) {
          const itemWidth = firstChild.offsetWidth + 24; // 24 is the gap (gap-6)
          
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: itemWidth, behavior: 'smooth' });
          }
        }
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <div 
      className="mb-32"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-black tracking-tight mb-4">{title}</h2>
        <div className="flex gap-4 justify-center">
          <button 
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            onClick={() => {
              const el = scrollContainerRef.current;
              if (el) el.scrollBy({ left: -(el.children[0] as HTMLElement).offsetWidth - 24, behavior: 'smooth' });
            }}
          >
            <span className="material-symbols-outlined text-sm">arrow_back_ios_new</span>
          </button>
          <button 
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            onClick={() => {
              const el = scrollContainerRef.current;
              if (el) el.scrollBy({ left: (el.children[0] as HTMLElement).offsetWidth + 24, behavior: 'smooth' });
            }}
          >
            <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
          </button>
        </div>
      </div>
      
      <div className="w-full overflow-hidden">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 md:px-12 pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {columns.map((col, idx) => (
            <div key={idx} className="flex-none w-[85vw] sm:w-[calc(50%-12px)] md:w-[calc(33.33333%-16px)] flex flex-col gap-6 snap-start">
              {col.map(item => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ProductList() {
  const [heroIndex, setHeroIndex] = useState(0);

  const heroImages = [
    "https://images.pexels.com/photos/14021289/pexels-photo-14021289.jpeg",
    "https://images.pexels.com/photos/1402283/pexels-photo-1402283.jpeg",
    "https://images.pexels.com/photos/6136499/pexels-photo-6136499.jpeg",
    "https://images.pexels.com/photos/3155236/pexels-photo-3155236.jpeg"
  ];

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(heroInterval);
  }, []);

  return (
    <div className="bg-white text-black font-body selection:bg-black/10 min-h-screen">
      <Header />

      <main className="pt-24 pb-12 w-full">
        {/* Top Banner Section */}
        <section className="relative w-full mb-8 flex justify-center px-6">
          <div className="relative w-full max-w-[1100px] h-[600px] rounded-[2rem] overflow-hidden flex flex-col items-center justify-center text-white bg-black">
            {heroImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Hero Camera ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === heroIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 text-center max-w-2xl px-4">
               {/* Banner text removed per user request */}
            </div>
          </div>
        </section>

        <div className="w-full py-4">
          {/* Minimal Filter Bar */}
          <section className="mb-24 border-b border-gray-200 pb-6 mt-8">
            <div className="max-w-[1100px] mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-gray-500 flex items-center gap-2 uppercase tracking-widest font-bold">
                  Thương hiệu
                </label>
                <select className="w-full h-10 border-b border-gray-300 bg-transparent text-black text-sm focus:border-black cursor-pointer outline-none transition-colors px-0">
                  <option>Tất cả thương hiệu</option>
                  <option>Sony Alpha</option>
                  <option>Canon EOS</option>
                  <option>Fujifilm X</option>
                  <option>Nikon Z</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-gray-500 flex items-center gap-2 uppercase tracking-widest font-bold">
                  Mức giá
                </label>
                <select className="w-full h-10 border-b border-gray-300 bg-transparent text-black text-sm focus:border-black cursor-pointer outline-none transition-colors px-0">
                  <option>Mọi mức giá</option>
                  <option>Dưới 30 triệu</option>
                  <option>30 - 70 triệu</option>
                  <option>Trên 70 triệu</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-gray-500 flex items-center gap-2 uppercase tracking-widest font-bold">
                  Tình trạng
                </label>
                <select className="w-full h-10 border-b border-gray-300 bg-transparent text-black text-sm focus:border-black cursor-pointer outline-none transition-colors px-0">
                  <option>Tất cả tình trạng</option>
                  <option>Mới 100% (Seal)</option>
                  <option>Cũ (Like New 99%)</option>
                </select>
              </div>
              <div className="flex items-end h-10">
                <button className="text-sm font-bold text-black uppercase tracking-widest border-b-2 border-transparent hover:border-black transition-colors pb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">search</span>
                  Khám phá
                </button>
              </div>
            </div>
          </section>

          {/* Product Sections with Carousel 3 cols x 2 rows sliding by 1 col */}
          <CarouselSection title="Sản phẩm nổi bật" items={PRODUCT_DATA.bestSellers} />
          
          {/* Middle Promotional Banner */}
          <section className="relative w-[calc(100%-3rem)] max-w-[1100px] h-[500px] mx-auto mb-32 rounded-[2rem] overflow-hidden flex flex-col items-start justify-center p-10 md:p-16 text-white bg-black">
             <img src="https://images.unsplash.com/photo-1516961642265-531546e84af2?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[20s] hover:scale-105" alt="Promo" />
             <div className="relative z-10 max-w-lg">
                <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight drop-shadow-md">Nền tảng của sự sáng tạo.</h2>
                <p className="text-lg md:text-xl font-light text-white/90 mb-8 tracking-wide drop-shadow-sm">Khám phá dòng ống kính G Master đỉnh cao mới nhất dành cho hệ máy ảnh full-frame chuyên nghiệp.</p>
                <Link to="/product/1" className="inline-block bg-white text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                  Khám phá ngay
                </Link>
             </div>
          </section>

          <CarouselSection title="Sản phẩm mới" items={PRODUCT_DATA.newArrivals} />

          {/* Third Product Section: Leica */}
          <div className="mt-8 pt-8">
            <CarouselSection title="Khám phá di sản Leica" items={PRODUCT_DATA.leicaProducts} />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
