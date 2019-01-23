let value;

const programmer = {
    name: "Tutku",
    surname: "Ince",
    email: "incetutku@gmail.com",
    langs: ["Java", "Javascript", "Python"],

    address: {
        city: "Izmir",
        street: "Irmak"
    },
    work: function () {
        console.log("Programmer is working");
    }
}

// value = programmer;

// value = programmer.email;
// value = programmer["email"];

// value = programmer.langs;

// value = programmer.address.city;

// programmer.work();

const programmers = [
    {
        name: "Tutku Ince",
        email: "incetutku@gmail.com"
    },
    {
        name: "Emin Koklu",
        email: "kokluemin@gmail.com"
    }
];

value = programmers[0];

console.log(value);