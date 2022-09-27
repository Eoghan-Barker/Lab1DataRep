class Vehicle {
  //initialize object
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // print info about car
  Information() {
    console.log(`Year: ${this.year}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
  }
}

// create a new Vehicle object
v1 = new Vehicle("Toyota", "Corolla", 2006);
// call method to print to console
v1.Information();

// create child class
class Car extends Vehicle {
  // constructor that invokes the constructor of the parent class
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  // print infor about car
  numberOfDoors() {
    // invoke method from parent class
    super.Information();
    console.log(`Doors: ${this.doors}`);
  }
}

// create instance of Car
v2 = new Car("Ford", "F-150", 2020, 4);
v2.numberOfDoors();
