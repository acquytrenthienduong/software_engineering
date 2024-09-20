// Bad example about ISP
class Animal {
    eat() {
        console.log("Eating");
    }
    
    fly() {
        console.log("Flying");
    }
    
    swim() {
        console.log("Swimming");
    }
}

class Dog extends Animal {
    // Dog không cần fly() và swim()
}

class Fish extends Animal {
    // Fish không cần eat() và fly()
}


// Good example about ISP
class Eater {
    eat() {
        console.log("Eating");
    }
}

class Flyer {
    fly() {
        console.log("Flying");
    }
}

class Swimmer {
    swim() {
        console.log("Swimming");
    }
}

class Dog extends Eater {
    // Dog chỉ cần eat()
}

class Bird extends Eater {
    constructor() {
        super();
        this.flyer = new Flyer();
    }
    
    fly() {
        this.flyer.fly();
    }
}

class Fish extends Eater {
    constructor() {
        super();
        this.swimmer = new Swimmer();
    }
    
    swim() {
        this.swimmer.swim();
    }
}

// Sử dụng
const dog = new Dog();
dog.eat(); // "Eating"

const bird = new Bird();
bird.eat(); // "Eating"
bird.fly(); // "Flying"

const fish = new Fish();
fish.eat(); // "Eating"
fish.swim(); // "Swimming"
