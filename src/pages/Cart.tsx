import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../components/Footer';

export default function Cart() {
  const navigate = useNavigate();

  useEffect(() => {
    const nav = document.getElementById('main-nav');
    const handleScroll = () => {
      if (!nav) return;
      if (window.scrollY > 30) {
        nav.classList.add('h-16', 'bg-black');
        nav.classList.remove('h-20', 'bg-black/95');
      } else {
        nav.classList.remove('h-16', 'bg-black');
        nav.classList.add('h-20', 'bg-black/95');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container antialiased min-h-screen">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-[100] h-20 glass-nav border-b border-white/5 bg-black/95 transition-all duration-500" id="main-nav">
        <div className="flex justify-between items-center px-margin_mobile md:px-gutter h-full max-w-container_max mx-auto gap-gutter">
          <Link className="flex items-center gap-2 h-full py-4 shrink-0" to="/">
            <img alt="ChoMáyẢnh.vn" className="h-9 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida/ADBb0uhlyiQMDoeG38GBExfPDA9lNP0jQnX-KOH8Jl2KHU-dkcB7DOiAH-X0ngvWZcfGdMQUu0yV3URx6A9X9f6mTBk287qhA6M3yme_M9x-VAhlwhEYgOnb-vFwRohFehPbG4DNGonPcCnc9EfRsYWcOr_vW6o3jPU2mtSEnEjOVKF-YZ_7pnSvthfxMc9_u0IkpTrEXYmy2InE2JLUNqP6STTeZvuNFrUWKrZ2FDdS9TvsAGm1N4SFTTwYWRBZe6Ly89Mb3NduyKPE"/>
          </Link>
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full h-10 bg-white/10 border border-white/10 rounded-full flex items-center px-4 backdrop-blur-xl group focus-within:bg-white/15 transition-all">
              <span className="material-symbols-outlined text-white/40 group-focus-within:text-white mr-3 text-xl">search</span>
              <input className="bg-transparent border-none focus:ring-0 outline-none text-white w-full placeholder-white/30 text-sm" placeholder="Tìm kiếm siêu phẩm..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex items-center gap-10 text-white/70 font-label-sm uppercase tracking-[0.2em] text-[11px]">
              <Link className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full" to="/products">Máy ảnh</Link>
              <Link className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full" to="/products">Ống kính</Link>
              <Link className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all hover:after:w-full" to="/services">Dịch vụ</Link>
            </nav>
            <div className="flex items-center gap-6">
              <div className="relative cursor-pointer group text-white/80 hover:text-white" onClick={() => navigate('/orders')} title="Đơn hàng của tôi">
                <span className="material-symbols-outlined text-[26px] transition-transform group-hover:scale-105">receipt_long</span>
              </div>
              <div className="relative cursor-pointer group text-white/80 hover:text-white" onClick={() => navigate('/cart')} title="Giỏ hàng">
                <span className="material-symbols-outlined text-[26px] transition-transform group-hover:scale-105">shopping_cart</span>
                <span className="absolute -top-1.5 -right-1.5 bg-secondary text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-black">2</span>
              </div>
              <div className="cursor-pointer group text-white/80 hover:text-white">
                <span className="material-symbols-outlined text-[26px] transition-transform group-hover:scale-105">person</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-container_max mx-auto px-margin_mobile md:px-gutter pt-36 pb-section_gap">
        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-3 relative cursor-pointer" onClick={() => navigate('/cart')}>
              <div className="w-10 h-10 rounded-full bg-on-background text-background flex items-center justify-center font-bold text-sm shadow-lg">1</div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-on-background relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-on-background">Giỏ hàng</span>
            </div>
            <div className="w-16 h-[1px] bg-outline-variant/30"></div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-outline-variant bg-surface-container-low text-on-surface-variant flex items-center justify-center font-bold text-sm">2</div>
              <span className="text-[10px] uppercase tracking-widest font-medium text-on-surface-variant">Thanh toán</span>
            </div>
            <div className="w-16 h-[1px] bg-outline-variant/30"></div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-outline-variant bg-surface-container-low text-on-surface-variant flex items-center justify-center font-bold text-sm">3</div>
              <span className="text-[10px] uppercase tracking-widest font-medium text-on-surface-variant">Hoàn tất</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: Cart & Shipping */}
          <div className="lg:col-span-8 space-y-16">
            {/* Cart Section */}
            <section>
              <h2 className="font-h2 text-h2 mb-8 text-on-surface flex items-center gap-4">
                <span>Giỏ hàng</span>
                <span className="text-sm font-normal text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">(2 sản phẩm)</span>
              </h2>
              <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-3xl overflow-hidden shadow-sm">
                <table className="w-full border-collapse text-left">
                  <thead className="bg-surface-container-low/50 border-b border-outline-variant/30">
                    <tr>
                      <th className="p-8 font-bold text-[10px] uppercase tracking-widest text-on-surface-variant">Sản phẩm</th>
                      <th className="p-8 font-bold text-[10px] uppercase tracking-widest text-on-surface-variant text-center">Số lượng</th>
                      <th className="p-8 font-bold text-[10px] uppercase tracking-widest text-on-surface-variant text-right">Tạm tính</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20">
                    {/* Cart Item 1 */}
                    <tr className="group hover:bg-surface-container-low/20 transition-colors cursor-pointer" onClick={() => navigate('/product/1')}>
                      <td className="p-8">
                        <div className="flex items-center gap-8">
                          <div className="w-28 aspect-[4/3] rounded-2xl bg-surface-container overflow-hidden flex-shrink-0 shadow-inner">
                            <img alt="Sony Alpha a7 IV" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdUf3JyJPyN9Tf8eMATzHdPgIjWerRDePcZcZsnSqYl6WV6q87JjsbVHnNLynI9x4_pEUZ1oM-yJsNfmocOr212ccPw2RaTYvxCujpzS3F4I8rRufHcRgrfIbSqsIanclfX4heC2o3NTXhKt_FkxHgWNfhFkqD4T2BmZpvXdsNZvLOi8HROKyJP5Mu2csMhm4zbb1pEulBhjNN1wFdpMpG0E67rPKo_WsUUG95HdujIdsHumjJTKBYjLGsrGtXc71Olgs9ddg8Dg"/>
                          </div>
                          <div className="space-y-1">
                            <p className="font-bold text-body text-on-surface group-hover:text-primary transition-colors">Sony Alpha a7 IV Mirrorless</p>
                            <p className="text-xs text-on-surface-variant/70 uppercase tracking-wider">Thân máy / Đen</p>
                            <button className="flex items-center gap-1.5 text-error text-[11px] font-bold uppercase tracking-wider mt-4 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                              <span className="material-symbols-outlined text-[16px]">close</span> Xóa
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="p-8" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-center border border-outline-variant rounded-full w-fit mx-auto overflow-hidden bg-surface">
                          <button className="p-2.5 hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-[18px]">remove</span></button>
                          <span className="px-5 font-bold text-sm min-w-[3rem] text-center">1</span>
                          <button className="p-2.5 hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-[18px]">add</span></button>
                        </div>
                      </td>
                      <td className="p-8 text-right">
                        <span className="font-price text-xl text-on-surface">82,990,000đ</span>
                      </td>
                    </tr>
                    
                    {/* Cart Item 2 */}
                    <tr className="group hover:bg-surface-container-low/20 transition-colors cursor-pointer" onClick={() => navigate('/product/2')}>
                      <td className="p-8">
                        <div className="flex items-center gap-8">
                          <div className="w-28 aspect-[4/3] rounded-2xl bg-surface-container overflow-hidden flex-shrink-0 shadow-inner">
                            <img alt="Sony FE 24-70mm f/2.8 GM II" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvxa-GEUo07Oasgn_welV6dyutRbYW4u4jh-qA_6lq8P9qblzTS6QW2AqAVJj5kjC6fXcpSMITmXNgZAI98xxwdj7MfkSXGk1FYm0zpE3zgVi3BcOirXK3xVdIuGNT6WBgVlC7g2Q2sMKXAm2l-M7zGvoGAxmboC_v2REtOL7VetaAV4edSMQhnb1-NE3JELc4moXV-jha1M0P3ePcmvL2IzZ-rQ5cBkuFo5E-KrzQeuRxQp0GpeLLNJAtYcdqjmMCwq-Vdme6vg"/>
                          </div>
                          <div className="space-y-1">
                            <p className="font-bold text-body text-on-surface group-hover:text-primary transition-colors">Sony FE 24-70mm f/2.8 GM II</p>
                            <p className="text-xs text-on-surface-variant/70 uppercase tracking-wider">Ống kính E-Mount</p>
                            <button className="flex items-center gap-1.5 text-error text-[11px] font-bold uppercase tracking-wider mt-4 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
                              <span className="material-symbols-outlined text-[16px]">close</span> Xóa
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="p-8" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-center border border-outline-variant rounded-full w-fit mx-auto overflow-hidden bg-surface">
                          <button className="p-2.5 hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-[18px]">remove</span></button>
                          <span className="px-5 font-bold text-sm min-w-[3rem] text-center">1</span>
                          <button className="p-2.5 hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-[18px]">add</span></button>
                        </div>
                      </td>
                      <td className="p-8 text-right">
                        <span className="font-price text-xl text-on-surface">52,990,000đ</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Shipping & Info Section */}
            <section className="space-y-10">
              <h2 className="font-h2 text-h2 text-on-surface">Thông tin nhận hàng</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70 ml-1">Họ và tên</label>
                  <input className="w-full h-14 px-6 border border-outline-variant/40 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-surface-container-low hover:bg-surface-container shadow-sm" placeholder="Nguyễn Văn A" type="text"/>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70 ml-1">Số điện thoại</label>
                  <input className="w-full h-14 px-6 border border-outline-variant/40 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-surface-container-low hover:bg-surface-container shadow-sm" placeholder="090 123 4567" type="tel"/>
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70 ml-1">Địa chỉ giao hàng</label>
                  <input className="w-full h-14 px-6 border border-outline-variant/40 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-surface-container-low hover:bg-surface-container shadow-sm" placeholder="69 Lê Lợi, Bến Thành, Quận 1, TP. HCM" type="text"/>
                </div>
              </div>

              <div className="pt-6">
                <label className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70 ml-1 mb-6 block">Phương thức vận chuyển</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="relative flex items-center p-8 border-2 border-on-background bg-on-background text-background rounded-3xl cursor-pointer transition-all shadow-xl group">
                    <input className="hidden" defaultChecked name="shipping" type="radio"/>
                    <div className="flex-1">
                      <p className="font-bold text-lg">Giao hàng tiêu chuẩn</p>
                      <p className="text-xs opacity-70 uppercase tracking-widest mt-1">3-5 ngày làm việc</p>
                    </div>
                    <span className="font-price text-lg">Miễn phí</span>
                  </label>
                  <label className="relative flex items-center p-8 border-2 border-outline-variant/30 hover:border-primary transition-all rounded-3xl cursor-pointer bg-surface group">
                    <input className="hidden" name="shipping" type="radio"/>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-on-surface">Giao hàng nhanh (2H)</p>
                      <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Nhận hàng ngay trong ngày</p>
                    </div>
                    <span className="font-price text-lg text-primary">50,000đ</span>
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="pt-6">
                <label className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/70 ml-1 mb-6 block">Phương thức thanh toán</label>
                <div className="bg-surface-container border border-outline-variant/30 rounded-3xl p-8">
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 bg-on-background rounded-2xl flex items-center justify-center text-background shadow-lg">
                      <span className="material-symbols-outlined text-3xl">account_balance</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-on-surface">Chuyển khoản ngân hàng</p>
                      <p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Xác nhận thủ công trong vòng 30 phút</p>
                    </div>
                  </div>
                  <div className="bg-surface-container-highest/50 border border-outline-variant/20 rounded-2xl p-8 space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Chủ tài khoản</span>
                      <span className="font-bold text-sm">CÔNG TY TNHH CHOMAYANH VN</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Số tài khoản</span>
                      <div className="flex items-center gap-3">
                        <span className="font-price text-lg tracking-[0.15em] text-on-surface">0441000789789</span>
                        <button className="p-2 hover:bg-surface-container-low rounded-xl transition-all text-primary">
                          <span className="material-symbols-outlined text-xl">content_copy</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">Ngân hàng</span>
                      <span className="font-bold text-sm">Vietcombank (VCB)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-on-background text-background rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
              <h3 className="font-h3 text-h3 mb-10 text-white flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-fixed-dim">receipt_long</span>
                Tóm tắt đơn hàng
              </h3>
              <div className="space-y-6 pb-10 border-b border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-60 font-medium">Tạm tính (2 sản phẩm)</span>
                  <span className="font-price text-lg">135,980,000đ</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-60 font-medium">Vận chuyển</span>
                  <span className="font-price text-lg text-primary-fixed-dim">Miễn phí</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-60 font-medium">Thuế (VAT 10%)</span>
                  <span className="font-price text-lg">13,598,000đ</span>
                </div>
              </div>
              <div className="py-10 space-y-10">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Tổng cộng</span>
                  <span className="font-price text-[42px] leading-none text-white">149,578,000đ</span>
                </div>
                <button className="w-full bg-primary-container text-white py-6 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] hover:bg-primary transition-all flex items-center justify-center gap-4 group" onClick={() => navigate('/checkout/success')}>
                  <span>Xác nhận đặt hàng</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex gap-4">
                  <span className="material-symbols-outlined text-primary-fixed-dim shrink-0">verified_user</span>
                  <p className="text-[11px] leading-relaxed opacity-60">Thanh toán bảo mật SSL. Bảo hành chính hãng 12 tháng tại hệ thống ChoMáyẢnh.</p>
                </div>
              </div>
            </div>
            <p className="text-center mt-8 text-[11px] text-on-surface-variant font-medium uppercase tracking-[0.2em] opacity-50">Precision Optics &amp; Design</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
