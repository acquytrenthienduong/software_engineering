// Bad example about DIP
class LightBulb {
    turnOn() {
        console.log("Light bulb is on");
    }
    
    turnOff() {
        console.log("Light bulb is off");
    }
}

class Switch {
    constructor(lightBulb) {
        this.lightBulb = lightBulb;
    }
    
    toggle() {
        // Giả sử trạng thái của bóng đèn được lưu trữ
        this.lightBulb.turnOn(); // Phụ thuộc vào LightBulb
    }
}

// Sử dụng
const bulb = new LightBulb();
const switch1 = new Switch(bulb);
switch1.toggle();


// Good example about DIP
class Light {
    turnOn() {
        throw new Error("This method should be overridden!");
    }
    
    turnOff() {
        throw new Error("This method should be overridden!");
    }
}

class LightBulb extends Light {
    turnOn() {
        console.log("Light bulb is on");
    }
    
    turnOff() {
        console.log("Light bulb is off");
    }
}

class LED extends Light {
    turnOn() {
        console.log("LED is on");
    }
    
    turnOff() {
        console.log("LED is off");
    }
}

class Switch {
    constructor(light) {
        this.light = light; // Phụ thuộc vào abstraction
    }
    
    toggle() {
        this.light.turnOn(); // Không phụ thuộc vào chi tiết
    }
}

// Sử dụng
const goodBulb = new LightBulb();
const led = new LED();

const goodSwitch1 = new Switch(goodBulb);
goodSwitch1.toggle(); // "Light bulb is on"

const goodSwitch2 = new Switch(led);
goodSwitch2.toggle(); // "LED is on"

// kết luận: module cấp cao chỉ được phụ thuộc vào abtract/interface của module cấp 
// việc phụ thuộc vào 1 module/class đã implement chi tiết là vi phạm