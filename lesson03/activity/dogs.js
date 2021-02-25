// Create the Dog class constructor
class Dog {
  constructor(name, age, breed, color) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.energyLevel = 0;
    this.barkLevel = 10;
  }

  //pat method
  pat() {
    //increment energyLevel
    this.energyLevel++;
    //decrement bark
    this.barkLevel--;
    //log dog info
    console.log(`this dog's name is ${this.name}, age is ${this.age}, energy is ${this.energyLevel}, and current barkiness is ${this.barkLevel}.`);
  }


}
// Create Marty
const marty = new Dog('Marty', 4, 'mutt', 'brown');

// Invoke Pat dog 5 times
marty.pat();
marty.pat();
marty.pat();
marty.pat();
marty.pat();
