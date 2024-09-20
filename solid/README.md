## SOLID Principles

S - Single Responsibility Principle (known as SRP)
O - Open/Closed Principle
L - Liskov’s Substitution Principle
I - Interface Segregation Principle
D - Dependency Inversion Principle

## S — Single Responsibility Principle (known as SRP)
1 class chỉ nên chịu trách nhiệm cho 1 nhiệm vụ duy nhất

Ví dụ: 
Xem file s.js

## O — Open/Closed Principle
"classes should be open for extension but closed for modification"
class nên open để mở rộng nhưng close cho việc modify

Ví dụ:
Xem file o.js

## L — Liskov’s Substitution Principle
"parent classes should be easily substituted with their child classes without blowing up the application"

Nguyên tắc Liskov yêu cầu rằng nếu một lớp con kế thừa từ lớp cha, thì nó phải có thể được sử dụng thay cho lớp cha mà không làm hỏng chương trình. Điều này có nghĩa là các phương thức trong lớp con phải hoạt động như mong đợi mà không gây ra lỗi.

Ví dụ:
Xem file l.js

## I — Interface Segregation Principle
“many client specific interfaces are better than one general interface”
Nguyên tắc Phân Tách Giao Diện (Interface Segregation Principle - ISP) trong lập trình hướng đối tượng khuyến khích việc tạo ra các giao diện nhỏ hơn, chuyên biệt hơn thay vì các giao diện lớn, phức tạp. Điều này giúp các lớp chỉ cần triển khai những phương thức mà chúng thực sự cần, tránh việc phải thực hiện các phương thức không cần thiết.

Ví dụ:
Xem file i.js

## D — Dependency Inversion Principle
Nguyên tắc Đảo Ngược Phụ Thuộc giúp giảm sự phụ thuộc giữa các thành phần trong hệ thống, làm cho mã dễ bảo trì, mở rộng và kiểm thử hơn. Bằng cách sử dụng các abstraction, chúng ta có thể thay đổi các chi tiết mà không ảnh hưởng đến các phần khác của hệ thống.

Ví dụ:
Xem file d.js