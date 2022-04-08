// Parent class Person with two methods greeting() and farewell//
class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    greeting() {
        console.log(`Hi! I'm ${this.name.first}`);
    };

    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now`);
    };
}

 let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
// Leia has left the building. Bye for now

//child class teacher: will inherit the object properties and methods of the parent class Person//
class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests);
        // subject and grade are specific to Teacher
        this._subject = subject;
        this.grade = grade;
    }

    get subject() {
        return this._subject;
    }

    set subject(newSubject) {
        this._subject = newSubject;
    }
}
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5)
;
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
snape.age; // 58
snape.subject; // Dark arts
  // Check the default value
console.log(snape.subject) // Returns "Dark arts"

// Change the value
snape.subject = "Balloon animals" // Sets _subject to "Balloon animals"

//Check it again and see if it matches the new value
console.log(snape.subject) // Returns "Balloon animals"