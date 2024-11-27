## NgRx
NgRx là một thư viện quản lý state dành cho Angular, sử dụng các mô hình từ Redux. Nó cung cấp một kho lưu trữ trạng thái (store) toàn cục, giúp lưu trữ và quản lý trạng thái của ứng dụng một cách có tổ chức và dễ dự đoán. NgRx phù hợp khi ứng dụng của bạn có logic phức tạp và cần quản lý nhiều state.

## Các thành phần chính của NgRx là gì?
Store: Lưu trữ trạng thái của toàn bộ ứng dụng ở dạng một đối tượng duy nhất.
Actions: Định nghĩa các sự kiện trong ứng dụng, giúp biểu diễn các thay đổi có thể xảy ra trong state.
Reducers: Chịu trách nhiệm xử lý các thay đổi của state dựa trên actions.
Selectors: Cung cấp các hàm để trích xuất dữ liệu từ store theo cách tối ưu và dễ dàng.
Effects: Cho phép xử lý các tác vụ không đồng bộ như API requests ngoài store và trả về kết quả về store.

## Khi dùng ngrx cần lưu ý
1. Đăng ký Store Module và Effects Module trong App Module

    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),

## structure khi áp dụng ngrx
src/app/
│
├── store/                    # Thư mục chính chứa các phần liên quan đến NgRx
│   ├── auth/                 # Slice state cho Auth
│   │   ├── auth.actions.ts   # Định nghĩa các actions cho Auth
│   │   ├── auth.reducer.ts   # Reducer cho Auth
│   │   ├── auth.effects.ts   # Effects cho các tác vụ không đồng bộ liên quan đến Auth
│   │   ├── auth.selectors.ts # Selectors cho Auth
│   │   └── auth.models.ts    # Định nghĩa model dữ liệu liên quan đến Auth
│   │
│   ├── cart/                 # Slice state cho Cart
│   │   ├── cart.actions.ts
│   │   ├── cart.reducer.ts
│   │   ├── cart.effects.ts
│   │   ├── cart.selectors.ts
│   │   └── cart.models.ts
│   │
│   ├── product/              # Slice state cho Product
│   │   ├── product.actions.ts
│   │   ├── product.reducer.ts
│   │   ├── product.effects.ts
│   │   ├── product.selectors.ts
│   │   └── product.models.ts
│   │
│   └── app.state.ts          # Tệp định nghĩa cấu trúc của toàn bộ app state
│
├── services/                 # Các service gọi API hoặc xử lý logic ngoài NgRx
│   └── auth.service.ts       # AuthService
│
├── components/               # Các components trong ứng dụng
│   └── login/                # Ví dụ: Component cho login
│       └── login.component.ts
│
└── app.module.ts             # Đăng ký các reducer và effects trong AppModule
