## Angular là gì?
Angular là một framework front-end mạnh mẽ của Google, được viết bằng TypeScript. Angular cung cấp một kiến trúc component-based, đi kèm với các công cụ như Dependency Injection, Routing và two-way data binding

Ưu điểm so với react vue là đây là 1 framework hoàn chỉnh đã bao gồm các thành phần cần thiết như Routing, DateFormat mà không cần phải import thêm từ ngoài

## Two-way data binding là gì và nó hoạt động như thế nào trong Angular?
Là cơ chế cập nhật dữ liệu từ view -> biến và ngược lại (khi thay đổi ở view thì biến cũng tự cập nhật và khi thay đổi biến thì view cũng cập nhật)

## Service, DI trong Angular
Service là 1 class cung cấp logic nghiệp vụ, các logic dùng chung, ví dụ như xử lí api
DI là 1 kĩ thuật lập trình mà trong đó bạn inject-cung cấp service vào nơi cần dùng giúp tăng khả năng tái sử dụng

## Life cycle

ngOnChanges (khi có thay đổi @Input)

ngOnInit (chỉ gọi một lần khi khởi tạo)

ngDoCheck (gọi mỗi lần change detection chạy)

ngAfterContentInit (gọi một lần khi nội dung ng-content được nhúng)

ngAfterContentChecked (gọi mỗi lần change detection chạy ở nội dung ng-content)

ngAfterViewInit (gọi một lần khi view được khởi tạo)

ngAfterViewChecked (gọi mỗi lần change detection chạy ở view)

ngOnDestroy (gọi trước khi component bị hủy)

## Router trong Angular hoạt động như thế nào, và bạn làm cách nào để định tuyến động (lazy loading)?
Router trong Angular giúp điều hướng giữa các view của ứng dụng mà không cần tải lại trang. Để định tuyến động (lazy loading), chúng ta sử dụng loadChildren trong file app-routing.module.ts, giúp chỉ tải các module khi thực sự cần thiết, cải thiện hiệu suất của ứng dụng

## Sự khác biệt giữa constructor và ngOnInit trong Angular là gì?
constructor được gọi khi Angular khởi tạo class, thường dùng để khai báo dependency injection, không phải cho việc khởi tạo dữ liệu. ngOnInit là một lifecycle hook, được gọi sau khi Angular khởi tạo tất cả các property, thích hợp cho việc thiết lập dữ liệu cần thiết cho component. Sử dụng ngOnInit sẽ đảm bảo mọi dependency đã sẵn sàng.

## Nguyên lý hoạt động của Change Detection trong Angular là gì và các chiến lược tối ưu hóa Change Detection?
Change Detection là quá trình Angular kiểm tra và cập nhật view khi có sự thay đổi dữ liệu. Mặc định, Angular sử dụng chiến lược Change Detection Default, theo dõi mọi thay đổi trong ứng dụng. Tuy nhiên, để tối ưu hóa hiệu suất, ta có thể sử dụng chiến lược OnPush trong @Component decorator, giúp component chỉ kiểm tra thay đổi khi có sự khác biệt trong input hoặc khi có event được emit.

## Quản lí form trong angular
Reactive Forms và Template-Driven Forms

## Bạn có thể giải thích về async pipe và lợi ích của nó?
async pipe là một pipe đặc biệt giúp tự động subscribe vào Observable hoặc Promise và trả về giá trị mới nhất mà không cần thủ công unsubscribe, giúp ngăn chặn memory leaks. async pipe rất hữu ích khi bạn làm việc với dữ liệu bất đồng bộ trong template, chỉ cần dùng {{ someObservable$ | async }}.

##  Hãy giải thích về ViewChild và ContentChild trong Angular và khi nào nên sử dụng chúng?
Trả lời: @ViewChild và @ContentChild đều là các decorator giúp truy cập vào các phần tử hoặc component con. @ViewChild được dùng để truy cập đến phần tử DOM hoặc component con bên trong component template, trong khi @ContentChild dùng để truy cập phần tử hoặc component được nhúng từ bên ngoài thông qua ng-content. Cả hai đều hữu ích khi cần tương tác hoặc thao tác với các thành phần con.

## Module là gì trong Angular, vai trò của AppModule và SharedModule là gì?
Module là một tập hợp của các component, directive, pipe và service có liên quan trong Angular. AppModule là module gốc (root module), chứa các thành phần cốt lõi của ứng dụng. SharedModule thường chứa các thành phần dùng chung (như pipe, directive, hoặc component) và thường được import vào các module khác để tái sử dụng các thành phần này.

