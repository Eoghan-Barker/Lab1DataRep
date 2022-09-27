class BMI {
  // Constructor to initialize data
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }

  // Method to calculate the bmi
  calculateBMI() {
    let bmi = this.weight / (this.height ** 2);
    return bmi;
  }
}

// Create instance of BMI
let p1 = new BMI(2, 100);

// Call method and print to console
console.log(p1.calculateBMI());


