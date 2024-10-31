// Cài đặt thư viện jsonwebtoken
// npm install jsonwebtoken

const jwt = require('jsonwebtoken');

// Khóa bí mật để mã hóa (cần bảo mật khóa này)
const secretKey = 'your_secret_key';

// Tạo một hàm để sinh ra JWT
function generateToken(user) {
  // Thông tin sẽ lưu trong payload của JWT
  const payload = {
    userId: user.id,
    username: user.username,
    role: user.role
  };

  // Tùy chọn bổ sung (ví dụ: thời gian hết hạn)
  const options = {
    expiresIn: '1h' // Token sẽ hết hạn sau 1 giờ
  };

  // Sinh ra token
  const token = jwt.sign(payload, secretKey, options);
  return token;
}

// Giả sử user là một object chứa thông tin người dùng
const user = {
  id: 1,
  username: 'user1',
  role: 'admin'
};

// Tạo token cho người dùng
const token = generateToken(user);
console.log(token);
