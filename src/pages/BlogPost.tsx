import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="bg-white text-black font-sans antialiased min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] w-full">
          <img 
            src="https://hoangphucphoto.com/wp-content/uploads/2023/08/cuongthinhcamera-blog-19.jpg.webp" 
            alt="Fernweh" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-16 left-0 w-full px-6 md:px-12 lg:px-16 text-white text-center md:text-left">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-90">Du lịch • Máy ảnh Q</p>
              <h1 className="text-[34px] leading-[85px] font-semibold mb-6 max-w-4xl">
                Fernweh: Khát khao chinh phục những vùng đất mới
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-4 text-sm opacity-80">
                <span>Bởi Julia Nimke</span>
                <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                <span>15 Tháng 5, 2024</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 py-20 text-lg text-gray-800 leading-relaxed space-y-10">
          <p 
            className="text-gray-600 font-light"
            style={{ fontSize: '25px', fontFamily: '"Times New Roman", Times, serif', lineHeight: '38.25px' }}
          >
            "Nhiếp ảnh là một bài thơ khắc nghiệt và rực rỡ của thực tại." – Ansel Adams. Mang theo chiếc máy ảnh đi khắp những đường bờ biển gồ ghề đã dạy tôi cách nhìn xa hơn những khung hình thông thường, và nắm bắt lấy sự tĩnh lặng bên trong chuyển động.
          </p>
          
          <p>
            Khi chúng ta đi du lịch, chúng ta thường tìm kiếm một lối thoát. Tuy nhiên, khám phá thực sự chỉ xảy ra khi chúng ta đối mặt với thiên nhiên hoang sơ chỉ với đôi mắt và một ống kính tiêu cự cố định. Trong bài tiểu luận ảnh này, tôi đặt mục tiêu dịch cảm giác sâu sắc về "Fernweh" - khái niệm của người Đức về một nỗi khao khát đau đáu được du hành đến những nơi chưa từng thấy - thành một ngôn ngữ thị giác.
          </p>

          <img 
            src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/06/review-may-anh.jpg" 
            alt="Review máy ảnh" 
            className="w-full h-auto my-12 rounded-xl shadow-2xl"
          />

          <h2 className="text-3xl font-semibold text-black mt-16 mb-6">Hành trình tới sự tĩnh mịch</h2>
          <p>
            Được trang bị chiếc máy ảnh yêu quý, tôi khởi hành trước bình minh. Ánh sáng trong những giờ đầu tiên này không chỉ là sự soi rọi; nó là một yếu tố cấu trúc của bức ảnh. Bạn có thể cảm nhận được hơi gió lạnh khi những con sóng vỗ vào những tảng đá vượt thời gian. Sự tương phản giữa những viên đá cứng nhắc và đại dương uyển chuyển gói gọn hoàn hảo tính nhị nguyên trong mong muốn của chính chúng ta: vừa muốn trụ vững, vừa muốn trôi đi tự do. Đó chính là linh hồn của nhiếp ảnh - dừng lại thời gian để cảm nhận sự vĩnh cửu.
          </p>
        </article>

        {/* More Articles Section */}
        <section className="bg-gray-50 py-24 border-t border-gray-200">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8">
            <h3 className="text-3xl font-semibold mb-12 text-center text-black">Bài viết liên quan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link to="/blog/2" className="group">
                <div className="w-full h-64 overflow-hidden mb-4 rounded-lg bg-gray-200">
                  <img src="https://storage.googleapis.com/ops-shopee-files-live/live/shopee-blog/2022/01/0800b515-may-anh-chuyen-nghiep.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog 2"/>
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">Hình học đô thị: Những đường nét của thành phố</h4>
                <p className="text-gray-500 text-sm">Bởi Markus Lenz</p>
              </Link>
              <Link to="/blog/3" className="group">
                <div className="w-full h-64 overflow-hidden mb-4 rounded-lg bg-gray-200">
                  <img src="https://www.elleman.vn/app/uploads/2025/01/15/241890/sageabe_device_img_02.webp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog 3"/>
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">Làm chủ ánh sáng và bóng tối</h4>
                <p className="text-gray-500 text-sm">Bởi Elena Rostova</p>
              </Link>
              <Link to="/blog/4" className="group">
                <div className="w-full h-64 overflow-hidden mb-4 rounded-lg bg-gray-200">
                  <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog 4"/>
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">Quy tắc ứng xử trong nhiếp ảnh đường phố</h4>
                <p className="text-gray-500 text-sm">Bởi David Chen</p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
