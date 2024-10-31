# Flutter Architechture Layers
## Flutter itself has 3 major Layers.
1. *Framework* which is written in Dart Lang.
    Chứa các thành phần như: Material UI, Cupertino, Widgets, Rendering, Animation, Painting, Gestures, Foundation

2. *Engine* which is written in C/C++.
    Chứa các thành phần như: Service Protocol, Composition, Platform Channels, Dart Isolate Setup, Rendering, System Event, Dart run time 

3. *Embedder* which is platform specific.
    Chứa các thành phần như: Native Plugin, App packaging, Thread Setup, Event Loop Interop


# Dio vs Http khác nhau như nào?
1. Khả năng xử lý lỗi và Timeout

    http: Có thể xử lý lỗi và timeout nhưng cần viết thủ công. Ví dụ, bạn phải tự kiểm tra mã trạng thái HTTP để xác định lỗi.

    dio: Cung cấp cách xử lý lỗi tích hợp với DioError, cho phép dễ dàng phân loại và xử lý các loại lỗi khác nhau, bao gồm timeout, canceled, và response error.

2. Interceptor (Chặn và thao tác với yêu cầu và phản hồi)

    http: Không có interceptor tích hợp, bạn phải tự thêm header, logging hoặc thay đổi request trước khi gửi.

    dio: Hỗ trợ interceptor một cách trực tiếp. Bạn có thể sử dụng interceptor để dễ dàng thêm headers, log dữ liệu hoặc sửa đổi yêu cầu/phản hồi trước khi xử lý.

3. Upload/Download Progress

    http: Không có tính năng tích hợp để theo dõi tiến trình tải lên/tải xuống. Bạn phải sử dụng cách thủ công hoặc thư viện bổ sung.

    dio: Hỗ trợ onSendProgress và onReceiveProgress, giúp dễ dàng theo dõi tiến trình tải lên và tải xuống trong thời gian thực.

4. Quản lý và Hủy Yêu Cầu (Cancel Token)

    http: Không có tính năng tích hợp để hủy yêu cầu. Bạn phải quản lý nó thủ công.

    dio: Hỗ trợ CancelToken, giúp bạn dễ dàng hủy một hoặc nhiều yêu cầu nếu cần.

5. Xử lý Phản hồi dạng Form Data và Multipart

    http: Có thể gửi form data nhưng phải viết thủ công và có thể phức tạp.

    dio: Có hỗ trợ tích hợp để gửi form data và multipart dễ dàng, thích hợp cho các yêu cầu cần upload file.

6. Cấu hình Base URL và Global Headers

    http: Không hỗ trợ cấu hình base URL mặc định, bạn cần truyền toàn bộ URL trong mỗi yêu cầu.

    dio: Cho phép đặt base URL và global headers giúp đơn giản hóa khi gửi nhiều yêu cầu đến cùng một server.

# Functional Programing
## Định Nghĩa
Functional programming (lập trình hàm) là một paradigm lập trình (phong cách lập trình) tập trung vào việc viết mã bằng cách sử dụng các hàm không có tác dụng phụ và không thay đổi trạng thái. Nó có một số đặc điểm chính:

1. Hàm là công dân hạng nhất (First-Class Functions): Trong functional programming, các hàm có thể được truyền dưới dạng tham số, trả về từ các hàm khác, hoặc lưu trữ trong các biến. Các hàm là công dân hạng nhất, nghĩa là chúng có thể được thao tác như dữ liệu.

2. Immutable Data (Dữ liệu bất biến): Functional programming tránh việc thay đổi trạng thái hoặc dữ liệu ban đầu. Thay vào đó, các giá trị mới được tạo ra khi cần thay đổi dữ liệu, giúp cho code dễ dự đoán và ít lỗi hơn. Dữ liệu bất biến là chìa khóa để có được một môi trường không có tác dụng phụ.

3. Hàm thuần (Pure Functions): Một hàm thuần là hàm mà kết quả chỉ phụ thuộc vào các tham số đầu vào và không gây ra tác dụng phụ (side effects) như thay đổi biến ngoài phạm vi hàm, in ra màn hình, hoặc ghi dữ liệu vào cơ sở dữ liệu. Điều này làm cho hàm dễ kiểm soát và dự đoán được.

4. Higher-Order Functions (Hàm bậc cao): Đây là các hàm có thể nhận hàm khác làm tham số hoặc trả về một hàm khác. Điều này giúp viết mã linh hoạt hơn.

5. Tính đệ quy (Recursion): Functional programming thường sử dụng đệ quy thay vì vòng lặp để xử lý các tác vụ lặp đi lặp lại, đặc biệt là vì dữ liệu là bất biến nên đệ quy giúp đạt được kết quả mà không cần thay đổi trạng thái.

6. Khả năng kết hợp hàm (Function Composition): Các hàm có thể được kết hợp với nhau để tạo ra các chức năng phức tạp từ các hàm nhỏ hơn, giúp tổ chức và tái sử dụng mã tốt hơn.

# Vòng đời của 1 stateful widget trong flutter?

1. createState(): được gọi 1 lần khi widget được tạo ra, và nó sẽ trả về một đối tượng State mới.

2. initState(): Được gọi một lần ngay sau createState()

3. didChangeDependencies(): Được gọi sau initState(), và được gọi lại nếu có sự thay đổi trong các InheritedWidget mà widget phụ thuộc. Phương thức này đặc biệt hữu ích khi bạn muốn cập nhật dựa trên một dependency mới.

4. build(): Hàm chính để tạo giao diện của widget. Nó được gọi lần đầu ngay sau didChangeDependencies() và sẽ được gọi lại mỗi khi giao diện cần cập nhật.

5. setState(): Dùng để thông báo cho Flutter rằng cần render lại giao diện. Tuy nhiên, có một số cách khác để gọi build() mà không sử dụng setState():

    Thay đổi trong InheritedWidget: Khi một widget kế thừa InheritedWidget thay đổi, tất cả các widget phụ thuộc sẽ tự động gọi lại build().
    
    StreamBuilder hoặc FutureBuilder: Các widget này sẽ tự động gọi lại build() khi có dữ liệu mới từ Stream hoặc Future.
    
    Provider hoặc các gói quản lý trạng thái: Các gói như Provider, Riverpod cũng có thể cập nhật giao diện khi dữ liệu thay đổi mà không cần gọi setState().

6. didUpdateWidget(): Được gọi khi widget được cập nhật, ví dụ khi có sự thay đổi trong các thuộc tính của widget cha. Đây là lúc bạn có thể so sánh widget cũ và mới để thực hiện thay đổi cần thiết.

