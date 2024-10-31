## Micro Frontend
Micro front-end là một kiến trúc phát triển web, nơi một ứng dụng lớn được chia thành các phần nhỏ, độc lập (micro front-ends), mỗi phần có thể được phát triển và triển khai một cách riêng biệt. Những phần này có thể được phát triển bằng các framework hoặc thư viện khác nhau, nhưng vẫn hoạt động cùng nhau trong cùng một ứng dụng.

#### Các đặc điểm chính của micro front-end:
1. Đa công nghệ: Mỗi micro front-end có thể được phát triển bằng một framework hoặc thư viện riêng, chẳng hạn như Angular, React, Vue, hoặc Svelte. Điều này giúp mỗi team có thể chọn công nghệ phù hợp với nhu cầu mà không bị ràng buộc vào một stack cố định.

2. Phát triển độc lập: Các phần của ứng dụng được tách biệt rõ ràng, cho phép các team phát triển và triển khai từng phần một cách độc lập mà không ảnh hưởng đến phần còn lại của ứng dụng.

3. Tích hợp phía người dùng: Các phần front-end nhỏ được tích hợp tại thời điểm người dùng truy cập trang web, có thể là thông qua iframe, hoặc bằng cách sử dụng các phương pháp như server-side include (SSI) hoặc client-side composition.

4. Độc lập triển khai: Mỗi micro front-end có thể được triển khai và nâng cấp mà không cần triển khai lại toàn bộ ứng dụng, giúp tăng tính linh hoạt và giảm rủi ro.

#### Lợi ích của micro front-end:
1. Dễ mở rộng: Cho phép nhiều team làm việc trên các phần khác nhau của ứng dụng mà không ảnh hưởng đến nhau.
2. Khả năng thay đổi công nghệ linh hoạt: Các team có thể sử dụng các công nghệ mới mà không cần thay đổi toàn bộ ứng dụng.
3. Tối ưu hóa quá trình phát triển: Giảm thiểu xung đột mã và tăng tốc quá trình phát triển nhờ tính độc lập.

Trong micro front-end, thường mỗi module được xây dựng và quản lý riêng biệt, và cách tổ chức code và triển khai giao tiếp giữa các micro front-end có thể phụ thuộc vào mô hình mà tổ chức hoặc team đang sử dụng. Dưới đây là các mô hình và thành phần cần triển khai để giúp các micro front-end giao tiếp và quản lý độc lập mà không cần phải dùng chung repo.

1. Tổ chức mã nguồn và các repo
Đa repo (Multi-Repo): Mỗi team có thể sở hữu một repo riêng cho micro front-end của mình. Điều này giúp các team có thể phát triển độc lập mà không ảnh hưởng đến nhau. Cách tiếp cận này phổ biến hơn trong các tổ chức lớn, nơi có nhiều team quản lý các phần của ứng dụng.
Monorepo: Đôi khi, các team chọn cách sử dụng chung một repo (monorepo) nhưng chia thành các thư mục hoặc package riêng. Cách này giúp đồng bộ và dễ quản lý phiên bản nếu các module có sự phụ thuộc chặt chẽ vào nhau.
Với Angular, bạn có thể dùng một monorepo với Nx để quản lý các module một cách độc lập. Nx hỗ trợ quản lý dependencies giữa các module và tạo môi trường phát triển linh hoạt cho nhiều team.
2. Module Federation (Webpack 5)
Module Federation cho phép một ứng dụng Angular tải các module từ các ứng dụng Angular khác mà không cần nhúng trực tiếp vào mã nguồn. Mỗi team có thể cấu hình ứng dụng của mình thành một "host" hoặc "remote", trong đó:
Host: Ứng dụng chính sẽ chịu trách nhiệm tải các remote (ứng dụng con).
Remote: Các ứng dụng con có thể được chia sẻ như một module độc lập.
Với cách này, bạn có thể làm việc riêng lẻ và chỉ cần tích hợp các module với nhau khi build ứng dụng chính.
3. Single-SPA cho điều hướng và quản lý các ứng dụng con
Single-SPA là một framework có thể tích hợp nhiều ứng dụng front-end khác nhau (như Angular, React, Vue) vào một ứng dụng duy nhất. Single-SPA giúp điều hướng giữa các ứng dụng con và xử lý các sự kiện liên kết giữa chúng.
Khi tích hợp Single-SPA, bạn tạo một “root-config” để điều hướng và quản lý trạng thái chung của ứng dụng. Các ứng dụng con sẽ được tải dựa vào trạng thái URL hoặc một event đặc biệt.
4. Giao tiếp giữa các micro front-ends
Để các module micro front-end có thể giao tiếp với nhau, bạn có thể chọn một số phương pháp sau:

Custom Events: Sử dụng các sự kiện tùy chỉnh (Custom Events) để gửi và nhận các thông tin qua lại giữa các module. Các event này có thể được phát (dispatch) từ một module và lắng nghe (listen) từ một module khác.
Shared Services hoặc Event Bus: Tạo một service hoặc Event Bus chung để các ứng dụng có thể gửi và nhận thông điệp. Ví dụ, với Angular, bạn có thể tạo một service dùng chung cho các micro front-end và dùng các phương thức như Subject và Observable trong RxJS để quản lý event.
Local Storage hoặc Session Storage: Đôi khi, nếu cần truyền tải trạng thái nhỏ và không cần thiết phải đồng bộ ngay lập tức, Local Storage có thể là giải pháp.
Redux hoặc State Management Library: Sử dụng một thư viện quản lý trạng thái như Redux hoặc một giải pháp tương tự để chia sẻ và quản lý trạng thái chung của các module.
5. Hệ thống điều hướng và quản lý URL
Các ứng dụng con cần chia sẻ một hệ thống điều hướng hoặc dựa vào URL để kích hoạt và điều phối trạng thái hiển thị. Sử dụng hash routing hoặc pathname routing giúp Single-SPA và Module Federation biết được module nào cần được tải vào khi URL thay đổi.
Ví dụ: Triển khai đơn giản với Module Federation và Event Bus
Giả sử bạn có 2 team, một team phát triển phần Dashboard và một team khác phát triển phần User Profile:

Dashboard và User Profile mỗi phần sẽ được phát triển thành một ứng dụng Angular riêng biệt với Module Federation.
Dashboard có thể là "host", trong khi User Profile là "remote".
Cả hai ứng dụng có thể giao tiếp qua một Event Bus sử dụng Custom Events hoặc một shared service.
Điều này cho phép mỗi team làm việc độc lập và ứng dụng chính chỉ cần tải module mà không cần tích hợp mã trực tiếp từ từng ứng dụng con.