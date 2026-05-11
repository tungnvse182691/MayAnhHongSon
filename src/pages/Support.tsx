import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Support() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Header />

      <main className="pt-24 pb-12">
        <section className="relative max-w-container_max mx-auto px-margin_mobile md:px-gutter mb-20">
          <div className="relative w-full h-[60vh] min-h-[500px] rounded-[3rem] overflow-hidden shadow-lg group flex items-center justify-center py-20 px-6 bg-[#f2f4f7]">
            {/* Animated Banner Image / Video */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110 opacity-40 grayscale"
            >
              <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/60 via-transparent to-white/40"></div>

            <div className="relative z-10 max-w-[800px] mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-black/5 text-black border border-black/10 text-[10px] font-bold tracking-widest uppercase mb-8">Trung tâm trợ giúp</span>
              <h1 className="text-4xl md:text-6xl text-gray-900 font-bold mb-10 leading-tight tracking-tight">Chúng tôi có thể giúp gì cho bạn?</h1>
              <div className="relative max-w-2xl mx-auto group/search">
                <div className="flex items-center bg-white border border-gray-100 rounded-3xl h-20 px-8 shadow-sm focus-within:ring-4 focus-within:ring-black/5 focus-within:border-gray-200 transition-all">
                  <span className="material-symbols-outlined text-gray-400 mr-4 text-2xl">search</span>
                  <input 
                    className="flex-grow bg-transparent border-none focus:ring-0 text-gray-900 outline-none text-xl placeholder:text-gray-300 font-medium" 
                    placeholder="Tìm kiếm nội dung bài viết hỗ trợ..." 
                    type="text"
                  />
                  <button className="bg-black text-white px-8 h-12 rounded-2xl font-bold hover:bg-gray-800 transition-all uppercase tracking-widest text-xs hidden md:block">Tìm kiếm</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-container_max mx-auto px-margin_mobile md:px-gutter py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-12 rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer flex flex-col">
              <div className="w-16 h-16 bg-gray-50 text-gray-900 rounded-2xl flex items-center justify-center mb-10 border border-gray-100 group-hover:bg-black group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl font-light">local_shipping</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">Vận chuyển</h3>
              <p className="text-gray-500 mb-10 text-base leading-relaxed font-medium">Thông tin về phí giao hàng, thời gian nhận hàng và đối tác vận chuyển của chúng tôi.</p>
              <div className="mt-auto flex items-center gap-2 text-black font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                Khám phá <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer flex flex-col">
              <div className="w-16 h-16 bg-gray-50 text-gray-900 rounded-2xl flex items-center justify-center mb-10 border border-gray-100 group-hover:bg-black group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl font-light">verified_user</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">Bảo hành</h3>
              <p className="text-gray-500 mb-10 text-base leading-relaxed font-medium">Chính sách bảo hành chính hãng và hỗ trợ sửa chữa máy ảnh chuyên nghiệp tại Việt Nam.</p>
              <div className="mt-auto flex items-center gap-2 text-black font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                Khám phá <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer flex flex-col">
              <div className="w-16 h-16 bg-gray-50 text-gray-900 rounded-2xl flex items-center justify-center mb-10 border border-gray-100 group-hover:bg-black group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl font-light">payments</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">Thanh toán</h3>
              <p className="text-gray-500 mb-10 text-base leading-relaxed font-medium">Các phương thức thanh toán an toàn, trả góp 0% và bảo mật thông tin tuyệt đối.</p>
              <div className="mt-auto flex items-center gap-2 text-black font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                Khám phá <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>

            <div className="bg-white p-12 rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer flex flex-col">
              <div className="w-16 h-16 bg-gray-50 text-gray-900 rounded-2xl flex items-center justify-center mb-10 border border-gray-100 group-hover:bg-black group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl font-light">assignment_return</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">Đổi trả</h3>
              <p className="text-gray-500 mb-10 text-base leading-relaxed font-medium">Quy trình đổi trả hàng trong vòng 7 ngày và điều kiện hoàn tiền sản phẩm nhanh chóng.</p>
              <div className="mt-auto flex items-center gap-2 text-black font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
                Khám phá <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50/50 py-32 border-y border-gray-100">
          <div className="max-w-[1000px] mx-auto px-margin_mobile">
            <div className="text-center mb-20">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-4 block">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">Câu hỏi thường gặp</h2>
              <p className="text-gray-500 font-medium font-body max-w-lg mx-auto leading-relaxed">Những thắc mắc phổ biến nhất từ cộng đồng Máy Ảnh Hồng Sơn được giải đáp bởi đội ngũ chuyên gia.</p>
            </div>
            <div className="space-y-6">
              <details className="group bg-white border border-gray-100 rounded-[2.5rem] p-10 transition-all hover:border-gray-200 hover:shadow-2xl">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-gray-900 text-xl tracking-tight">
                  Máy ảnh mua tại Máy Ảnh Hồng Sơn có được bảo hành chính hãng không?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-gray-400">expand_more</span>
                </summary>
                <div className="overflow-hidden transition-all duration-300">
                  <p className="mt-8 text-gray-500 leading-relaxed font-medium text-base">
                    Tất cả sản phẩm mới 100% đều được bảo hành chính hãng theo tiêu chuẩn của nhà sản xuất (Sony, Canon, Nikon, Fujifilm). Đối với hàng đã qua sử dụng, chúng tôi cung cấp gói bảo hành riêng từ 6 đến 12 tháng tại hệ thống Máy Ảnh Hồng Sơn với cam kết chất lượng tuyệt đối.
                  </p>
                </div>
              </details>
              
              <details className="group bg-white border border-gray-100 rounded-[2.5rem] p-10 transition-all hover:border-gray-200 hover:shadow-2xl">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-gray-900 text-xl tracking-tight">
                  Tôi có thể kiểm tra máy trước khi thanh toán không?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-gray-400">expand_more</span>
                </summary>
                <div className="overflow-hidden transition-all duration-300">
                  <p className="mt-8 text-gray-500 leading-relaxed font-medium text-base">
                    Có, quý khách hoàn toàn được quyền mở hộp và kiểm tra ngoại quan cũng như hoạt động cơ bản của máy (số shot, cảm biến) trước khi thanh toán cho nhân viên giao hàng. Đây là chính sách minh bạch nhằm đảm bảo quyền lợi tối đa cho khách hàng.
                  </p>
                </div>
              </details>

              <details className="group bg-white border border-gray-100 rounded-[2rem] p-8 transition-all hover:border-gray-200 hover:shadow-xl">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-gray-900 text-xl tracking-tight">
                  Thời gian giao hàng tại TP. Hồ Chí Minh là bao lâu?
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-gray-400">expand_more</span>
                </summary>
                <div className="overflow-hidden transition-all duration-300">
                  <p className="mt-6 text-gray-500 leading-relaxed font-medium text-base">
                    Tại khu vực nội thành TP. HCM, chúng tôi hỗ trợ giao hàng hỏa tốc trong vòng 2-4 giờ làm việc sau khi xác nhận đơn hàng qua hotline. Đối với các khu vực ngoại thành, chúng tôi cam kết giao hàng trong ngày hoặc tối đa 24 giờ.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="max-w-container_max mx-auto px-margin_mobile md:px-gutter py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold mb-6">Support Channels</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight text-gray-900">Kết nối với chuyên gia</h2>
              <p className="text-gray-500 mb-16 text-lg leading-relaxed max-w-md font-medium">Đội ngũ nhiếp ảnh gia và kỹ thuật viên chuyên nghiệp của Máy Ảnh Hồng Sơn luôn sẵn sàng đồng hành và hỗ trợ bạn 24/7.</p>
              
              <div className="space-y-12">
                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-white shadow-sm text-gray-900 border border-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-gray-900 tracking-tight">Địa chỉ cửa hàng</h4>
                    <p className="text-gray-500 font-medium text-base leading-relaxed">7/58 Thành Thái, Quận 10, TP. Hồ Chí Minh</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-white shadow-sm text-gray-900 border border-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-gray-900 tracking-tight">Hotline hỗ trợ</h4>
                    <p className="text-gray-900 font-bold text-2xl tracking-tighter">0776.941.932 - 078999.1555</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start group">
                  <div className="w-16 h-16 bg-white shadow-sm text-gray-900 border border-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-gray-900 tracking-tight">Email liên hệ</h4>
                    <p className="text-gray-500 font-medium text-base leading-relaxed">support@mayanhhs.vn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 md:p-20 rounded-[3.5rem] border border-gray-50 shadow-2xl">
              <h3 className="text-3xl font-bold mb-12 tracking-tight text-gray-900">Gửi yêu cầu hỗ trợ</h3>
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-bold text-black/40 tracking-[0.2em] px-1">Họ và tên</label>
                    <input required className="w-full bg-white border border-gray-100 rounded-3xl focus:ring-4 focus:ring-black/5 focus:border-gray-200 py-5 px-8 transition-all outline-none font-medium text-gray-900 text-base" placeholder="Nguyễn Văn A" type="text"/>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase font-bold text-black/40 tracking-[0.2em] px-1">Email</label>
                    <input required className="w-full bg-white border border-gray-100 rounded-3xl focus:ring-4 focus:ring-black/5 focus:border-gray-200 py-5 px-8 transition-all outline-none font-medium text-gray-900 text-base" placeholder="example@email.com" type="email"/>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase font-bold text-black/40 tracking-[0.2em] px-1">Chủ đề</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-100 rounded-3xl focus:ring-4 focus:ring-black/5 focus:border-gray-200 py-5 px-8 transition-all outline-none cursor-pointer font-medium text-gray-900 text-base appearance-none">
                      <option>Tư vấn mua hàng chuyên sâu</option>
                      <option>Hỗ trợ bảo hành thiết bị</option>
                      <option>Khiếu nại chất lượng dịch vụ</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase font-bold text-black/40 tracking-[0.2em] px-1">Nội dung</label>
                  <textarea required className="w-full bg-white border border-gray-100 rounded-3xl focus:ring-4 focus:ring-black/5 focus:border-gray-200 py-6 px-8 transition-all outline-none resize-none font-medium text-gray-900 text-base" placeholder="Hãy cho chúng tôi biết vấn đề của bạn..." rows={5}></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-6 px-10 rounded-[2rem] font-bold uppercase tracking-[0.3em] transition-all active:scale-[0.98] shadow-2xl text-xs flex items-center justify-center gap-3 ${
                    isSent ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="animate-spin material-symbols-outlined">progress_activity</span>
                  ) : isSent ? (
                    <>
                      <span className="material-symbols-outlined">check_circle</span>
                      Đã gửi yêu cầu
                    </>
                  ) : (
                    'Gửi yêu cầu ngay'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
