import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Truck, Receipt, ArrowRight, ShieldCheck } from 'lucide-react';

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-50 border border-green-100 mb-8 shadow-sm relative">
              <div className="absolute inset-0 bg-green-100/50 rounded-full blur-xl animate-pulse"></div>
              <CheckCircle className="w-12 h-12 text-green-600 relative z-10" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
              Đặt hàng thành công!
            </h1>
            <p className="text-gray-500 max-w-lg mx-auto text-lg font-medium leading-relaxed">
              Cảm ơn bạn đã tin tưởng Máy Ảnh Hồng Sơn. Đơn hàng của bạn đã được tiếp nhận và đang được xử lý bởi đội ngũ chuyên gia của chúng tôi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-50">
                  <h2 className="text-xl font-bold tracking-tight">Chi tiết đơn hàng</h2>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-400">
                    #HS-882910
                  </span>
                </div>
                
                <div className="flex gap-8 items-start">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shrink-0">
                    <img 
                      alt="Sony Alpha A7 IV" 
                      className="w-full h-full object-cover transition-all duration-500" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKelEvVt4F24pl_K6talNEmYTm_a31GPrz6zu9v2b5UQVLx8taxNcE5AWqBdZmMKFbXUN1cWQ1gwHCKGURZO133d18pS_kGIP9Ii5f0BPNVLNlXoxZVpWwsxf-PFdJbTYdLEhnpkpJOOynHHwdGorCv0brRVhm3LWPduoXkYIhUlzlb6C2Hkvp43bqhlgHctRnuzt2mlwVC_iQ1LmvyQYkDgTbn2fEkPz9Oq9WGlQ9M13l7B4LhydlctpVXiuaFXUnTCLrknshWQ"
                    />
                  </div>
                  <div className="flex-grow pt-2">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900">Sony Alpha A7 IV Mirrorless Camera</h3>
                      <span className="text-gray-400 font-medium">x1</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider font-semibold">Bảo hành Platinum 24 tháng</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold tracking-tight text-gray-900">54.990.000₫</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-50 space-y-4">
                  <div className="flex justify-between text-gray-400 font-medium text-sm">
                    <span>Tạm tính</span>
                    <span>54.990.000₫</span>
                  </div>
                  <div className="flex justify-between text-gray-400 font-medium text-sm">
                    <span>Phí vận chuyển</span>
                    <span className="text-gray-900 font-semibold">Miễn phí</span>
                  </div>
                  <div className="flex justify-between pt-6 border-t border-gray-50 items-baseline">
                    <span className="text-lg font-bold tracking-tight text-gray-400">Tổng cộng</span>
                    <span className="text-3xl font-bold tracking-tighter text-gray-900">54.990.000₫</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                    <Truck className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="font-bold tracking-tight text-gray-900">Thông tin giao hàng</h3>
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="text-[10px] font-bold text-gray-300 mb-2 uppercase tracking-[0.2em]">Ngày dự kiến nhận</p>
                    <p className="text-gray-900 font-semibold">Thứ Năm, 24 Tháng 10, 2024</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-300 mb-2 uppercase tracking-[0.2em]">Địa chỉ nhận hàng</p>
                    <p className="text-gray-500 leading-relaxed text-sm font-medium">
                      Nguyễn Văn A<br />
                      123 Đường Lê Lợi, Phường Bến Thành<br />
                      Quận 1, TP. Hồ Chí Minh
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link 
                  to="/products" 
                  className="w-full bg-black text-white py-4 px-8 rounded-2xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-3 group shadow-lg"
                >
                  Tiếp tục mua sắm
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/orders"
                  className="w-full bg-white border border-gray-200 text-gray-900 py-4 px-8 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-3"
                >
                  <Receipt className="w-5 h-5" />
                  Xem đơn hàng của tôi
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex gap-4 items-start">
                <ShieldCheck className="w-6 h-6 text-gray-400 shrink-0 mt-1" />
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  Mọi giao dịch được bảo vệ bởi Máy Ảnh HS Protection. Hỗ trợ 24/7 cho các vấn đề kỹ thuật và bảo hành.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
