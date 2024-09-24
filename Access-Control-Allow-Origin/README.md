#### Mục đích của Access-Control-Allow-Origin từ góc nhìn client và server:

1. Góc nhìn Client (Frontend)
Khi một ứng dụng web (frontend) muốn gửi yêu cầu đến một API trên một domain khác (cross-origin), ví dụ từ https://frontend.com đến https://api.backend.com, trình duyệt sẽ chặn yêu cầu này nếu không có cấu hình cho phép.
Trình duyệt tự động gửi một preflight request (yêu cầu kiểm tra trước) đến server với phương thức OPTIONS để xác minh xem client có quyền thực hiện yêu cầu này hay không.
Nếu server không trả về header Access-Control-Allow-Origin hợp lệ, trình duyệt sẽ chặn kết quả từ API và không cho phép nó đến ứng dụng frontend.

2. Góc nhìn Server (Backend)
Server có trách nhiệm trả lời các yêu cầu CORS từ client. Khi server nhận được một yêu cầu từ miền khác, nó sẽ kiểm tra xem yêu cầu có hợp lệ không và trả về header Access-Control-Allow-Origin.
Server sẽ quyết định origin nào (tên miền) được phép truy cập tài nguyên của nó.


Bài toán thực tế ứng dụng CORS:

    hacker chèn được 1 đoạn script vào trang web có 1.0000.000 user sử dụng thường xuyên ví dụ như : facebook.com
    đoạn script là call sang domain: quanganh.com.vn (không cấu hình CORS) => mỗi lần 1 user log in vào facebook.com thì 1 request sẽ gửi quanganh.com.vn => nghĩa là 1 triệu request từ 1 triệu người dùng khác nhau => không thể phòng thủ được.

còn việc by pass qua CORS bằng việc off origin ở request, hoặc disable security ở chorme thì nó có by pass qua vẫn là 1 người dùng. trong trường hợp này sử dụng rate limit để chặn.