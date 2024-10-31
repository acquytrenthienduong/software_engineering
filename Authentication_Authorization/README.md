#### Xác thực (Authentication): 
Là quá trình kiểm tra xem người dùng là ai, bằng cách yêu cầu cung cấp các thông tin xác thực (như username/password, token, v.v.).
#### Phân quyền (Authorization): 
Là quá trình xác định người dùng được phép làm gì sau khi đã được xác thực.

Các phương pháp Authentication && Authorization
--------------------------------------------------------------------------------------------------------------
Loại	        Phương pháp	                        Mô tả
Authentication	Password-Based	                    Sử dụng username/password
                Multi-Factor Authentication (MFA)	Xác thực nhiều lớp (OTP, biometrics)
                Token-Based (JWT, OAuth2, API Key)	Xác thực thông qua token
                Biometric	                        Xác thực sinh trắc học
                Certificate-Based	                Dùng chứng chỉ số
                Session-Based	                    Session ID được lưu trên server
                SSO	                                Đăng nhập một lần cho nhiều dịch vụ
                Kerberos	                        Sử dụng ticket trong mạng nội bộ
--------------------------------------------------------------------------------------------------------------                
Authorization	RBAC	                            Cấp quyền theo vai trò người dùng
                ABAC	                            Cấp quyền theo thuộc tính (user, tài nguyên)
                ACL	                                Gán quyền trực tiếp cho tài nguyên
                PBAC	                            Sử dụng chính sách để xác định quyền truy cập
                OAuth Scopes	                    Quyền truy cập dựa trên scopes của OAuth2
                Contextual Access Control	        Quyền truy cập theo bối cảnh (vị trí, thiết bị, thời gian)

1. OAuth2
Cách hoạt động: OAuth2 là một cơ chế xác thực và phân quyền cho phép người dùng cấp quyền truy cập cho bên thứ ba mà không cần chia sẻ mật khẩu.
Quy trình: OAuth2 sử dụng một loại mã thông báo gọi là "Access Token" (có thể là JWT hoặc một loại token khác). Trong quy trình này:
Người dùng đăng nhập và cấp quyền.
Một "Authorization Server" sẽ cấp phát Access Token cho client (ứng dụng của bên thứ ba) để truy cập vào tài nguyên của người dùng.
Đặc điểm:
OAuth2 cho phép "login via" (đăng nhập qua) với các dịch vụ của bên thứ ba như Google, Facebook, GitHub, v.v.
Access Token có thể sử dụng JWT, nhưng không bắt buộc. Token có thể là các định dạng khác, tùy thuộc vào dịch vụ cung cấp.
Có sử dụng JWT không?: Có thể, nhưng không bắt buộc. OAuth2 cho phép sử dụng các loại token khác ngoài JWT.

2. Single Sign-On (SSO)
Cách hoạt động: SSO cho phép người dùng đăng nhập một lần để truy cập vào nhiều dịch vụ khác nhau mà không cần đăng nhập lại.
Quy trình:
Khi người dùng đăng nhập vào một dịch vụ, SSO sẽ tạo ra một phiên làm việc.
Nếu người dùng muốn truy cập dịch vụ khác trong cùng hệ thống, SSO sẽ tự động xác thực bằng cách dùng token đã tồn tại.
Đặc điểm:
Dùng trong các hệ thống lớn với nhiều dịch vụ liên kết, thường thấy trong các hệ thống doanh nghiệp.
Các hệ thống SSO phổ biến như SAML, Kerberos, CAS thường không yêu cầu JWT, nhưng một số hệ thống SSO hiện đại dựa trên OAuth2 có thể sử dụng JWT.
Có sử dụng JWT không?: Có thể có hoặc không, tùy thuộc vào hệ thống triển khai.