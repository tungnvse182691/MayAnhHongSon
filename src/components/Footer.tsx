import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c0d0f] text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="text-3xl font-bold tracking-tight text-white mb-8 block">Máy Ảnh Hồng Sơn</Link>
            <div className="space-y-3 text-white/60 text-sm leading-relaxed">
              <p className="font-bold text-white/90">Hộ Kinh Doanh Máy Ảnh Hồng Sơn</p>
              <p>Mã số thuế: 079099025893</p>
              <p>Chuyên cung cấp thiết bị, giải pháp và dịch vụ máy ảnh chuyên nghiệp tối ưu cho từng khung hình.</p>
              <div className="flex gap-4 pt-6">
                <a className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-black transition-all group border border-white/10" href="#"><span className="material-symbols-outlined text-sm text-white/70 group-hover:text-white">public</span></a>
                <a className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-black transition-all group border border-white/10" href="#"><span className="material-symbols-outlined text-sm text-white/70 group-hover:text-white">alternate_email</span></a>
                <a className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-black transition-all group border border-white/10" href="#"><span className="material-symbols-outlined text-sm text-white/70 group-hover:text-white">share</span></a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-10 uppercase text-[10px] tracking-[0.2em]">Danh mục</h4>
            <ul className="space-y-5 text-sm text-white/50 font-medium">
              <li><Link className="hover:text-white transition-colors" to="/products">Máy ảnh Mirrorless</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/products">Ống kính cao cấp</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/products">Phụ kiện Studio</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/cart">Giỏ hàng của tôi</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/verify">Xác minh thiết bị</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-10 uppercase text-[10px] tracking-[0.2em]">Hỗ trợ</h4>
            <ul className="space-y-5 text-sm text-white/50 font-medium">
              <li><Link className="hover:text-white transition-colors" to="/support">Bảo hành 24 tháng</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/support">Giao hàng 2h</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/support">Trả góp 0% lãi suất</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/support">Trung tâm sửa chữa</Link></li>
              <li><Link className="hover:text-white transition-colors" to="/about">Về chúng tôi</Link></li>
            </ul>
          </div>
 
          <div className="lg:col-span-4">
            <h4 className="font-bold text-white mb-6 uppercase text-[10px] tracking-[0.2em]">Liên hệ</h4>
            <div className="space-y-6 text-sm text-white/60 font-medium">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-white/40">location_on</span>
                <p>7/58 Thành Thái, Quận 10, TP. Hồ Chí Minh</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-white/40">call</span>
                <div>
                  <p className="text-white font-bold mb-1">Hotline: 0776.941.932 - 078999.1555</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-tighter">Kỹ thuật / Bảo hành: 0776.941.932 - 078999.1555</p>
                </div>
              </div>
              <div className="w-full h-44 rounded-3xl overflow-hidden border border-white/10 bg-white/5 filter grayscale opacity-40 transition-all hover:grayscale-0 hover:opacity-100">
                <iframe allowFullScreen height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4602324222333!2d106.6622572!3d10.7760195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzMzLjciTiAxMDbCsDM5JzQ0LjEiRQ!5e0!3m2!1sen!2s!4v1715690000000!5m2!1sen!2s" style={{border:0}} width="100%"></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/30 font-medium tracking-tight">© 2024 Máy Ảnh HS. Bảo lưu mọi quyền. Hệ sinh thái Nhiếp ảnh Chuyên nghiệp.</p>
          <div className="flex gap-8 text-xs text-white/30 font-medium">
            <a className="hover:text-white transition-colors" href="#">Chính sách Bảo mật</a>
            <a className="hover:text-white transition-colors" href="#">Điều khoản Dịch vụ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
