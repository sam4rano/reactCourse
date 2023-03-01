class Human {
    gender = 'male';
    printGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human {
    age = 12;
    type = "black";
  printAge = ()=> {
    console.log(this.age);
  }
  printType = () => {
    console.log(this.type);
  }
}

const person = new Person();
person.printGender();
person.printAge();
person.printType();
