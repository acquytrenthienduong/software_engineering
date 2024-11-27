## Kubernetes là gì?
also known as K8s, is an open source system for automating deployment, scaling, and management of containerized applications.

## Architecture
Các thành phần trong 1 cụm k8s

1. Control plane
    - cloud-control-manager (optional) nếu dùng bản cloud mới có
    - kube-api-server (quy chuẩn chung để giao tiếp từ ngoài vào bên trong cụm)
    - etcd (cơ sở dữ liệu phân tán, lưu trữ tất cả cấu hình của cụm k8s, trạng thái của pod, node)
    - scheduler (chịu trách nhiệm phân phối pod đến các node trong cluster, xem xét tài nguyên như CPU, RAM, các chính sách) - hiểu đơn giản là nó chạy 1 thuật toán để xác định xem node nào phù hợp để đưa pod vào
    - controler-manager (chịu trách nhiệm giám sát trạng thái của cluster và autohealing nếu cần)

2. Worker
    - kubelet (thành phần nhận yêu cầu từ api-server để thực thi các pod trên node)
    - kube-proxy (thành phần network chạy trên mỗi node để các pod giao tiếp với nhau và cũng như giao tiếp ra bên ngoài)
    - pod: đơn vị nhỏ nhất trong k8s

## Bắt đầu cài đặt bằng kubeadm