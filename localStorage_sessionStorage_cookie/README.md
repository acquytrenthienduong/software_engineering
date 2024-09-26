## localStorage
localStorage lưu trữ dữ liệu trên máy người dùng với thời gian tồn tại vĩnh viễn (hoặc cho đến khi người dùng tự xóa hoặc bị chương trình xóa).

Khi đóng cửa sổ hoặc đóng trình duyệt: Không bị mất. Dữ liệu trong localStorage vẫn tồn tại ngay cả khi bạn đóng tất cả các tab hoặc đóng hoàn toàn trình duyệt. Khi bạn mở lại trình duyệt và truy cập trang web, dữ liệu trong localStorage vẫn còn.
## sessionStorage
sessionStorage lưu trữ dữ liệu tạm thời chỉ cho phiên làm việc hiện tại của cửa sổ hoặc tab trình duyệt. Mỗi cửa sổ/tab có sessionStorage riêng biệt và không chia sẻ dữ liệu giữa các tab khác nhau.

Khi đóng cửa sổ hoặc tab trình duyệt: Bị mất. Dữ liệu trong sessionStorage sẽ bị xóa khi bạn đóng cửa sổ/tab trình duyệt.

## Cookie
Cookie là một loại dữ liệu lưu trữ nhỏ trên máy người dùng, thường được sử dụng để lưu thông tin người dùng và phiên làm việc. Cookie có các thuộc tính để xác định thời gian tồn tại của chúng.

Nếu cookie được cài đặt với thời gian hết hạn cụ thể (Expires hoặc Max-Age), nó không bị mất khi đóng cửa sổ hoặc trình duyệt. Cookie sẽ chỉ bị xóa sau khi thời gian hết hạn này trôi qua hoặc khi người dùng tự xóa cookie.

Nếu cookie không có thời gian hết hạn (hay còn gọi là session cookie), nó sẽ bị mất khi bạn đóng trình duyệt.
