// Bad example about OCP
class Shape {
    constructor(type) {
        this.type = type;
    }

    area() {
        if (this.type === 'circle') {
            // Tính diện tích hình tròn
        } else if (this.type === 'rectangle') {
            // Tính diện tích hình chữ nhật
        }
    }
}


// Good example about OCP
class Shape {
    area() {
        throw new Error("This method should be overridden!");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius; // Tính diện tích hình tròn
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height; // Tính diện tích hình chữ nhật
    }
}

// Sử dụng
const shapes = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(shape => {
    console.log(shape.area());
});
