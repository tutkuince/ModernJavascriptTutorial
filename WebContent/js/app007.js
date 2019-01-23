let value;

const name = "Tutku";
const surname = "Ince";

const langs = "Java, Python, C++";

// value = name + surname;
// value = name + " " + surname;

// value = "MR ";
// value += "Tuku Ince";

// value = name.length;

//
//  concat
//
// value = name.concat(" ", surname);  // name + " " + surname

//
//  toLowerCase toUpperCase
//
// value = name.toLowerCase();
// value = name.toUpperCase();

// value = name[0];    // T
// value = name[2];    // t
// value = name[4];    // u
// value = name[name.length - 1];


//
//  Index of
//
// value = name.indexOf("T");  // 0
// value = name.indexOf("p");  // -1

//
//  char at
//
// value = name.charAt(0); // T
// value = name.charAt(name.length - 1); // u

//
//  split
//
//value = langs.split(",");

//
//  replace
//
//value = langs.replace("Python", "Javascript");  // Java, Javascript, C++

//
//  includes
//
value = langs.includes("Java"); // true

console.log(value);