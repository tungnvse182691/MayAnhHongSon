import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ScamCheck() {
  const navigate = useNavigate();
  const [serial, setSerial] = useState('SN-2024-8842');

  const checkSerial = () => {
    // In a real app, this would trigger an API call.
    window.location.reload();
  };

  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen">
      <Header />

      <main className="min-h-screen pt-24 pb-12">
        <section className="relative max-w-container_max mx-auto px-margin_mobile md:px-gutter mb-20 text-center">
          <div className="relative w-full h-[60vh] min-h-[450px] rounded-[3rem] overflow-hidden shadow-xl group flex flex-col items-center justify-center py-section_gap px-margin_mobile bg-gray-50">
            {/* Animated Banner Image / Video */}
            <img 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110 opacity-30 grayscale"
              src="https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=2000&auto=format&fit=crop"
              alt="Camera Security"
            />
            <div className="absolute inset-0 bg-white/40"></div>

            <div className="relative z-10 max-w-3xl w-full">
              <div className="flex items-center justify-center gap-4 mb-10">
                <span className="w-12 h-[1px] bg-black/10"></span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-black font-bold">Máy Ảnh HS • Authenticator</span>
                <span className="w-12 h-[1px] bg-black/10"></span>
              </div>
              <h1 className="text-4xl md:text-6xl mb-8 text-gray-900 font-bold tracking-tight">Xác minh thiết bị của bạn</h1>
              <p className="text-gray-500 mb-14 max-w-xl mx-auto text-lg leading-relaxed font-medium">Nhập số Seri hoặc mã bảo mật để xác thực sản phẩm chính hãng và kiểm tra tình trạng bảo hành.</p>
              
              <div className="relative w-full max-w-2xl mx-auto">
                <div className="flex items-center bg-white border border-gray-100 rounded-3xl h-20 px-8 shadow-sm focus-within:ring-4 focus-within:ring-black/5 focus-within:border-gray-200 transition-all">
                  <span className="material-symbols-outlined text-gray-400 mr-4 text-2xl">verified_user</span>
                  <input 
                    className="flex-grow bg-transparent border-none focus:ring-0 text-gray-900 outline-none text-xl placeholder:text-gray-300 font-medium" 
                    placeholder="Nhập số Seri (ví dụ: SN-9283-XXXX)" 
                    type="text" 
                    value={serial} 
                    onChange={(e) => setSerial(e.target.value)}
                  />
                  <button className="bg-black text-white px-10 h-14 rounded-2xl font-bold hover:bg-gray-800 hover:shadow-lg active:scale-95 transition-all uppercase tracking-widest text-xs" onClick={checkSerial}>XÁC THỰC</button>
                </div>
                <div className="mt-8 flex justify-center gap-10 text-[11px] text-gray-400 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-green-500 text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> Bảo mật tuyệt đối</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined text-blue-500 text-[20px]" style={{fontVariationSettings: "'FILL' 1"}}>security</span> Dữ liệu mã hóa</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-container_max mx-auto px-margin_mobile md:px-gutter py-section_gap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {/* Success State Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 p-8 relative group">
              <div className="absolute top-6 right-6 bg-green-50 text-green-700 px-4 py-1.5 rounded-full flex items-center gap-2 font-bold text-xs tracking-wider">
                <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                KẾT QUẢ: CHÍNH HÃNG
              </div>
              <div className="flex flex-col md:flex-row gap-8 mt-12 md:mt-0">
                <div className="w-full md:w-56 aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0 bg-surface-container-low p-4">
                  <img alt="Sony Alpha a7 IV" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhnl38S7EVm-BkkCVRRNbdNha4ffJEyxuQ9C6JHMvDXWJa8tWpe6LqjV-WcITMgKWmLQE4ps2bPWscoO9Dh9l07uVqvOZCZpBAXNR3Ve03-BK6Nb7bNUn9Lc__UBZpaWahOCbiswvtnQ94HUE6O-1ko_yBHQRO7KGNZw-FT7d2hwZhRnVcs90RcTqrtOyFsN1xisqywbpIkc5KGKXWHbDACU0mWXVexjJQJIjiW2XwH431XLs00eXXHWk5BvIM7Mw0AjWE-f7Fcw"/>
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <h3 className="font-h3 text-h3 text-on-surface mb-6">Sony Alpha a7 IV Mirrorless</h3>
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mb-1">Số Seri</p>
                      <p className="font-price text-[18px] text-primary">SN-2024-8842</p>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mb-1">Ngày kích hoạt</p>
                      <p className="text-body font-semibold">12/05/2023</p>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mb-1">Bảo hành đến</p>
                      <p className="text-body font-semibold">12/05/2025</p>
                    </div>
                    <div>
                      <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mb-1">Trạng thái</p>
                      <p className="text-green-600 font-bold">Đang hoạt động</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fail State Card */}
            <div className="bg-surface-container-lowest border border-error/10 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-error-container/20 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <span className="material-symbols-outlined text-error text-[40px]">warning</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-3">Không tìm thấy thông tin</h3>
              <p className="text-on-surface-variant mb-8 max-w-sm leading-relaxed">Số Seri <strong>"SN-9999-ERROR"</strong> không tồn tại trong hệ thống. Vui lòng kiểm tra lại hoặc liên hệ hỗ trợ.</p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">refresh</span> KIỂM TRA LẠI
                </button>
                <Link to="/support" className="bg-on-surface text-surface px-8 py-4 rounded-xl font-bold hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined text-[20px]">support_agent</span> LIÊN HỆ HỖ TRỢ
                </Link>
              </div>
            </div>
          </div>

          {/* Verification Guide Bento */}
          <div className="mt-section_gap">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-h2 text-h2 text-on-surface">Hướng dẫn tìm số Seri</h2>
              <div className="h-px bg-outline-variant/30 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="bg-surface-container-low/30 p-8 rounded-[2rem] border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-surface-container rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[32px]">qr_code_scanner</span>
                </div>
                <h4 className="font-bold text-xl mb-3">Dưới thân máy</h4>
                <p className="text-body text-on-surface-variant leading-relaxed">Lật ngược máy ảnh của bạn, số Seri thường được in trên tem bạc dưới đế pin hoặc ngàm gắn chân máy.</p>
              </div>
              <div className="bg-surface-container-low/30 p-8 rounded-[2rem] border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-surface-container rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[32px]">inventory_2</span>
                </div>
                <h4 className="font-bold text-xl mb-3">Trên vỏ hộp</h4>
                <p className="text-body text-on-surface-variant leading-relaxed">Kiểm tra tem mã vạch bên hông hộp sản phẩm. Số Seri thường đi kèm với mã SKU và EAN ở khu vực tem trắng.</p>
              </div>
              <div className="bg-surface-container-low/30 p-8 rounded-[2rem] border border-outline-variant/10 shadow-sm hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-surface-container rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-[32px]">receipt_long</span>
                </div>
                <h4 className="font-bold text-xl mb-3">Hóa đơn mua hàng</h4>
                <p className="text-body text-on-surface-variant leading-relaxed">Mọi sản phẩm đều ghi rõ số Seri trên hóa đơn VAT và phiếu bảo hành điện tử gửi qua Email/SMS.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
