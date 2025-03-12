## 1. Bạn đã tham gia xây dựng bao nhiêu dự án với Flutter? Bạn có thể chia sẻ một dự án tiêu biểu về quy mô và vai trò của bạn trong dự án đó không?

“Tôi đã tham gia khoảng 6-7 dự án Flutter. Trong đó, dự án MobiCloud/CloudV có hơn 10,000 user thật đang sử dụng, tôi chịu trách nhiệm chính về phát triển và bảo trì. Tôi xây dựng từ những màn hình cơ bản, tích hợp thanh toán qua ZaloPay/Momo, cho đến quá trình cập nhật phiên bản mới lên store, trả lời phản hồi user. Đội ngũ khoảng 3-4 người, tôi cũng hỗ trợ review code, triển khai CI/CD để tự động build. Nhờ đó giảm được 30% thời gian build, đồng thời tăng tính ổn định do có test tự động.
Còn dự án Resumo, lúc bắt đầu tôi tham gia như một developer, nhận task như mọi người. Nhưng sau 3 tháng, tôi bắt đầu review code, tạo các component chung, đảm bảo best practice về kiến trúc. Đây là dự án team khoảng 10 người, yêu cầu collaboration cao. Kết quả, chúng tôi hoàn thành MVP trong 2 tháng, tiết kiệm khá nhiều thời gian nhờ tái sử dụng component.”

## 2. Bạn thường sử dụng kiến trúc hoặc cấu trúc thư mục như thế nào trong các dự án Flutter? Lý do bạn lựa chọn cách tổ chức đó là gì, và bạn thấy nó có ưu/nhược điểm gì?

	•	Áp dụng MVVM: Tách biệt giữa Model, View, và ViewModel, giúp code dễ bảo trì và test.
	•	Tổ chức folder theo feature-first: Mỗi feature có thư mục riêng (chứa providers, controllers, views, widgets, v.v.). Các phần dùng chung (shared, core) để riêng để tái sử dụng.
    
	•	Ưu điểm:
	•	Dễ quản lý, tái sử dụng code (đặc biệt là widget chung).
	•	Tách biệt logic và UI, giúp team làm việc song song và code review thuận tiện.
	•	Đảm bảo tính mở rộng khi dự án lớn dần.

	•	Nhược điểm:
	•	Cấu trúc ban đầu có thể phức tạp hơn.
	•	Với dự án nhỏ, việc chia feature-first có thể hơi “quá tầm” và tốn thời gian setup.
	•	State management: Thường dùng GetX hoặc Riverpod (hoặc Provider, Bloc…) để hiện thực MVVM, tập trung logic trong ViewModel/Controller, đồng thời hỗ trợ binding dữ liệu với UI.


## 3. Bạn thường làm gì để tối ưu hiệu năng (performance) trong ứng dụng Flutter? Ví dụ, khi ứng dụng gặp tình trạng lag, crash, hay tốc độ xử lý chậm, bạn khắc phục bằng cách nào?

	•	ListView.builder / GridView.builder thay vì load toàn bộ khi dữ liệu lớn. Kết hợp pagination hoặc lazy load khi cần thiết.
	•	Cache dữ liệu với Dio cache cho request GET, tránh gọi API lặp đi lặp lại.
	•	Đo lường, giám sát performance qua Flutter DevTools, Crashlytics, Sentry. Khi thấy màn hình lag hoặc crash, mình kiểm tra render time (GPU/CPU usage), phân tích memory, nếu cần sẽ tách các tác vụ nặng sang isolate.
	•	Tối ưu ảnh, asset, chuyển sang CDN khi cần, hoặc nén ảnh ở mức phù hợp.
	•	Triển khai CI/CD: chạy test performance, test regression trước khi release để đảm bảo ổn định.”


