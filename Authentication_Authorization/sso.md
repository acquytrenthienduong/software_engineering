# Single Sign-On (SSO)
Single Sign-On (SSO) cho phép người dùng đăng nhập một lần và truy cập nhiều ứng dụng mà không phải đăng nhập lại cho từng ứng dụng. Một ví dụ phổ biến của SSO là hệ thống đăng nhập của Google: khi bạn đăng nhập vào Gmail, bạn cũng có thể truy cập vào các dịch vụ khác của Google như YouTube, Google Drive mà không cần đăng nhập lại.

Ví dụ về cách hoạt động của SSO
Giả sử bạn là nhân viên của một công ty và công ty bạn sử dụng hệ thống SSO để truy cập các ứng dụng nội bộ như Email, HR (nhân sự), và File Storage (lưu trữ tập tin).

1. Người dùng truy cập vào ứng dụng đầu tiên
Bạn mở trình duyệt và truy cập vào ứng dụng Email của công ty. Bạn được chuyển hướng đến trang đăng nhập của Identity Provider (IdP) của công ty (ví dụ như hệ thống SSO nội bộ hoặc một dịch vụ như Okta, Auth0).
2. Đăng nhập với IdP
Tại trang đăng nhập của IdP, bạn nhập tên đăng nhập và mật khẩu.
IdP xác thực thông tin của bạn, và nếu hợp lệ, IdP sẽ tạo một SSO Token xác nhận phiên làm việc của bạn.
3. IdP tạo SSO Token và gửi về ứng dụng đầu tiên
Sau khi xác thực thành công, IdP sẽ gửi SSO Token đến ứng dụng Email của bạn.
Ứng dụng Email sẽ đọc token này và cho phép bạn truy cập vào ứng dụng.
4. Truy cập vào các ứng dụng khác mà không cần đăng nhập lại
Khi bạn chuyển sang ứng dụng HR, ứng dụng này sẽ gửi bạn đến IdP để kiểm tra xác thực.
Thay vì phải nhập lại mật khẩu, IdP sẽ nhận ra rằng bạn đã đăng nhập thông qua SSO Token và tự động cấp quyền truy cập.
Bạn có thể vào ứng dụng HR ngay lập tức mà không cần đăng nhập lại.
Tương tự, khi bạn mở ứng dụng lưu trữ tập tin (File Storage), bạn cũng được truy cập ngay lập tức mà không phải nhập lại thông tin đăng nhập.
5. Kết thúc phiên đăng nhập SSO
Khi bạn đăng xuất khỏi hệ thống SSO (IdP) hoặc đóng tất cả các ứng dụng đã đăng nhập, SSO Token sẽ hết hạn hoặc bị hủy, và bạn cần đăng nhập lại vào lần sau.

Các thành phần chính trong SSO
Identity Provider (IdP): Hệ thống chịu trách nhiệm xác thực người dùng (ví dụ: Google SSO, Okta, Auth0).
Service Providers (SP): Các ứng dụng sử dụng SSO để xác thực người dùng (như Gmail, Google Drive, YouTube).
SSO Token: Token mà IdP cấp cho người dùng khi xác thực thành công, được dùng để truy cập vào các SP mà không cần đăng nhập lại.
Lợi ích của SSO
Tiện lợi cho người dùng: Đăng nhập một lần, truy cập nhiều ứng dụng.
Bảo mật tập trung: IdP chịu trách nhiệm bảo mật, giúp quản lý tài khoản người dùng hiệu quả hơn.
Quản lý dễ dàng: Người dùng có thể dễ dàng thêm hoặc thu hồi quyền truy cập vào các ứng dụng khác nhau qua IdP.
Tóm tắt quy trình
Người dùng truy cập ứng dụng A, được chuyển hướng đến IdP để đăng nhập.
IdP xác thực và cấp SSO Token cho người dùng.
Khi người dùng truy cập vào ứng dụng B hoặc C, IdP xác nhận SSO Token và cấp quyền truy cập mà không yêu cầu đăng nhập lại.





