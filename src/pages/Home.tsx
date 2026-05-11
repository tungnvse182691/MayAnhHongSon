import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedHeading from '../components/AnimatedHeading';
import FadeIn from '../components/FadeIn';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('banchay');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-on-background font-body antialiased min-h-screen">
      <Header />

      {/* Full-Bleed Hero Banner */}
      <div className="relative h-screen w-full flex flex-col overflow-hidden bg-black text-white font-sans">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/du1mgs8hq/video/upload/v1778483464/14383252_3840_2160_25fps_gnabee.mp4"
        />

        <div className="relative z-10 flex-1 flex flex-col justify-end pb-32 px-6 md:px-12 lg:px-16 w-full">
          <FadeIn delay={4000} duration={1500}>
            <h1 className="text-[54px] text-[#cdcdcd] font-semibold mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]">
              Ký ức là vô giá.
            </h1>
            <p className="text-[32px] text-[#b4b9bf] font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Hãy lưu giữ nó bằng sự hoàn hảo.
            </p>
          </FadeIn>
        </div>
      </div>

      <main>
        {/* Sản phẩm bán chạy (Product Highlights) */}
        <section className="py-24 bg-white">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8">
            <h2 className="text-5xl font-light mb-12 text-black tracking-tight">Product highlights</h2>
            
            <div className="flex gap-8 mb-12 text-sm uppercase tracking-widest overflow-x-auto whitespace-nowrap">
              <button 
                onClick={() => setActiveTab('banchay')}
                className={`pb-1 transition-colors ${activeTab === 'banchay' ? 'text-black font-bold border-b-2 border-black' : 'text-gray-400 hover:text-black border-transparent'}`}
              >
                Best sellers
              </button>
              <button 
                onClick={() => setActiveTab('mayanh')}
                className={`pb-1 transition-colors ${activeTab === 'mayanh' ? 'text-black font-bold border-b-2 border-black' : 'text-gray-400 hover:text-black border-transparent'}`}
              >
                Cameras
              </button>
              <button 
                onClick={() => setActiveTab('lens')}
                className={`pb-1 transition-colors ${activeTab === 'lens' ? 'text-black font-bold border-b-2 border-black' : 'text-gray-400 hover:text-black border-transparent'}`}
              >
                Lenses
              </button>
            </div>

            <div className="relative">
              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeTab === 'banchay' && (
                  <>
                    <Link to="/product/19" className="bg-[#f4f4f4] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#eaeaea] block animate-in fade-in duration-500 relative overflow-hidden">
                      <div className="z-10 relative">
                        <h3 className="text-[32px] font-normal text-black mb-2 tracking-tight">Leica Q3 Monochrom</h3>
                        <p className="text-black/60 text-sm font-medium">Q3 Series</p>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                        <img 
                          alt="Leica Q3 Monochrom" 
                          className="w-full max-w-[280px] object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-auto" 
                          src="https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-124986-19200_Leica_Q3_Monochrom_front_1920px.webp?itok=7G711CH8"
                        />
                      </div>
                      <div className="z-10 relative flex justify-start">
                        <span className="flex items-center gap-2 text-sm font-semibold text-black hover:underline underline-offset-4 transition-all uppercase tracking-widest">
                          Shop now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/product/20" className="bg-[#f4f4f4] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#eaeaea] block animate-in fade-in duration-500 relative overflow-hidden">
                      <div className="z-10 relative">
                        <h3 className="text-[32px] font-normal text-black mb-2 tracking-tight">Leica SL3 Reporter</h3>
                        <p className="text-black/60 text-sm font-medium">Phiên bản phóng viên</p>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                        <img 
                          alt="Leica SL3 Reporter" 
                          className="w-[110%] max-w-[340px] object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-auto -ml-4" 
                          src="https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-124798-10661_Leica_SL3_Reporter_front_1920px.webp?itok=PaXtg7Tq"
                        />
                      </div>
                      <div className="z-10 relative flex justify-start">
                        <span className="flex items-center gap-2 text-sm font-semibold text-black hover:underline underline-offset-4 transition-all uppercase tracking-widest">
                          Shop now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/product/17" className="bg-[#f4f4f4] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#eaeaea] block animate-in fade-in duration-500 relative overflow-hidden">
                      <div className="z-10 relative">
                        <h3 className="text-[32px] font-normal text-black mb-2 tracking-tight">Leica Leitzphone</h3>
                        <p className="text-black/60 text-sm font-medium">powered by Xiaomi</p>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                        <img 
                          alt="Leica Leitzphone" 
                          className="w-full max-w-[280px] object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-auto" 
                          src="https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-127081-Leitzphone_Black_Back_1920x1440px.webp?itok=DTtfUwdc"
                        />
                      </div>
                      <div className="z-10 relative flex justify-start">
                        <span className="flex items-center gap-2 text-sm font-semibold text-black hover:underline underline-offset-4 transition-all uppercase tracking-widest">
                          Shop now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </Link>
                  </>
                )}

                {activeTab === 'mayanh' && (
                  <>
                    <Link to="/product/1" className="bg-[#f4f4f4] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#eaeaea] block animate-in fade-in duration-500 relative overflow-hidden">
                      <div className="z-10 relative">
                        <h3 className="text-[32px] font-normal text-black mb-2 tracking-tight">HP EOS 800D</h3>
                        <p className="text-black/60 text-sm font-medium">BLUE</p>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                        <img 
                          alt="HP EOS 800D" 
                          className="w-full max-w-[280px] object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-auto" 
                          src="https://chomayanh.vn/wp-content/uploads/2026/04/kisspng-single-lens-reflex-camera-photography-digital-came-7d-side-5ab06dcdd82109-8187864315215118858853.png"
                        />
                      </div>
                      <div className="z-10 relative flex justify-start">
                        <span className="flex items-center gap-2 text-sm font-semibold text-black hover:underline underline-offset-4 transition-all uppercase tracking-widest">
                          Shop now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </Link>
                    
                    <Link to="/product/2" className="bg-[#f4f4f4] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#eaeaea] block animate-in fade-in duration-500 relative overflow-hidden">
                      <div className="z-10 relative">
                        <h3 className="text-[32px] font-normal text-black mb-2 tracking-tight">HP EOS 600D</h3>
                        <p className="text-black/60 text-sm font-medium">RED</p>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                        <img 
                          alt="HP EOS 600D" 
                          className="w-[110%] max-w-[340px] object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-auto -ml-4" 
                          src="https://chomayanh.vn/wp-content/uploads/2026/04/pngtree-canon-png-free-download-png-image_11620600.png"
                        />
                      </div>
                      <div className="z-10 relative flex justify-start">
                        <span className="flex items-center gap-2 text-sm font-semibold text-black hover:underline underline-offset-4 transition-all uppercase tracking-widest">
                          Shop now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/product/3" className="bg-[#f4f4f4] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#eaeaea] block animate-in fade-in duration-500 relative overflow-hidden">
                      <div className="z-10 relative">
                        <h3 className="text-[32px] font-normal text-black mb-2 tracking-tight">HP EOS 200D</h3>
                        <p className="text-black/60 text-sm font-medium">CAM</p>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                        <img 
                          alt="HP EOS 200D" 
                          className="w-full max-w-[280px] object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-auto" 
                          src="https://chomayanh.vn/wp-content/uploads/2026/04/Hinh_anh_-_Banner_top-removebg-preview.png"
                        />
                      </div>
                      <div className="z-10 relative flex justify-start">
                        <span className="flex items-center gap-2 text-sm font-semibold text-black hover:underline underline-offset-4 transition-all uppercase tracking-widest">
                          Shop now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </Link>
                  </>
                )}

                {activeTab === 'lens' && (
                  <>
                    <Link to="/product/18" className="bg-[#f4f4f4] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#eaeaea] block animate-in fade-in duration-500 relative overflow-hidden">
                      <div className="z-10 relative">
                        <h3 className="text-[32px] font-normal text-black mb-2 tracking-tight">Noctilux-M 35 f/1.2 ASPH.</h3>
                        <p className="text-black/60 text-sm font-medium">Masterpiece.</p>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                        <img 
                          alt="Noctilux Lens" 
                          className="w-full max-w-[200px] object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-auto" 
                          src="https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-126378-11635_Leica_Noctilux-M_35_f1_2_ASPH_upright_1920px.webp?itok=mD93j4l5"
                        />
                      </div>
                      <div className="z-10 relative flex justify-start">
                        <span className="flex items-center gap-2 text-sm font-semibold text-black hover:underline underline-offset-4 transition-all uppercase tracking-widest">
                          Shop now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/product/24" className="bg-[#f4f4f4] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#eaeaea] block animate-in fade-in duration-500 relative overflow-hidden">
                      <div className="z-10 relative">
                        <h3 className="text-[32px] font-normal text-black mb-2 tracking-tight">Vario-Elmarit-SL 28-70</h3>
                        <p className="text-black/60 text-sm font-medium">Versatility.</p>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                        <img 
                          alt="Vario Lens" 
                          className="w-full max-w-[200px] object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-auto" 
                          src="https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-122438-11196_Leica_Vario-Elmarit-SL_28-70_f_2_8_upright_1920px.webp?itok=tuhOX3yO"
                        />
                      </div>
                      <div className="z-10 relative flex justify-start">
                        <span className="flex items-center gap-2 text-sm font-semibold text-black hover:underline underline-offset-4 transition-all uppercase tracking-widest">
                          Shop now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </Link>

                    <Link to="/product/21" className="bg-[#f4f4f4] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#eaeaea] block animate-in fade-in duration-500 relative overflow-hidden">
                      <div className="z-10 relative">
                        <h3 className="text-[32px] font-normal text-black mb-2 tracking-tight">Leica M EV1</h3>
                        <p className="text-black/60 text-sm font-medium">New System.</p>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                        <img 
                          alt="Leica M EV1" 
                          className="w-full max-w-[200px] object-contain group-hover:scale-105 transition-transform duration-700 pointer-events-auto" 
                          src="https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-124583-20229_Leica_M_EV1_front_1920px.webp?itok=Q6m5G-Hd"
                        />
                      </div>
                      <div className="z-10 relative flex justify-start">
                        <span className="flex items-center gap-2 text-sm font-semibold text-black hover:underline underline-offset-4 transition-all uppercase tracking-widest">
                          Shop now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </span>
                      </div>
                    </Link>
                  </>
                )}
              </div>


              {/* Right Arrow */}
              <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-10 w-12 h-12 bg-[#666666] hover:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Pagination Indicators with Zoom Effect */}
            <div className="flex justify-center mt-12 gap-3 items-center h-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <button 
                  key={i}
                  className={`rounded-full transition-all duration-300 ease-out 
                    ${i === 1 ? 'w-8 h-[6px] bg-black shadow-md' : 'w-2 h-2 bg-gray-300 hover:w-6 hover:bg-black hover:shadow-md'}
                  `}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Banner Tinh Tế */}
        <section className="w-full relative h-[250px] overflow-hidden group">
           <img 
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2000&auto=format&fit=crop" 
              alt="Camera Setup" 
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000"
           />
           <div className="absolute inset-0 bg-black/40"></div>
           <div className="absolute inset-0 flex items-center justify-center px-4">
             <p className="text-white text-2xl md:text-3xl font-light tracking-[0.3em] uppercase drop-shadow-lg text-center">Đỉnh cao quang học</p>
           </div>
        </section>

        {/* Ống kính chuyên nghiệp (Lenses) */}
        <section className="py-24 bg-white">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-normal text-black mb-4">Ống kính chuyên nghiệp</h2>
              <p className="text-gray-500 text-lg">Hệ thống ống kính cao cấp giúp bạn chinh phục mọi góc nhìn.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {/* Product 1 */}
              <div className="bg-[#f6f6f6] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#ebebeb]">
                <h3 className="text-base tracking-widest text-black/80 font-medium uppercase">LEICA D-LUX 8</h3>
                <div className="w-full flex justify-center py-10 flex-1 items-center">
                  <img className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-xl" src="https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-122758-19197_D-Lux-8_100-YEARS-OF-LEICA_front_1920px.webp?itok=Yu9n9qcW" alt="D-Lux 8"/>
                </div>
                <div className="text-center w-full">
                  <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                    Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                  </span>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-[#d9d9d9] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#d0d0d0]">
                <h3 className="text-base tracking-widest text-black/80 font-medium uppercase">LEICA SOFORT 2</h3>
                <div className="w-full flex justify-center py-10 flex-1 items-center">
                  <img className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-xl" src="https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-122768-19195_SOFORT-2_100-YEARS-OF-LEICA_front_lenscap_1920px.webp?itok=FgP1G3vc" alt="SOFORT 2"/>
                </div>
                <div className="text-center w-full">
                  <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                    Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                  </span>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-[#f6f6f6] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#ebebeb]">
                <h3 className="text-base tracking-widest text-black/80 font-medium uppercase">LEICA ZM 2 URBAN GREEN</h3>
                <div className="w-full flex justify-center py-10 flex-1 items-center">
                  <img className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-xl" src="https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-122321-98289_Leica_ZM2_Urban_Green_Milanaise_Stainless_Steel_metal_bracelet_front_1920px_0.webp?itok=TCzr9h9b" alt="Leica ZM 2"/>
                </div>
                <div className="text-center w-full">
                  <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                    Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                  </span>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-[#f6f6f6] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#ebebeb]">
                <h3 className="text-base tracking-widest text-black/80 font-medium uppercase">LEICA M11-P SAFARI</h3>
                <div className="w-full flex justify-center py-10 flex-1 items-center">
                  <img className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-xl" src="https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-121649-20235_M11-P_safari_front_1920px.webp?itok=RksBjFaK" alt="Leica M11-P"/>
                </div>
                <div className="text-center w-full">
                  <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                    Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                  </span>
                </div>
              </div>

              {/* Product 5 */}
              <div className="bg-[#f0f0f0] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#e0e0e0]">
                <h3 className="text-base tracking-widest text-black/80 font-medium uppercase">LEICA M11-P</h3>
                <div className="w-full flex justify-center py-10 flex-1 items-center">
                  <img className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-xl" src="https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-101774-Leica_M11-P_black_front_1920x1440px.png.webp?itok=f25_LK0k" alt="Leica M11-P Black"/>
                </div>
                <div className="text-center w-full">
                  <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                    Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                  </span>
                </div>
              </div>

              {/* Product 6 */}
              <div className="bg-[#f6f6f6] h-[600px] p-10 flex flex-col justify-between group cursor-pointer transition-colors hover:bg-[#ebebeb]">
                <h3 className="text-base tracking-widest text-black/80 font-medium uppercase">LEICA Q3 43</h3>
                <div className="w-full flex justify-center py-10 flex-1 items-center">
                  <img className="w-full max-w-[280px] object-contain group-hover:scale-[1.03] transition-transform duration-700 drop-shadow-xl" src="https://leica-camera.com/sites/default/files/styles/product_medium_teaser_media_3x2_desktop/public/pm-113007-Leica_Q3-43_front_PIM_1920x1440.png.webp?itok=JTmuM0tL" alt="Leica Q3 43"/>
                </div>
                <div className="text-center w-full">
                  <span className="flex items-center justify-center gap-2 text-sm text-black/60 group-hover:text-black transition-colors">
                    Discover <span className="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
                <Link to="/products" className="inline-flex items-center gap-2 border border-black text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors">
                  Khám phá tất cả <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                </Link>
            </div>
          </div>
        </section>

        {/* Combo Tiết Kiệm */}
        <section className="w-full flex flex-col">
          {/* Top Banner */}
          <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop" 
              alt="Combo Máy Ảnh" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out object-center"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md">CỔ ĐIỂN VÀ TINH TẾ</h2>
              <p className="text-lg text-white/90 mb-8 font-light max-w-lg drop-shadow">Nét đẹp cổ điển đi cùng sức mạnh công nghệ hiện đại.</p>
              <div>
                <button className="bg-white text-black px-8 py-3 font-medium text-sm transition-colors hover:bg-gray-100 uppercase tracking-widest flex items-center gap-2">
                  Khám phá combo <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                </button>
              </div>
            </div>
          </div>
          {/* Bottom Banner */}
          <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=2000&auto=format&fit=crop" 
              alt="Combo Chuyên Nghiệp" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out object-center"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight drop-shadow-md">SỨC MẠNH VƯỢT TRỘI</h2>
              <p className="text-lg text-white/90 mb-8 font-light max-w-lg drop-shadow">Lựa chọn tối ưu cho những nhà làm phim đa năng.</p>
              <div>
                <button className="bg-white text-black px-8 py-3 font-medium text-sm transition-colors hover:bg-gray-100 uppercase tracking-widest flex items-center gap-2">
                  Khám phá combo <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* The Blog Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-normal text-black">The CMA Blog</h2>
              <button className="border border-black text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors">
                All Blog Posts
              </button>
            </div>

            <div className="relative w-full overflow-hidden">
              {/* Main Content Area */}
              <div className="flex items-center">
                {/* Left Cutoff Image */}
                <div className="hidden md:block w-[5%] h-[600px] opacity-40 shrink-0">
                  <img className="w-full h-full object-cover object-right" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop" alt="Previous Post"/>
                </div>

                {/* Left Arrow (Absolute positioning on top of image edge) */}
                <button className="absolute left-[2%] z-10 w-12 h-12 bg-black/20 hover:bg-black/40 border border-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all">
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                </button>

                {/* Center Main Image Content */}
                <Link to="/blog/1" className="w-[90%] flex-1 h-[600px] relative group cursor-pointer border-x-[4px] border-white shrink-0 block overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop" alt="Current Post"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-10 left-10 text-white z-20">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-90">FEATURED • Q-CAMERAS</p>
                    <h3 className="text-3xl lg:text-4xl font-semibold mb-3 group-hover:underline">Bali: The Island of Gods and Silence</h3>
                    <p className="text-sm font-medium opacity-80">Julia Nimke</p>
                  </div>
                </Link>

                {/* Right Arrow */}
                <button className="absolute right-[2%] z-10 w-12 h-12 bg-black/20 hover:bg-black/40 border border-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-all">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>

                {/* Right Cutoff Image */}
                <div className="hidden md:block w-[5%] h-[600px] opacity-40 shrink-0">
                  <img className="w-full h-full object-cover object-left" src="https://images.unsplash.com/photo-1516483638261-f4089025062b?q=80&w=1000&auto=format&fit=crop" alt="Next Post"/>
                </div>
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center mt-8 gap-[6px]">
              <span className="w-1 h-[14px] bg-black"></span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
