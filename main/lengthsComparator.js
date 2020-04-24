const lengthsComparator = {
    
// function to get distance in inch equivalent to feet
Feet: (feet) => {
    return feet*12;
},
// function to get distance in inch
Inch: (inch) => {
    return inch;
},
// function to get distance in inch equivalent to yard
Yard: (yard) => {
    return yard*36;
},
// function to get distance in inch equivalent to centimeter
Centimeter: (centimeter) => {
    return centimeter*0.4;
},
// function for addition of two entities
Addition: (parameter1,parameter2) => {
    return parameter1+parameter2;
},
// function to get weight in liter equivalent to liter
Gallon: (gallon) => {
    return gallon*3.78;
},
// function to get weight in liter
Liter: (liter) => {
    return liter;
},
// function to get weight in liter equivalent to liter
Milliliter: (milliliter) => {
    return milliliter/1000;
},
// function to get weight in kg
Kg: (kg) => {
    return kg;
},
// function to get weight in kg equivalent to grams
Grams: (grams) => {
    return grams/1000;
},
// function to get weight in kg equivalent to ton
Ton: (ton) => {
    return ton*1000;
},
// function to get tempreture in fahrenheit 
Fahrenheit: (fahrenheit) => {
    return fahrenheit;
},
// function to get tempreture in fahrenheit equivalent to celsius
Celsius: (celsius) => {
    return (celsius * 9 / 5) + 32;
}
}

module.exports = {lengthsComparator};
