// Bad example about SRP
class DatabaseManager {
    constructor(parameters) {}

    connectDatabase() {
        // Kết nối đến cơ sở dữ liệu
    }

    fetchData() {
        // Lấy dữ liệu từ cơ sở dữ liệu
    }

    writeData() {
        // Ghi dữ liệu vào cơ sở dữ liệu
    }

    logError(error) {
        // Ghi lại lỗi
    }

    sendEmailNotification(email, message) {
        // Gửi thông báo qua email
    }
}

// Good example about SRP
class DatabaseConnector {
    connect() {
        // Kết nối đến cơ sở dữ liệu
    }
}

class DataFetcher {
    fetch() {
        // Lấy dữ liệu từ cơ sở dữ liệu
    }
}

class DataWriter {
    write(data) {
        // Ghi dữ liệu vào cơ sở dữ liệu
    }
}

class ErrorLogger {
    logError(error) {
        // Ghi lại lỗi
    }
}

class EmailNotifier {
    sendEmailNotification(email, message) {
        // Gửi thông báo qua email
    }
}
