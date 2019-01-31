// Static Methods

class MathClass {

    static cube(x) {    // not in MathClass Prototype
        console.log(x * x * x);
    }
}
// const math = new MathClass();
// math.cube(3);    // Uncaught TypeError: math.cube is not a function
// console.log(math);

MathClass.cube(3);


// Object.create(); Static
// Math.sqrt(3);    Static