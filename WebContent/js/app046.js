const person = {
    age: 25,

    // tellAge: function () {
    //     // this - Person
    //     console.log(this.age);
    // }.bind(this) // this - Window

    tellAge: () => {    // same with top
        console.log(this);
        console.log(this.age);
    }

    // this - Window

}

person.tellAge();