// Variable to set kelvin at 293k
const kelvin = 300;
//variable to set celsius at 273 degrees less than kelvin
const celsius = kelvin - 273;
//Faherenheit conversion varible
let fahrenheit = celsius * (9/5) + 32;
// rounds decimal 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// converting celsius to newton
let newton = celsius * (33/100);
//setting floor of newton to round out decimal
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`);