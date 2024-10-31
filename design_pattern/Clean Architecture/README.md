# Clean Architechture
Clean Architecture là một phương pháp thiết kế phần mềm được phát triển bởi Robert C. Martin, với mục tiêu tạo ra một kiến trúc dễ hiểu, dễ bảo trì và dễ mở rộng. Trong Clean Architecture, các lớp và module được tách biệt rõ ràng theo chức năng, giúp code dễ quản lý hơn khi hệ thống phát triển. Đặc biệt trong các ứng dụng phức tạp như Flutter, kiến trúc này giúp chia tách các thành phần, giảm phụ thuộc giữa các module và dễ dàng viết test.


## Các lớp trong Clean Architecture
Kiến trúc này chia ứng dụng thành các lớp chính như sau:

sơ đồ vòng tròn của Clean Architecture thường được gọi là "Onion Architecture" (kiến trúc hình hành), biểu diễn rõ ràng cấu trúc các lớp theo hướng từ trong ra ngoài:

1. Entities (Core/Domain Models): Ở lớp trong cùng, chứa các model hoặc entities – dữ liệu cốt lõi và định nghĩa về logic nghiệp vụ không phụ thuộc vào framework nào. Đây là những đối tượng bất biến về logic cho toàn hệ thống, ví dụ như các lớp User, Product.

2. Use Cases (Application Logic): Lớp này chứa các use cases, thể hiện các chức năng nghiệp vụ chính, xác định cách dữ liệu được truy cập và xử lý để hoàn thành các nhiệm vụ của ứng dụng. Các lớp này quản lý logic cụ thể của từng use case, giúp code tách biệt và dễ tái sử dụng.

3. Interface Adapters (Repositories, Presenters): Lớp này đóng vai trò là interface adapters, là cầu nối giữa use cases và dữ liệu hoặc giao diện. Nó bao gồm các repository interface và các adapter xử lý logic chuyển đổi dữ liệu giữa các lớp bên trong và các lớp bên ngoài. Lớp này có thể bao gồm các repository, controller, hoặc presenter, giúp không gian UI không phải lo lắng về logic nghiệp vụ hoặc chi tiết dữ liệu.

4. UI/Frameworks (Presentation/UI): Lớp ngoài cùng là UI hoặc Frameworks, nơi chứa giao diện người dùng, các widget cụ thể trong Flutter, và các thành phần phụ thuộc vào các framework bên ngoài như HTTP client, database client. Đây là nơi các màn hình được xây dựng, hiển thị dữ liệu lấy từ lớp Interface Adapters và nhận sự kiện từ người dùng.

Các vòng tròn giúp làm nổi bật Dependency Rule của Clean Architecture – mọi phụ thuộc đều hướng từ lớp ngoài vào lớp trong, tuân theo nguyên lý Dependency Inversion. Do đó, lớp UI sẽ phụ thuộc vào Interface Adapters, Interface Adapters phụ thuộc vào Use Cases, và Use Cases phụ thuộc vào Entities.

## Tổ chức folder trong code

lib/
├── core/                # Các thành phần chung, ví dụ như constants và helper
├── data/
│   ├── models/          # Các lớp dữ liệu
│   ├── repositories/    # Repository cụ thể
│   ├── data_sources/    # API hoặc Database sources
├── domain/
│   ├── entities/        # Các model trong Domain
│   ├── use_cases/       # Các Use Cases
│   └── repositories/    # Interface của Repository
└── presentation/
    ├── screens/         # Các màn hình (Screens)
    └── state/           # State management (Provider, Bloc, etc.)


Tổ chức thư mục điển hình theo Clean Architecture

Domain Layer: Chứa Entities, Use Cases, và Repository Interface
lib/domain/entities/user.dart
lib/domain/use_cases/get_user_by_id_use_case.dart
lib/domain/repositories/user_repository.dart

Data Layer: Chứa Repository Implementation và data sources (API, local database)
lib/data/repositories/user_repository_impl.dart

Presentation Layer: Chứa Provider, UI Screens, Widget
lib/presentation/providers/user_provider.dart
lib/presentation/screens/user_screen.dart

Tổng kết
Clean Architecture Layer	Ví dụ trong code	                Vị trí vòng tròn
Entities (Core Model)	    User	                            Trung tâm
Use Cases	                GetUserByIdUseCase	                Thứ hai từ trong
Interface Adapters	        UserRepository, UserRepositoryImpl	Thứ ba từ trong
UI/Frameworks	            UserProvider, UserScreen	        Vòng ngoài cùng
