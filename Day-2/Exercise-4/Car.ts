class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayCarInfo(): void {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

// Example usage
const myCar = new Car("Toyota", "Camry", 2023);
myCar.displayCarInfo(); // Output: Toyota Camry (2023)
