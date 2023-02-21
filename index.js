class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender)
    }
}

class Person extends Human {
  constructor() {
    super();
    this.age = 12;
    this.type = "black";
  }
  printAge() {
    console.log(this.age);
  }
  printType() {
    console.log(this.type);
  }
}
const person = new Person();
person.printGender();
person.printAge();
person.printType();
