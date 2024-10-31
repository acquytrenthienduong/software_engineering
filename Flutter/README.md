## Flutter Design Principles

1. Dependency Injection
2. Design Pattern

    Model-View-Controller (MVC)
    Model-View-ViewModel (MVVM)
    Provider Pattern
    Bloc Pattern
    Singleton Pattern
    Factory Pattern
    Builder Pattern
    Composite Pattern

Đợi nhiều giá trị Future
    dùng List<String> results = await Future.wait([future1, future2]);

Chạy nhiều luồng song song sử dụng
    Isolate

Để làm Flutter responsive, tôi thường kết hợp nhiều phương pháp. MediaQuery giúp tôi điều chỉnh widget theo kích thước màn hình, và LayoutBuilder linh hoạt cho các bố cục khác nhau. Ngoài ra, tôi có kinh nghiệm với các gói như flutter_screenutil và responsive_builder để tối ưu code cho các thiết bị. Khi cần thiết, tôi cũng dùng FractionallySizedBox hoặc flex trong Row/Column để đảm bảo giao diện linh hoạt."


# Flutter Basics
Sự khác biệt giữa StatefulWidget và StatelessWidget là gì?

"StatefulWidget là widget có trạng thái, có thể thay đổi trong suốt vòng đời của nó, còn StatelessWidget là widget không có trạng thái và không thay đổi sau khi được khởi tạo. StatefulWidget thường sử dụng trong các trường hợp cần cập nhật giao diện khi có sự thay đổi dữ liệu, còn StatelessWidget phù hợp cho các widget chỉ hiển thị dữ liệu cố định."
Widget tree là gì?

"Widget tree là cấu trúc cây bao gồm các widget lồng vào nhau, mỗi widget có thể chứa một hoặc nhiều widget con. Widget tree quan trọng vì nó ảnh hưởng trực tiếp đến giao diện của ứng dụng. Nếu một widget thay đổi, Flutter sẽ cập nhật lại widget tree để phản ánh sự thay đổi đó trên màn hình."
Bạn hiểu gì về widget lifecycle? Khi nào initState() và dispose() được gọi?

"initState() được gọi khi widget lần đầu tiên được tạo và thường dùng để khởi tạo các giá trị hoặc đăng ký listener. dispose() được gọi khi widget bị hủy, dùng để giải phóng các tài nguyên như hủy listener hay đóng stream."

# State Management
Bạn đã sử dụng những phương pháp quản lý trạng thái nào trong Flutter?

"Tôi đã làm việc với Provider và Riverpod. Provider giúp truyền dữ liệu xuống widget tree, dễ dàng cập nhật UI khi dữ liệu thay đổi, còn Riverpod cung cấp cách tiếp cận linh hoạt hơn cho các yêu cầu phức tạp và cải thiện khả năng kiểm thử."
Giải thích cách hoạt động của Provider.

"Provider là một cơ chế quản lý state sử dụng ChangeNotifier để cập nhật dữ liệu và thông báo cho widget tree khi có thay đổi. Nó giúp dễ dàng chia sẻ state và cập nhật UI mà không cần quản lý thủ công."


# UI và Responsive Design
Bạn xử lý giao diện responsive như thế nào trong Flutter?

"Tôi dùng MediaQuery để lấy kích thước màn hình, LayoutBuilder để thiết kế các giao diện phù hợp cho từng kích thước cụ thể, và có thể dùng các gói như flutter_screenutil để tự động điều chỉnh tỷ lệ pixel."
Sự khác nhau giữa Expanded và Flexible là gì?

"Expanded luôn chiếm hết không gian trống còn lại, còn Flexible cho phép widget chiếm không gian nhưng có thể điều chỉnh linh hoạt với tỷ lệ nhất định nếu có widget khác chia sẻ không gian."

# Networking và Database
Bạn đã làm việc với API nào trong ứng dụng Flutter?

"Tôi đã làm việc với API RESTful sử dụng http package. Tôi sử dụng các phương thức như GET, POST để lấy và gửi dữ liệu. Khi API trả về lỗi, tôi sử dụng try-catch để xử lý ngoại lệ và hiển thị thông báo cho người dùng."

Hãy giải thích cách bạn lưu trữ và truy xuất dữ liệu offline.

"Tôi sử dụng SQLite hoặc Hive để lưu trữ dữ liệu offline trong Flutter. SQLite phù hợp cho dữ liệu có cấu trúc quan hệ, trong khi Hive dễ sử dụng hơn và hoạt động tốt cho dữ liệu không có cấu trúc."


# Bạn có những kỹ thuật nào để tối ưu hóa hiệu suất trong Flutter?
Bạn có những kỹ thuật nào để tối ưu hóa hiệu suất trong Flutter?

"Tôi sử dụng const cho các widget không thay đổi, giới hạn số lần rebuild của widget bằng RepaintBoundary, và giảm tải các công việc phức tạp qua Isolate."

Làm thế nào để giảm thiểu số lượng lần build widget trong Flutter?

"Tôi dùng const constructor, RepaintBoundary và shouldRebuild trong InheritedWidget để giảm thiểu số lần build, giúp tối ưu hóa hiệu suất."

# Kiến trúc và Clean Code
Bạn thường sử dụng kiến trúc nào cho ứng dụng Flutter của mình?

"Tôi thường sử dụng kiến trúc MVVM hoặc Clean Architecture để giữ mã sạch sẽ, dễ kiểm tra và mở rộng. Điều này giúp phân tách rõ ràng giữa business logic và UI code."

Làm thế nào để bạn tổ chức các thư mục và file trong dự án Flutter?

"Tôi chia các file thành các thư mục như models, views, controllers, services, và widgets để dễ quản lý và duy trì dự án."

Bạn áp dụng những nguyên tắc nào để giữ code sạch và dễ bảo trì?

"Tôi tuân thủ các nguyên tắc SOLID, tránh lồng nhiều logic vào widget, và đảm bảo tách biệt các trách nhiệm."

# Advanced Concepts
Bạn hiểu gì về Isolate và cách sử dụng nó trong Flutter?

"Isolate là cơ chế trong Flutter cho phép thực hiện đa luồng. Tôi sử dụng Isolate khi có công việc nặng như xử lý file lớn để không làm ảnh hưởng đến UI."

Cách xử lý nhiều Future cùng lúc với Future.wait?

"Tôi dùng Future.wait để chờ nhiều Future hoàn thành. Nếu cần xử lý lỗi riêng cho từng Future, tôi sẽ sử dụng catchError cho từng cái."

Khi nào bạn sẽ dùng StreamBuilder thay vì FutureBuilder?

"StreamBuilder phù hợp với dữ liệu liên tục thay đổi như socket hoặc Firestore, trong khi FutureBuilder phù hợp hơn với dữ liệu một lần."
