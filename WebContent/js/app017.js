// Window Object
let value;

// value = document;
// value = document.all;
// value = document.all.length;
// value = document.all[1];    //  <head>...</head>
// value = document.all[document.all.length - 1];

// const elements = document.all;   //HTMLCollection
// for(let i = 0; i < elements.length; i++){
//     console.log(elements[i]);
// }

// elements.forEach is not a function
// elements.forEach(e => console.log(e));   // ERROR

// const collections = Array.from(document.all);
// collections.forEach(e => console.log(e));   // NO ERROR
// If we want to iterate Html Collection we should convert it to Array

// value = document.body;
// value = document.head;
// value = document.location;
// value = document.location.hostname;
// value = document.location.port;

// value = document.URL;

// value = document.characterSet;


//
//  Scripts
//
// value = document.scripts;
// value = document.scripts.length;
// value = document.scripts.length[0];


//
//  Links
//
// value = document.links;
// value = document.links[0];
// value = document.links[document.links.length - 1].getAttribute("href");
// value = document.links[0].className;

//
//  Forms
//
// value = document.forms;
// value = document.forms.length;
// value = document.forms[0];
// value = document.forms["form"];
// value = document.forms[0];
// value = document.forms[0].id;   // same with getAttribute("id")
// value = document.forms[0].getAttribute("id");   // same with .id

value = document.forms[0].method;

console.log(value);