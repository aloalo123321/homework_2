//პირველი

class Car {
  #make;
  #model;
  #year;

  constructor(make, model, year) {
    this.#make = make;
    this.#model = model;
    this.#year = year;
  }

  getDetails() {
    console.log(`Car Details: ${this.#year} ${this.#make} ${this.#model}`);
  }
}

class ElectricCar extends Car {
  #batteryLevel;

  constructor(make, model, year, batteryLevel) {
    super(make, model, year);
    this.#batteryLevel = batteryLevel;
  }

  getDetails() {
    super.getDetails();
    console.log(`Battery Level: ${this.#batteryLevel}%`);
  }
}

const myElectricCar = new ElectricCar("Tesla", "Model 3", 2024, 80);

myElectricCar.getDetails();

//მეორე

class Library {
  #books = [];

  addBook(author, book, year) {
    const newBook = { author, book, year };
    this.#books.push(newBook);
    console.log(`Book added: ${book}`);
  }

  removeBook(bookTitle) {
    const index = this.#books.findIndex((book) => book.book === bookTitle);
    if (index !== -1) {
      this.#books.splice(index, 1);
      console.log(`Book removed: ${bookTitle}`);
    } else {
      console.log(`Book not found: ${bookTitle}`);
    }
  }

  listBooks() {
    console.log("Listing all books:");
    this.#books.forEach((book) => {
      console.log(
        `Author: ${book.author}, Book: ${book.book}, Year: ${book.year}`
      );
    });
  }
}

const myLibrary = new Library();

myLibrary.addBook("George Orwell", "Nineteen Eighty-Four", 1948);
myLibrary.addBook(
  "J.K. Rowling",
  "Harry Potter and the Philosopher's Stone",
  1997
);

myLibrary.listBooks();

myLibrary.removeBook("Harry Potter and the Philosopher's Stone");

myLibrary.listBooks();

//მესამე

class Employee {
  #hoursWorked;
  #hourlyRate;

  constructor(hoursWorked, hourlyRate) {
    this.#hoursWorked = hoursWorked;
    this.#hourlyRate = hourlyRate;
  }

  calculateSalary() {
    const salary = this.#hoursWorked * this.#hourlyRate;
    console.log(`Salary: $${salary}`);
    return salary;
  }

  get hoursWorked() {
    return this.#hoursWorked;
  }

  get hourlyRate() {
    return this.#hourlyRate;
  }
}

const employee1 = new Employee(40, 25);

employee1.calculateSalary();

//მეოთხე

class ShoppingCart {
  #items = [];

  addItem(name, price, quantity) {
    const item = { name, price, quantity };
    this.#items.push(item);
    console.log(`Item added: ${name}, Quantity: ${quantity}, Price: $${price}`);
  }

  deleteItem(name) {
    const index = this.#items.findIndex((item) => item.name === name);
    if (index !== -1) {
      this.#items.splice(index, 1);
      console.log(`Item deleted: ${name}`);
    } else {
      console.log(`Item not found: ${name}`);
    }
  }

  updateItem(name, newQuantity, newPrice) {
    const item = this.#items.find((item) => item.name === name);
    if (item) {
      item.quantity = newQuantity !== undefined ? newQuantity : item.quantity;
      item.price = newPrice !== undefined ? newPrice : item.price;
      console.log(
        `Item updated: ${name}, Quantity: ${item.quantity}, Price: $${item.price}`
      );
    } else {
      console.log(`Item not found: ${name}`);
    }
  }

  calculateTotal() {
    const total = this.#items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    console.log(`Total cost: $${total.toFixed(2)}`);
    return total;
  }

  listItems() {
    console.log("Items in cart:");
    this.#items.forEach((item) => {
      console.log(
        `Name: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price}`
      );
    });
  }
}

const cart = new ShoppingCart();

cart.addItem("Apple", 1.2, 5);
cart.addItem("Banana", 0.5, 10);

cart.listItems();

cart.updateItem("Apple", 6, 1.3);

cart.deleteItem("Banana");

cart.listItems();

cart.calculateTotal();

// მეხუთე

class CarFactory {
  #cars = [];

  static getRandomYear() {
    return Math.floor(Math.random() * (2024 - 2010 + 1)) + 2010;
  }

  addCar(model, price) {
    const year = CarFactory.getRandomYear();
    const newCar = { year, model, price };
    this.#cars.push(newCar);
    console.log(`Car added: ${model}, Year: ${year}, Price: $${price}`);
  }

  deleteCar(model) {
    const index = this.#cars.findIndex((car) => car.model === model);
    if (index !== -1) {
      this.#cars.splice(index, 1);
      console.log(`Car deleted: ${model}`);
    } else {
      console.log(`Car not found: ${model}`);
    }
  }

  updateCar(model, newModel, newPrice) {
    const car = this.#cars.find((car) => car.model === model);
    if (car) {
      car.model = newModel || car.model;
      car.price = newPrice !== undefined ? newPrice : car.price;
      console.log(
        `Car updated: ${car.model}, Year: ${car.year}, Price: $${car.price}`
      );
    } else {
      console.log(`Car not found: ${model}`);
    }
  }

  getAllCars() {
    console.log("All cars in the factory:");
    return this.#cars;
  }
}

const factory = new CarFactory();

factory.addCar("Ferrari", 350000);
factory.addCar("Lamborghini", 400000);

console.log(factory.getAllCars());

factory.updateCar("Ferrari", "Ferrari 488", 370000);

factory.deleteCar("Lamborghini");

console.log(factory.getAllCars());
