
// Create a class called Car
class Car {
  // Properties
  make: string;
  model: string;
  year: number;

  // Constructor
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Method to display information about the car
  displayInfo(): void {
    console.log(`Car Information:
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}`);
  }
}

// Create an instance of the Car class
const myCar = new Car('ferrari', 'Vishal', 2020);

// Call the displayInfo method to log car information
myCar.displayInfo();
