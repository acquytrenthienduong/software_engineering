## Application Architecture Patterns

## MVC (Model-View-Controller):
- MVC rất tốt trong việc phân chia model và view. Chắc chắn sẽ dễ dàng test model vì nó không liên quan đến view và view không có gì nhiều để test (unit test)

- Mặt hạn chế của Controller
    - Khả năng kiểm thử (test) - Controller bị ràng buộc với platform nên sẽ khó để thực hiện unit test.
    - Tính linh hoạt - Controller liên quan khá chặt chẽ với các view. Nếu chúng ta thay đổi view chúng ta sẽ phải thay đổi lại ở controller.
    - Khả năng duy trì - Qua thời gian, controller sẽ ngày càng phình to ra do việc thêm code dẫn đến việc khó kiểm soát.
    
## MVP (Model-View-Presenter):
- Mô hình MVP cũng gần giống với mô hình MVC. Nó được kế thừa từ mô hình MVC, trong đó Controller được thay thế bới Presenter. Mô hình này chia ứng dụng thành 3 phần chính: Model, View và Presenter

- Presenter giữ nhiệm vụ điều phối giữa Model và View, nhận yêu cầu từ View, cập nhật Model, và phản hồi lại View với dữ liệu mới.

## MVVM (Model-View-ViewModel):

- The primary distinction between MVVM and MVP lies in the direction of interactions between components. In MVVM, the view model does not directly reference the view; instead, the view binds to properties and commands exposed by the view model. Conversely, in MVP, the view holds a reference to the presenter, and the presenter interacts with the view through an interface.

In MVVM, changes in the view model automatically update the view through data binding mechanisms, while in MVP, the presenter updates the view by invoking methods defined in the view interface.

## Clean Architecture:
