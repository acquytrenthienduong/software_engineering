// Bad example about LSP
class Bird {
    fly() {
        console.log("Flying");
    }
}

class Sparrow extends Bird {
    fly() {
        console.log("Sparrow flying");
    }
}

class Ostrich extends Bird {
    fly() {
        throw new Error("Ostriches can't fly");
    }
}

// Sử dụng
function letBirdFly(bird) {
    bird.fly();
}

letBirdFly(new Sparrow()); // Hoạt động tốt
letBirdFly(new Ostrich()); // Gây lỗi

// Good example about LSP
class Bird {
    makeSound() {
        throw new Error("This method should be overridden!");
    }
}

class FlyingBird extends Bird {
    fly() {
        console.log("Flying");
    }
}

class Sparrow extends FlyingBird {
    makeSound() {
        console.log("Chirp");
    }
}

class Ostrich extends Bird {
    makeSound() {
        console.log("Boom");
    }
}

// Sử dụng
function letBirdMakeSound(bird) {
    bird.makeSound();
}

letBirdMakeSound(new Sparrow()); // "Chirp"
letBirdMakeSound(new Ostrich()); // "Boom"