## 4. Bạn có thể chia sẻ quy trình bạn thực hiện để đưa một ứng dụng Flutter lên Apple App Store và Google Play Store không? Và trong quá trình này, bạn thường gặp những khó khăn, vấn đề gì?

	“Để publish lên Apple Store, đầu tiên tôi cần tài khoản Developer (99 USD/năm). Tôi tạo build release bằng Xcode, đảm bảo đã cấu hình Bundle ID, App Icon, info.plist (quyền truy cập), sau đó upload qua App Store Connect. Tiếp theo, tôi cung cấp thông tin (screenshot, mô tả, phân loại nội dung, chính sách quyền riêng tư). Sau khi gửi bản build, Apple sẽ review; nếu vi phạm policy hay chưa rõ phần nào, họ sẽ phản hồi kèm lý do từ chối để mình update.

	Với Google Play, tôi dùng Google Play Console. Sau khi có tài khoản (25 USD trả một lần), tôi cấu hình signing key (.jks), build .aab (Android App Bundle) qua Gradle hoặc lệnh flutter build appbundle. Tương tự, tôi điền thông tin, bao gồm Privacy Policy, quyền truy cập, nội dung (rating). Google cũng có chế độ Internal Testing hoặc Closed Testing để kiểm tra trước khi phát hành công khai.

## 5. Bạn từng tích hợp những dịch vụ thanh toán hoặc các thư viện bên thứ ba nào trong ứng dụng Flutter? Quá trình tích hợp và các khó khăn thường gặp là gì?
	“Mình từng tích hợp Momo SDK và ZaloPay SDK trong ứng dụng Flutter, hỗ trợ cả môi trường sandbox lẫn production. Quá trình tích hợp bao gồm:
	•	Cấu hình deeplink hoặc scheme để chuyển sang app thanh toán (app-to-app) khi người dùng xác nhận.
	•	Lắng nghe callback hoặc redirect sau khi thanh toán thành công/thất bại.
	•	Xử lý bảo mật: thường cần access token hoặc partner code, tùy theo yêu cầu SDK.

	Khó khăn thường gặp là tài liệu chưa đầy đủ, có thể thiếu thông tin về tham số (params) hoặc cách xử lý khi user hủy giao dịch giữa chừng. Trong trường hợp này, mình thường liên hệ đội dev của Momo/ZaloPay, hoặc xem code mẫu (sample project) để nắm rõ flow.

	Về kinh nghiệm, mình khuyên:
	•	Thiết lập môi trường sandbox kỹ lưỡng, test nhiều kịch bản (user cancel, timeout, app crash).
	•	Ghi log đầy đủ, sử dụng Sentry hay Crashlytics để theo dõi lỗi runtime, callback.
	•	Chú ý quy định của Apple, Google nếu app có thanh toán in-app (hay store kit).”

## 6. Bạn có kinh nghiệm phát triển native iOS/Android không, hay bạn chỉ thuần về Flutter? Nếu có, bạn có thể chia sẻ một ví dụ về việc chỉnh sửa hoặc triển khai một tính năng native trong dự án Flutter không?

	“Trong các dự án thuần Flutter, mình thường không chỉnh code native, nhưng mình đã tham gia tạo Call SDK cho công ty, sử dụng linphone (iOS/Android) để kết nối SIP server.
	•	Cụ thể: Mình viết code Swift và Kotlin để xây dựng tính năng gọi điện (init SIP, đăng ký tài khoản, xử lý cuộc gọi), sau đó đóng gói thành library (chẳng hạn .framework trên iOS, .aar trên Android).
	•	Tiếp đó, mình tạo MethodChannel trong Flutter để gọi các hàm native, ví dụ startCall(phoneNumber) hoặc endCall(). Khi có sự kiện call đến, native gửi callback qua EventChannel về Flutter.
	•	Khó khăn: Xử lý phân quyền microphone, background mode khi app tắt. Mình đọc log Xcode/ADB, gỡ lỗi theo hướng native.
	•	Kết quả: SDK này tích hợp vào Flutter app demo thành công, team triển khai cho khách hàng.

	Nhờ vậy, mình có kinh nghiệm về cấu hình build, troubleshoot code native, và kết nối nó với UI Flutter.”

