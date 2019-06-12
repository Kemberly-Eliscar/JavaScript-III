/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit Binding
* 3. new Binding
* 4. Window Binding
*
* write out a code example of each explanation above
*/

// Principle 1

 function sayName(name) {
    console.log(this);
    return name;
}
sayName("Kemberly");

// Principle 2

const myObj = {
    gretting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Kemberly');

// Principle 3

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

// Principle 4

const myObject = {
    name: 'Kemberly Eliscar',
    city: 'New York',
    favoriteFood: 'Steak',
}
const thingsYouEnjoy = ['Reading', 'Yoga', 'Learning']

function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`

}
tellUsAboutYourself.applt(yourObject, thingsYouEnjoy)