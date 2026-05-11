import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Settings, Shield, Zap, Wrench, Clock, Award, Headphones, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
          <div className="absolute inset-0 opacity-10">
            <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_NLNKbpAH7F8hAhBotFPKZ_j3-wxjAjzKypWrsusRf2Yq43Ove3dAXY8u3lBHR71B92Ro44ODComZHhq2bigQIze8dyAw9NTUiyvO8fjAVE1HLdHyVW0JCEN8ki4WgdocE1Y8Gj_Gyi_Bfd50to5qdL_zZYzgQz6jw0cUpm2Snyjm34mL96cx4q5auVzD2H90VYIDATb38u_8nVCuFUV7CVbsRBHiIEIAdlVET9awDNsUzniqxhLBnRqXn4v6E561AG61rbTEhg" alt="Camera maintenance"/>
          </div>
          <div className="relative max-w-container_max mx-auto px-margin_mobile md:px-gutter text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-900 border border-gray-200 text-[10px] font-bold tracking-widest uppercase mb-6">Dịch vụ chuyên nghiệp</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">Trung tâm kỹ thuật Máy Ảnh Hồng Sơn</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg mb-12 leading-relaxed font-medium">Chăm sóc thiết bị nhiếp ảnh của bạn với tiêu chuẩn chuyên nghiệp nhất. Từ vệ sinh cảm biến đến hiệu chỉnh thấu kính chính xác.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a className="bg-black text-white px-10 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg" href="#contact-form">Đặt lịch ngay</a>
              <button className="bg-white border border-gray-200 text-gray-900 px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all transform hover:-translate-y-1">Xem bảng giá</button>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-container_max mx-auto px-margin_mobile md:px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white p-10 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-black group-hover:text-white transition-all">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Vệ sinh cảm biến</h3>
                <p className="text-gray-500 mb-10 text-sm leading-relaxed font-medium">Loại bỏ hoàn toàn bụi bẩn và vết ố trên sensor. Đảm bảo hình ảnh luôn trong trẻo và không tì vết.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold tracking-tight">350.000₫</span>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="group bg-white p-10 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-black group-hover:text-white transition-all">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Cân chỉnh Focus</h3>
                <p className="text-gray-500 mb-10 text-sm leading-relaxed font-medium">Khắc phục hiện tượng back/front focus của ống kính. Giúp thiết bị bắt nét chính xác tuyệt đối.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold tracking-tight">500.000₫</span>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="group bg-white p-10 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-black group-hover:text-white transition-all">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Bảo trì Platinum</h3>
                <p className="text-gray-500 mb-10 text-sm leading-relaxed font-medium">Gói chăm sóc định kỳ bao gồm vệ sinh tổng thể, cập nhật phần mềm và kiểm tra kỹ thuật.</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold tracking-tight">1.200.000₫</span>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-container_max mx-auto px-margin_mobile md:px-gutter">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 tracking-tight">Tại sao chọn Máy Ảnh Hồng Sơn?</h2>
              <div className="w-12 h-1 bg-black mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                  <Award className="w-8 h-8 text-gray-900" />
                </div>
                <h4 className="font-bold text-lg mb-3 text-gray-900">Kỹ thuật viên cao cấp</h4>
                <p className="text-sm text-gray-500 leading-relaxed px-4 font-medium">Đội ngũ được đào tạo bài bản với hơn 10 năm kinh nghiệm.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                  <Wrench className="w-8 h-8 text-gray-900" />
                </div>
                <h4 className="font-bold text-lg mb-3 text-gray-900">Thiết bị hiện đại</h4>
                <p className="text-sm text-gray-500 leading-relaxed px-4 font-medium">Hệ thống máy móc đo đạc chính xác từ Nhật Bản.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                  <Clock className="w-8 h-8 text-gray-900" />
                </div>
                <h4 className="font-bold text-lg mb-3 text-gray-900">Lấy ngay trong ngày</h4>
                <p className="text-sm text-gray-500 leading-relaxed px-4 font-medium">90% dịch vụ vệ sinh được hoàn thành chỉ trong 2 giờ.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
                  <Headphones className="w-8 h-8 text-gray-900" />
                </div>
                <h4 className="font-bold text-lg mb-3 text-gray-900">Hỗ trợ 24/7</h4>
                <p className="text-sm text-gray-500 leading-relaxed px-4 font-medium">Luôn sẵn sàng giải đáp mọi thắc mắc của bạn.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-gray-50" id="contact-form">
          <div className="max-w-container_max mx-auto px-margin_mobile md:px-gutter">
            <div className="bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden flex flex-col lg:flex-row">
              <div className="p-10 lg:p-16 lg:w-1/2">
                <div className="mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 tracking-tight">Đăng ký dịch vụ</h2>
                  <p className="text-gray-500 font-medium">Để lại thông tin và yêu cầu của bạn, chúng tôi sẽ liên hệ tư vấn ngay.</p>
                </div>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Họ và tên</label>
                      <input className="w-full h-14 px-6 border border-gray-100 rounded-2xl bg-gray-50 focus:border-black focus:ring-0 outline-none transition-all font-medium" placeholder="Nguyễn Văn A" type="text"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Số điện thoại</label>
                      <input className="w-full h-14 px-6 border border-gray-100 rounded-2xl bg-gray-50 focus:border-black focus:ring-0 outline-none transition-all font-medium" placeholder="090x xxx xxx" type="tel"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Loại thiết bị</label>
                    <select className="w-full h-14 px-6 border border-gray-100 rounded-2xl bg-gray-50 focus:border-black focus:ring-0 outline-none appearance-none cursor-pointer font-medium">
                      <option>Mirrorless Camera</option>
                      <option>Ống kính chuyên dụng</option>
                      <option>Máy ảnh Film</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Yêu cầu</label>
                    <textarea className="w-full p-6 border border-gray-100 rounded-2xl bg-gray-50 focus:border-black focus:ring-0 outline-none resize-none font-medium text-sm" placeholder="Mô tả tình trạng thiết bị..." rows={4}></textarea>
                  </div>
                  <button className="w-full bg-black text-white py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all transform active:scale-95 shadow-lg" type="submit">Gửi yêu cầu đặt lịch</button>
                </form>
              </div>
              
              <div className="lg:w-1/2 bg-gray-900 p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div>
                  <h3 className="text-2xl font-bold mb-10 tracking-tight">Thông tin liên hệ</h3>
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                        <MapPin className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Địa chỉ</p>
                        <p className="font-medium text-white/80">7/58 Thành Thái, Quận 10, TP. Hồ Chí Minh</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                        <Phone className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Điện thoại</p>
                        <p className="font-medium text-white/80">0776.941.932 - 078999.1555</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 shrink-0">
                        <Mail className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Email</p>
                        <p className="font-medium text-white/80">support@mayanhhs.vn</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16 pt-10 border-t border-white/10 italic text-white/40 text-sm font-serif">
                  "Chất lượng dịch vụ là cam kết hàng đầu của chúng tôi."
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