## 7. Bạn đã từng phát triển các dự án web với Angular/React/Vue. Bạn có thể so sánh sơ bộ về ưu/nhược điểm của ba framework này và lý do bạn chọn Angular trong dự án CMC Cloud Portal?
	“Mình so sánh ngắn gọn ba framework:
	•	Angular: full-featured framework (CLI, routing, DI, 2-way binding), dùng TypeScript mặc định. Thích hợp cho dự án quy mô lớn vì code chặt chẽ, có cấu trúc. Nhược điểm: học ban đầu phức tạp, code verbose.
	•	React: là library, 1-way binding, dùng JSX. Cộng đồng rất mạnh, linh hoạt nhưng phải cài thêm package cho routing, state management. Ưu điểm là tốc độ phát triển, nhược điểm là thiếu “one-stop” solution như Angular.
	•	Vue: nhẹ, dễ học, hỗ trợ template hay composition API. Với dự án lớn thì có thể phải cài thêm nhiều plugin, chưa mạnh như Angular về tính chặt chẽ.

	Trong dự án xxx Cloud Portal, mình chọn Angular vì cần kiến trúc chặt chẽ, hỗ trợ DI, routing, guard, và liên tục mở rộng các module mới. Angular CLI cũng giúp tạo, build, test rất nhanh, giảm thời gian setup.”

## 8. Bạn có thể mô tả ngắn gọn kinh nghiệm làm việc với NodeJS (REST, WebSocket, gRPC, Kafka…)? Bạn từng triển khai microservices và dùng các công cụ như Kubernetes, Kafka, Redis… trong dự án nào không?
“Mình sử dụng NodeJS chủ yếu với framework như Express hoặc NestJS để viết REST API, hoặc Socket.io cho realtime. Với Kafka, mình từng triển khai producer – consumer gửi message giữa microservices, đồng bộ data sang MongoDB hay PostgreSQL.

	gRPC thì mình dùng cho giao tiếp service-to-service, tốc độ nhanh hơn REST, đặc biệt hữu ích khi luồng dữ liệu lớn hoặc cần streaming.

	Redis thường dùng làm cache session hoặc để giảm tải cho DB chính. Kafka (hoặc RabbitMQ) đóng vai trò message queue cho giao tiếp bất đồng bộ, giúp các service tách rời nhau, dễ scale.

	Về triển khai, mình dùng Kubernetes để auto-scale pod khi traffic tăng, đồng thời auto-healing pod lỗi. Để giám sát, mình tích hợp Prometheus và Grafana (hoặc ELK Stack) theo dõi logs và metric.

	Dù đa số là demo, POC, mình cũng đã áp dụng được vào một số dự án nội bộ, như triển khai microservice NodeJS trên k8s, scale từ 2 pod lên 10 pod khi traffic tăng, đảm bảo tính HA (High Availability). Qua đó, mình thấy microservices + NodeJS + Kafka là combo hiệu quả, vừa nhanh vừa linh hoạt.”
## 10. Bạn đã từng dẫn dắt nhóm (như trong dự án Resumo) để đảm bảo tiến độ và chất lượng. Bạn có thể chia sẻ cách bạn phân chia công việc, theo dõi tiến độ và giải quyết xung đột kỹ thuật trong nhóm như thế nào không?
	“Trong dự án Resumo, mình lead một nhóm 10 dev, làm việc theo Scrum. Mỗi sprint 2 tuần, mình họp với phía Nhật để lấy yêu cầu, tạo backlog trên JIRA. Sau đó:
	•	Sprint Planning: Ước lượng task, chia task theo độ ưu tiên. Mỗi dev nhận công việc phù hợp.
	•	Daily Stand-up: 15 phút cập nhật tiến độ, nêu khó khăn, mình làm trung gian hỗ trợ nếu cần.
	•	Code review: Sử dụng GitLab MR, team review chéo, áp dụng code convention đã thống nhất, check coding style và logic.
	•	Sprint Review: Cuối sprint, mình build bản release gửi bên Nhật, họ feedback bug hoặc thay đổi nghiệp vụ.
	•	Retrospective: Team đánh giá những gì làm tốt, chưa tốt, rút kinh nghiệm.

	Khi xung đột kỹ thuật xảy ra, mình yêu cầu cả hai bên cung cấp benchmark, PoC hoặc best practice chính thống để thảo luận trên số liệu khách quan, tránh tranh luận cảm tính. Qua đó, mình giữ cho tiến trình phát triển không bị tắc nghẽn, đảm bảo chất lượng giải pháp.”
## 