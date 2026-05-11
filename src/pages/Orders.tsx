import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Package, ChevronRight, Clock, MapPin, CreditCard, ExternalLink, ArrowRight } from 'lucide-react';

// Mock data for orders
const MOCK_ORDERS = [
  {
    id: 'HS-882910',
    date: '24 Tháng 10, 2024',
    status: 'Đang xử lý',
    total: '54.990.000₫',
    items: [
      {
        name: 'Sony Alpha A7 IV Mirrorless Camera',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKelEvVt4F24pl_K6talNEmYTm_a31GPrz6zu9v2b5UQVLx8taxNcE5AWqBdZmMKFbXUN1cWQ1gwHCKGURZO133d18pS_kGIP9Ii5f0BPNVLNlXoxZVpWwsxf-PFdJbTYdLEhnpkpJOOynHHwdGorCv0brRVhm3LWPduoXkYIhUlzlb6C2Hkvp43bqhlgHctRnuzt2mlwVC_iQ1LmvyQYkDgTbn2fEkPz9Oq9WGlQ9M13l7B4LhydlctpVXiuaFXUnTCLrknshWQ',
        quantity: 1,
        price: '54.990.000₫'
      }
    ]
  },
  {
    id: 'HS-882905',
    date: '15 Tháng 10, 2024',
    status: 'Đã hoàn thành',
    total: '12.500.000₫',
    items: [
      {
        name: 'Ống kính Sony FE 50mm f/1.8',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvxa-GEUo07Oasgn_welV6dyutRbYW4u4jh-qA_6lq8P9qblzTS6QW2AqAVJj5kjC6fXcpSMITmXNgZAI98xxwdj7MfkSXGk1FYm0zpE3zgVi3BcOirXK3xVdIuGNT6WBgVlC7g2Q2sMKXAm2l-M7zGvoGAxmboC_v2REtOL7VetaAV4edSMQhnb1-NE3JELc4moXV-jha1M0P3ePcmvL2IzZ-rQ5cBkuFo5E-KrzQeuRxQp0GpeLLNJAtYcdqjmMCwq-Vdme6vg',
        quantity: 1,
        price: '12.500.000₫'
      }
    ]
  }
];

export default function Orders() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900 flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Đơn hàng của tôi</h1>
              <p className="text-gray-500 font-medium tracking-tight">Theo dõi và quản lý lịch sử mua sắm của bạn.</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-bold hover:bg-gray-50 transition-colors">Tất cả</button>
              <button className="px-6 py-2.5 bg-gray-50 border border-transparent rounded-full text-sm font-bold text-gray-400 hover:bg-gray-100 transition-colors">Đang xử lý</button>
              <button className="px-6 py-2.5 bg-gray-50 border border-transparent rounded-full text-sm font-bold text-gray-400 hover:bg-gray-100 transition-colors">Đã giao</button>
            </div>
          </div>

          <div className="space-y-6">
            {MOCK_ORDERS.map((order) => (
              <div key={order.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden group">
                <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
                      <Package className="w-6 h-6 text-gray-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-bold tracking-tight">Mã đơn hàng: {order.id}</span>
                        <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${order.status === 'Đang xử lý' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                        <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {order.date}</span>
                        <span className="flex items-center gap-1.5"><CreditCard className="w-3 h-3" /> Chuyển khoản</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1">Tổng cộng</p>
                      <p className="text-xl font-bold tracking-tighter">{order.total}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gray-50/30">
                  <div className="space-y-6">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-center">
                        <div className="w-20 h-20 rounded-xl overflow-hidden bg-white border border-gray-100 shrink-0 shadow-sm">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400 font-medium">Số lượng: {item.quantity}</span>
                            <span className="font-bold">{item.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-8 py-4 bg-gray-50/50 flex justify-between items-center">
                  <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <span className="flex items-center gap-2 cursor-help"><MapPin className="w-3 h-3" /> Xem địa chỉ</span>
                    <span className="flex items-center gap-2 cursor-pointer hover:text-gray-900 transition-colors"><ExternalLink className="w-3 h-3" /> Xem hóa đơn</span>
                  </div>
                  <button className="text-[10px] font-bold uppercase tracking-widest text-gray-900 hover:underline">Hủy đơn hàng</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/products" className="inline-flex items-center gap-3 text-sm font-bold hover:gap-5 transition-all text-gray-400 hover:text-gray-900">
              Tiếp tục khám phá sản phẩm
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