## Hãy giải thích về Route Guard và các loại guard phổ biến trong Angular.
Route Guard giúp bảo vệ và kiểm soát quyền truy cập vào các route trong Angular. Các loại guard phổ biến gồm có:
CanActivate: Ngăn chặn hoặc cho phép truy cập vào một route.
CanDeactivate: Kiểm tra trước khi rời khỏi route.
Resolve: Lấy dữ liệu trước khi truy cập route.
CanLoad: Kiểm tra trước khi tải một module động (lazy-loaded module).
Sử dụng Route Guard giúp bảo mật và kiểm soát luồng ứng dụng tốt hơn.

## Lazy Loading và Preloading trong Angular khác nhau như thế nào?
Lazy Loading là phương pháp chỉ tải các module khi người dùng truy cập vào, giúp giảm tải ứng dụng ban đầu. Preloading là một kỹ thuật kết hợp với Lazy Loading, cho phép tải trước các module động sau khi ứng dụng chính đã tải xong, giúp cải thiện thời gian phản hồi khi người dùng truy cập vào route. Angular cung cấp PreloadAllModules để preload tất cả các module động.

## Hãy giải thích về NgZone trong Angular và khi nào cần sử dụng nó?
Trả lời: NgZone là một service giúp Angular quản lý và theo dõi các sự kiện bất đồng bộ để cập nhật giao diện người dùng. Trong một số trường hợp, khi bạn thực hiện các tác vụ tốn kém hiệu suất hoặc không liên quan trực tiếp đến giao diện (như thao tác Web Worker), NgZone có thể giúp tách tác vụ khỏi Angular Zone để ngăn chặn Change Detection không cần thiết.

## Bạn có thể giải thích về Decorator trong Angular và một số loại Decorator quan trọng không?
@Component: Định nghĩa một component.

@Directive: Định nghĩa một directive.

@Pipe: Định nghĩa một pipe.

@Injectable: Đánh dấu một class có thể inject bằng DI.

@Input và @Output: Được sử dụng để truyền dữ liệu giữa các component.

## Bạn hãy giải thích về Router Guard trong Angular, các loại guard khác nhau và cách bạn đã sử dụng chúng trong các dự án thực tế.

Guard được dùng để kiểm tra điều kiện trước khi kích hoạt (hoặc rời khỏi) một route, đảm bảo rằng chỉ khi thỏa mãn các điều kiện thì route mới được phép truy cập hoặc đóng lại.

CanActivate: Kiểm tra điều kiện trước khi cho phép vào route, ví dụ như kiểm tra đăng nhập.
CanDeactivate: Kiểm tra trước khi rời khỏi route, thường để xác nhận có lưu lại thay đổi hay không.
CanActivateChild: Tương tự CanActivate, nhưng áp dụng cho route con.
Resolve: Tải trước dữ liệu cần thiết trước khi route kích hoạt.
CanLoad: Kiểm tra trước khi tải lazy-loaded module, ví dụ để ngăn người dùng không đủ quyền truy cập module.

## Hãy giải thích các phương pháp tối ưu hiệu suất cho một ứng dụng Angular lớn. Bạn đã sử dụng những phương pháp nào trong các dự án trước đây?
onPush: giảm change detection khi ko cần thiết
layzLoading module để chỉ load khi cần
ngZone có thể thực hiện các tác vụ nặng và không ảnh huơng đến UI

Sử dụng OnPush Change Detection và BehaviorSubject caching là hai phương pháp rất hiệu quả mà bạn đã thực hiện.
Lazy Loading và Preloading giúp giảm tải bundle ban đầu và tăng tốc độ phản hồi của ứng dụng.
AOT và Tree Shaking tối ưu hóa bundle kích thước.
Web Worker xử lý các tác vụ nặng mà không ảnh hưởng đến hiệu suất UI.
trackBy trong ngFor và throttling, debouncing events giúp giảm số lần cập nhật không cần thiết.

## Hãy giải thích sự khác biệt giữa ngOnInit và constructor trong Angular. Trong dự án thực tế bạn thường đặt logic vào đâu, và tại sao?
Đúng về constructor: constructor được gọi ngay khi Angular khởi tạo instance của class, và đây là nơi thích hợp để inject các dependency như service hoặc utility.

Đúng về ngOnInit: ngOnInit là lifecycle hook được gọi sau khi Angular đã khởi tạo tất cả @Input properties, giúp đảm bảo các giá trị đầu vào đã sẵn sàng trước khi thực hiện bất kỳ logic khởi tạo nào.

## Clone interface nhưng làm cho các trường thành optional
sử dụng Partial

interface User {
  id: number;
  name: string;
  email: string;
}

type OptionalUser = Partial<User>;

## map, switchMap, mergeMap, concatMap