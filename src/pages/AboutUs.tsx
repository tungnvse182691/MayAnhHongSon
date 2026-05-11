import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      <Header />

      <main className="pt-24 pb-12">
        <section className="relative max-w-container_max mx-auto px-margin_mobile md:px-gutter mb-20">
          <div className="relative w-full h-[70vh] min-h-[500px] rounded-[3rem] overflow-hidden shadow-xl group flex items-center justify-center bg-gray-50">
            {/* Animated Banner Image / Video */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] group-hover:scale-110 opacity-30 grayscale"
            >
              <source src="https://videos.pexels.com/video-files/5538202/5538202-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-white/40"></div>
            
            <div className="relative z-10 text-center px-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-black/5 text-black border border-black/10 text-[10px] font-bold tracking-widest uppercase mb-8">Về chúng tôi</span>
              <h1 className="text-4xl md:text-7xl text-gray-900 mb-8 tracking-tight font-bold">Câu chuyện của Máy Ảnh Hồng Sơn</h1>
              <p className="text-gray-500 max-w-2xl mx-auto text-xl leading-relaxed font-medium">Hành trình mang nghệ thuật nhiếp ảnh chuyên nghiệp đến gần hơn với mọi người qua từng khung hình.</p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-container_max mx-auto px-margin_mobile md:px-gutter text-center">
            <h2 className="text-4xl font-bold mb-10 tracking-tight text-gray-900">Tầm nhìn và Sứ mệnh</h2>
            <p className="max-w-3xl mx-auto text-gray-500 text-lg leading-relaxed font-medium mb-16">
              Từ niềm đam mê nhiếp ảnh sâu sắc, chúng tôi nhận ra người dùng tại Việt Nam cần một địa chỉ tin cậy để sở hữu các thiết bị máy ảnh chuyên nghiệp với sự minh bạch và tận tâm. Máy Ảnh Hồng Sơn ra đời với mục tiêu kết nối những nhiếp ảnh gia ở mọi cấp độ, cung cấp các sản phẩm chất lượng cao với mức giá hợp lý và dịch vụ hậu mãi xuất sắc nhất.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-1 bg-black mb-6"></div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Tin cậy</h3>
                <p className="text-sm text-gray-500 font-medium">Cam kết hàng chính hãng 100% với quy trình kiểm định nghiêm ngặt.</p>
              </div>
              <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-1 bg-black mb-6"></div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Chuyên nghiệp</h3>
                <p className="text-sm text-gray-500 font-medium">Đội ngũ kỹ thuật viên giàu kinh nghiệm, thấu hiểu từng góc máy.</p>
              </div>
              <div className="p-10 rounded-3xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-1 bg-black mb-6"></div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Cộng đồng</h3>
                <p className="text-sm text-gray-500 font-medium">Nơi sẻ chia kiến thức và khơi nguồn cảm hứng cho những tâm hồn nghệ sĩ.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
