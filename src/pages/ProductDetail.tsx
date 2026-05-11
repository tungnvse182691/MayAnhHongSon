import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductDetail() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 3000);
    }, 800);
  };

  return (
    <div className="bg-background font-body text-on-background antialiased min-h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="max-w-container_max mx-auto px-margin_mobile md:px-gutter pt-32 pb-12">
        {/* Breadcrumb & Brand Badge */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <nav className="flex text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60 gap-3">
            <button className="hover:text-primary cursor-pointer transition-colors" onClick={() => navigate('/')}>Trang chủ</button>
            <span className="opacity-30">/</span>
            <button className="hover:text-primary cursor-pointer transition-colors" onClick={() => navigate('/products')}>Máy ảnh Mirrorless</button>
            <span className="opacity-30">/</span>
            <span className="text-on-surface font-bold">Sony</span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase">Precision Optics • Sony Alpha</span>
            <div className="h-px w-8 bg-outline-variant/30"></div>
            <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-primary/10">Còn hàng</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-square w-full bg-surface-container-low rounded-[2rem] overflow-hidden border border-outline-variant/10 shadow-sm product-image-container group">
              <img alt="Sony Alpha a7 IV Mirrorless Camera" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe79NPmEG0PcY0zVkhXNDvDg-kzZyhtZYftTqAVW8CgUz81IOmR-JV1jfOom5mQkP1H30PaPExIXUU2enJhHkEEM4ZJpkItbP-hyiCTr5GEEN7v8y3lTe8uZV4bjsB7wteqYrto73dyFB6lM850KN-XLHn3hLUaBBvOKKrLIffj27UpSy39sG5kS96d0xQDGIhWBeTJ3R73zFpLV-Ilmh43IsNyY9fDgx52-dEBKH2twGXcQTuSMgroPENF5e_Vxgr5sLF4MgH3w"/>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              <div className="w-24 h-24 flex-shrink-0 rounded-2xl border-2 border-primary overflow-hidden cursor-pointer shadow-md bg-white">
                <img alt="Mặt trước" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1SXz3SEM5ZW-ToJ5mB6nwxEKZXa324gArfyTfZsyBZ_xwQ79dEFk7XcUcz7dMQzA1iSZoePwaTjrsIb8yMyjS7TBFuRw2HxS_AAnji3-Z9FyTXIQDyTt48-gHJcWjLaUQKZ4_5fkszSgsASe_LmIEGEKAQADEPmHSCn4sAFQ7g3XzZIYx9BjcGPefBNAo4b-N551KYf1A1e4OmTI2s272NDQnsIvLQa5Dv0lTT73SrZ9ER-AXHwn7oZ5XM6BmNJuPcds8YlmsSg"/>
              </div>
              <div className="w-24 h-24 flex-shrink-0 rounded-2xl border border-outline-variant/20 overflow-hidden cursor-pointer hover:border-primary transition-all bg-surface-container-low">
                <img alt="Góc trên" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3gXYnFvkMxultHeKbKlVy1J9h73FI3MJCmPKrZk8xSkvGoiSrxCPePzKO4kljrF867bJT757ehzvhrYds0-NXGZZaVfy-vJ3eiPdweZHcbZzf7fw3Azb51KQLO9O8YLRKBH3-byVLbagv8k5sVYcpXqGV71rFSkalhPuYT3A33oUqDIJ1JtL4yTHametLNeGjks-TVF1GEDRimrro0rLBHL98Y03K5Qojj8u_h38LDPEfodgrCdWm0sOUNU0ZZkYTz3kCgJGjmw"/>
              </div>
              <div className="w-24 h-24 flex-shrink-0 rounded-2xl border border-outline-variant/20 overflow-hidden cursor-pointer hover:border-primary transition-all bg-surface-container-low">
                <img alt="Màn hình LCD" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdLqbGfFZlGaMeFZv-SELQtl23j9UXKd4566S1zhdcLCMRwVgECK03n8CQRVZ-2vC_Ew6GokAhrKkCorHQM_Y5t_j50ncGiQeEZb0C12oZbIZaiQ0fNQyoX8MUpiym9RHZX9o25ekKqoLFzQe8wkDdRULazjjW7_LwCnftiXznajOPuW4iNEkhZWyhWZsCfA5I1ev7Aj8xbl19puUZrxc5hezj6Nh-vIfC1Kzer3tPB0vr67WJRA5IyE7xLEGdCuAJrMMf8aUWvw"/>
              </div>
              <div className="w-24 h-24 flex-shrink-0 rounded-2xl border border-outline-variant/20 overflow-hidden cursor-pointer hover:border-primary transition-all bg-surface-container-low">
                <img alt="Cổng kết nối" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEvhr8I3NQE5Eu8p2-xX3sKErdEBCPQzLgPzjoLp4MdfDaFoCu21joPmLKSutNKTN1lLvqxz2PpQXhv91SGwKhsBHsvUIRFlPKornacP_IOwewQU3r3khdS5Q7H282ruQYHP0m3zBggIE5u2oFOLsEKfX5EzP0yOPWQLtmmDwTjaMUlZPaqTpiTpFDPUCvc3ZdOrZlJpN1E3-B0_QtUARE_LLVRqhU92hF8ob-U4ag-x69vxK-STO5_09ZkB3jpb-1tDziem1k9g"/>
              </div>
            </div>
          </div>

          {/* Right: Details & Purchase */}
          <div className="flex flex-col justify-center">
            <h1 className="font-h1 text-on-surface mb-6 leading-tight">Sony Alpha a7 IV Mirrorless Camera with 28-70mm Lens</h1>
            <div className="mb-10 flex items-baseline gap-4">
              <span className="font-price text-4xl text-primary">59.990.000 ₫</span>
              <span className="text-on-surface-variant line-through text-lg opacity-40">64.500.000 ₫</span>
            </div>

            {/* Purchase Box */}
            <div className="bg-surface-container-low/50 rounded-[2.5rem] p-8 border border-outline-variant/10 space-y-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Số lượng</label>
                  <div className="flex items-center bg-white border border-outline-variant/20 rounded-2xl p-1">
                    <button 
                      className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-low rounded-xl transition-all text-primary disabled:opacity-30"
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      disabled={quantity <= 1}
                    >
                      <span className="material-symbols-outlined text-[20px]">remove</span>
                    </button>
                    <span className="flex-1 text-center font-bold text-lg">{quantity}</span>
                    <button 
                      className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-low rounded-xl transition-all text-primary"
                      onClick={() => setQuantity(prev => prev + 1)}
                    >
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Ghi chú đơn hàng</label>
                  <div className="bg-white border border-outline-variant/20 rounded-2xl p-1">
                    <input className="w-full h-10 bg-transparent outline-none border-none text-sm px-3 focus:ring-0 placeholder-on-surface/30" placeholder="Lưu ý đặc biệt..."/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <button 
                  className={`w-full py-5 rounded-2xl font-bold transition-all shadow-lg transform active:scale-[0.98] text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-2 ${
                    isAdded ? 'bg-green-600 text-white' : 'bg-on-surface text-surface hover:bg-primary'
                  }`} 
                  onClick={handleAddToCart}
                  disabled={isAdding}
                >
                  {isAdding ? (
                    <span className="animate-spin material-symbols-outlined">progress_activity</span>
                  ) : isAdded ? (
                    <>
                      <span className="material-symbols-outlined">check_circle</span>
                      Đã thêm vào giỏ
                    </>
                  ) : (
                    'Thêm vào giỏ hàng'
                  )}
                </button>
                <button 
                  className="w-full border border-outline-variant/30 text-on-surface py-5 rounded-2xl font-bold hover:bg-white transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-sm uppercase tracking-[0.1em]"
                  onClick={() => alert('Đã thêm vào danh sách yêu thích!')}
                >
                  <span className="material-symbols-outlined text-xl">favorite</span>
                    Lưu vào danh sách ước
                </button>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-tighter">Miễn phí vận chuyển</p>
                  <p className="text-[9px] text-on-surface-variant">Giao hỏa tốc 2h tại TP.HCM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-outline-variant/10">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-tighter">Bảo hành chính hãng</p>
                  <p className="text-[9px] text-on-surface-variant">24 tháng - 1 đổi 1 trong 30 ngày</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs & Detailed Info */}
        <div className="mt-24 border-t border-outline-variant/10 pt-16">
          <div className="flex justify-center border-b border-outline-variant/10 mb-16 overflow-x-auto scrollbar-hide">
            <button 
              className={`px-10 py-6 font-bold border-b-2 transition-colors whitespace-nowrap uppercase tracking-[0.2em] text-[10px] ${activeTab === 'description' ? 'text-primary border-primary' : 'text-on-surface-variant/60 border-transparent hover:text-primary'}`}
              onClick={() => setActiveTab('description')}
            >
              Mô tả sản phẩm
            </button>
            <button 
              className={`px-10 py-6 font-bold border-b-2 transition-colors whitespace-nowrap uppercase tracking-[0.2em] text-[10px] ${activeTab === 'specs' ? 'text-primary border-primary' : 'text-on-surface-variant/60 border-transparent hover:text-primary'}`}
              onClick={() => setActiveTab('specs')}
            >
              Thông số kỹ thuật
            </button>
            <button 
              className={`px-10 py-6 font-bold border-b-2 transition-colors whitespace-nowrap uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 ${activeTab === 'reviews' ? 'text-primary border-primary' : 'text-on-surface-variant/60 border-transparent hover:text-primary'}`}
              onClick={() => setActiveTab('reviews')}
            >
                Đánh giá khách hàng <span className={`px-2 py-0.5 rounded-full text-[9px] ${activeTab === 'reviews' ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface'}`}>12</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8 space-y-12">
              <AnimatePresence mode="wait">
                {activeTab === 'description' && (
                  <motion.div 
                    key="description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-12"
                  >
                    <div className="space-y-6">
                      <h2 className="font-h2 text-on-surface leading-tight">Trải nghiệm tiêu chuẩn mới của nhiếp ảnh Hybrid</h2>
                      <p className="text-lg text-on-surface-variant leading-relaxed font-light">
                          Sony Alpha a7 IV là chiếc máy ảnh đa năng vượt qua giới hạn cơ bản, sở hữu hiệu suất mạnh mẽ trong cả chụp ảnh tĩnh và quay phim. Là một chiếc máy ảnh mirrorless hybrid tiên tiến, a7 IV mang đến độ phân giải và khả năng lấy nét tự động (AF) đỉnh cao thu hút các nhiếp ảnh gia, cùng khả năng ghi hình 4K 60p mạnh mẽ dành cho các nhà làm phim và sáng tạo nội dung.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-white p-8 rounded-[2rem] border border-outline-variant/10 shadow-sm hover:shadow-md transition-all group">
                        <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                          <span className="material-symbols-outlined">camera</span>
                        </div>
                        <h4 className="font-bold text-xl text-on-surface mb-3">Cảm biến 33MP Exmor R CMOS</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Cảm biến Full-frame mới phát triển mang lại độ chi tiết ấn tượng và hiệu suất ánh sáng yếu vượt trội với dải tương phản động cao.</p>
                      </div>
                      <div className="bg-white p-8 rounded-[2rem] border border-outline-variant/10 shadow-sm hover:shadow-md transition-all group">
                        <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                          <span className="material-symbols-outlined">memory</span>
                        </div>
                        <h4 className="font-bold text-xl text-on-surface mb-3">Bộ xử lý BIONZ XR</h4>
                        <p className="text-sm text-on-surface-variant leading-relaxed">Kế thừa từ dòng flagship a1, bộ xử lý này cho phép xử lý tốc độ cao và khả năng lấy nét thời gian thực cực kỳ chính xác.</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'specs' && (
                  <motion.div 
                    key="specs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <h2 className="font-h2 text-on-surface leading-tight">Thông số kỹ thuật chi tiết</h2>
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { label: 'Cảm biến', value: '33 MP Full-Frame Exmor R CMOS' },
                        { label: 'Bộ xử lý hình ảnh', value: 'BIONZ XR' },
                        { label: 'Ngàm ống kính', value: 'Sony E-mount' },
                        { label: 'Dải ISO', value: '100 - 51,200 (Mở rộng 50 - 204,800)' },
                        { label: 'Hệ thống lấy nét', value: '759 điểm lấy nét theo pha, Real-time Eye AF' },
                        { label: 'Ổn định hình ảnh', value: 'Chống rung 5 trục trong thân máy (5.5 stops)' },
                        { label: 'Video', value: '4K 60p (Super 35mm), 4K 30p (Full-frame), 10-bit 4:2:2' },
                        { label: 'Màn hình', value: 'LCD cảm ứng xoay lật 3.0 inch, 1.03 triệu điểm' },
                        { label: 'Ống ngắm', value: 'EVF OLED 3.69 triệu điểm, 120fps' },
                        { label: 'Kết nối', value: 'Wi-Fi 5GHz, Bluetooth, USB-C (PD), HDMI type A' }
                      ].map((spec, i) => (
                        <div key={i} className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-outline-variant/10 gap-2">
                          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{spec.label}</span>
                          <span className="text-sm font-medium text-on-surface">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'reviews' && (
                  <motion.div 
                    key="reviews"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-10"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-outline-variant/10">
                      <div>
                        <h2 className="font-h2 text-on-surface leading-tight mb-2">Đánh giá từ người dùng</h2>
                        <div className="flex items-center gap-4">
                          <div className="flex text-primary">
                            {[1, 2, 3, 4, 5].map(i => (
                              <span key={i} className="material-symbols-outlined fill-1">star</span>
                            ))}
                          </div>
                          <span className="text-sm font-bold">4.9 / 5.0 dựa trên 12 đánh giá</span>
                        </div>
                      </div>
                      <button className="bg-on-surface text-surface px-8 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest hover:bg-primary transition-all">Viết đánh giá của bạn</button>
                    </div>

                    <div className="space-y-8">
                      {[
                        { name: 'Nguyễn Văn A', date: '12/10/2024', content: 'Máy lấy nét cực nhanh, đặc biệt là chế độ lấy nét mắt người và động vật. Chất lượng file RAW 33MP rất tốt, đủ để crop thoải mái.', rating: 5 },
                        { name: 'Trần Thị B', date: '05/10/2024', content: 'Dùng để quay vlog và làm phim ngắn thì không chê vào đâu được. 10-bit màu rất đẹp, dễ hậu kỳ.', rating: 5 },
                        { name: 'Phạm Minh C', date: '28/09/2024', content: 'Body cầm rất đầm tay, menu mới dễ sử dụng hơn đời cũ nhiều. Pin cũng khá trâu.', rating: 4 }
                      ].map((review, i) => (
                        <div key={i} className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-bold text-on-surface">{review.name}</p>
                              <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{review.date}</p>
                            </div>
                            <div className="flex text-primary">
                              {[...Array(review.rating)].map((_, j) => (
                                <span key={j} className="material-symbols-outlined text-sm fill-1">star</span>
                              ))}
                            </div>
                          </div>
                          <p className="text-on-surface-variant leading-relaxed">{review.content}</p>
                          <div className="h-px bg-outline-variant/5 w-full"></div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Specs Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-[2.5rem] border border-outline-variant/10 overflow-hidden shadow-xl sticky top-28">
                <div className="bg-inverse-surface p-8">
                  <h3 className="font-bold text-surface-bright uppercase tracking-[0.2em] text-[10px]">Thông số nổi bật</h3>
                </div>
                <div className="divide-y divide-outline-variant/5">
                  <div className="flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Cảm biến</span>
                    <span className="text-sm font-bold text-on-surface">33MP Full-Frame</span>
                  </div>
                  <div className="flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">ISO</span>
                    <span className="text-sm font-bold text-on-surface">100 - 51200</span>
                  </div>
                  <div className="flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Video</span>
                    <span className="text-sm font-bold text-on-surface">4K 60p 10-Bit</span>
                  </div>
                  <div className="flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Lấy nét</span>
                    <span className="text-sm font-bold text-on-surface">759 Điểm Phase</span>
                  </div>
                  <div className="flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Lưu trữ</span>
                    <span className="text-sm font-bold text-on-surface">Dual SD/CFexpress A</span>
                  </div>
                  <div className="flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors">
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Trọng lượng</span>
                    <span className="text-sm font-bold text-on-surface">658g (Thân máy)</span>
                  </div>
                </div>
                <div className="p-6 bg-surface-container-low/30">
                  <button className="w-full py-4 border border-primary/20 text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all text-[10px] uppercase tracking-widest">Tải xuống Catalogue (PDF)</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
