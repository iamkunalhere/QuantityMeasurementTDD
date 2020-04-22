const lengthsComparator = {

Feet: (feet) => {
    return feet*12;
},
Inch: (inch) => {
    return inch;
},
Yard: (yard) => {
    return yard*36;
},
Centimeter: (centimeter) => {
    return centimeter*0.4;
},
Addition: (parameter1,parameter2) => {
    return parameter1+parameter2;
},
Gallon: (gallon) => {
    return gallon*3.78;
},
Liter: (liter) => {
    return liter;
},
Milliliter: (milliliter) => {
    return milliliter/1000;
}
}
module.exports = {lengthsComparator};
