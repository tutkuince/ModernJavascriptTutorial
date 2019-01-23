const langs = new Array("Java", "Python", "Javascript", "C++");

langs.forEach(function (lang, index) {
    console.log(`index: ${index} value: ${lang}`);
})

const users = [
    {name: "Tutku", age: 25},
    {name: "Emin", age: 29},
    {name: "Ugur", age: 21}
];

const names = users.map((user) => {return user.name;});
console.log(names);

const ages = users.map((user) => {return user.age;});
console.log(ages);

for(let key in users){
    console.log(key, users[key]);
}