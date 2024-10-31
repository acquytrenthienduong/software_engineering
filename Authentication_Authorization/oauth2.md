# OAuth2
OAuth2 là một giao thức phân quyền phổ biến, cho phép một ứng dụng (client) truy cập vào tài nguyên của người dùng trên một dịch vụ khác mà không cần chia sẻ mật khẩu. Một ví dụ thường gặp là khi bạn muốn đăng nhập vào một ứng dụng bên thứ ba (như một ứng dụng web hoặc di động) bằng tài khoản Google.

Dưới đây là một ví dụ chi tiết về quá trình OAuth2 Authorization Code Flow mà Google sử dụng khi bạn đăng nhập vào ứng dụng bên thứ ba.

Tình huống
Giả sử bạn đang sử dụng một ứng dụng di động tên là “PhotoPrint” và ứng dụng này cần truy cập vào thư viện ảnh Google Photos của bạn để in ảnh.

Các bước của OAuth2 Authorization Code Flow
1. Ứng dụng yêu cầu quyền truy cập từ người dùng
Khi bạn muốn in ảnh từ Google Photos, ứng dụng PhotoPrint sẽ chuyển hướng bạn đến trang đăng nhập của Google.
Ứng dụng này sẽ yêu cầu một số quyền, như quyền đọc ảnh của bạn trong Google Photos.
2. Người dùng đồng ý và đăng nhập
Bạn được đưa đến màn hình đăng nhập của Google và đăng nhập bằng tài khoản Google.
Google sẽ hỏi bạn có đồng ý cho ứng dụng PhotoPrint truy cập ảnh của bạn hay không.
Khi bạn đồng ý, Google sẽ tạo một Authorization Code và chuyển hướng bạn về ứng dụng PhotoPrint cùng với mã này.
3. Ứng dụng nhận mã ủy quyền (Authorization Code)
Ứng dụng PhotoPrint sẽ nhận Authorization Code từ Google, và sử dụng mã này để yêu cầu Access Token từ Google.
4. Ứng dụng yêu cầu Access Token từ Google
Ứng dụng gửi Authorization Code và một số thông tin khác (như client ID, client secret) đến Google để xác nhận quyền truy cập.
Nếu thông tin hợp lệ, Google sẽ gửi lại Access Token cho ứng dụng PhotoPrint.
5. Ứng dụng sử dụng Access Token để truy cập vào Google Photos
Sau khi nhận được Access Token, ứng dụng PhotoPrint có thể sử dụng token này để gửi yêu cầu truy cập dữ liệu ảnh trên Google Photos thay mặt bạn.
Mỗi lần ứng dụng cần truy cập dữ liệu, Access Token sẽ được đính kèm trong yêu cầu gửi đến Google.
6. Access Token hết hạn
Access Token thường có thời hạn ngắn (vài giờ) để bảo mật. Khi hết hạn, ứng dụng cần sử dụng Refresh Token (nếu có) để yêu cầu một Access Token mới mà không cần yêu cầu bạn đăng nhập lại.
Refresh Token được cung cấp từ bước đầu tiên và thường có thời hạn lâu hơn hoặc không hết hạn.

Tóm tắt các thành phần chính trong OAuth2 Authorization Code Flow
Authorization Server: Máy chủ cấp phát quyền truy cập (ở đây là Google).
Resource Server: Máy chủ chứa tài nguyên (ở đây là Google Photos).
Client: Ứng dụng muốn truy cập tài nguyên (ở đây là PhotoPrint).
User: Người dùng muốn cho phép ứng dụng truy cập vào tài nguyên của họ.
Access Token: Mã truy cập cho phép ứng dụng thay mặt người dùng truy cập tài nguyên.
Authorization Code: Mã ủy quyền mà ứng dụng dùng để lấy Access Token.