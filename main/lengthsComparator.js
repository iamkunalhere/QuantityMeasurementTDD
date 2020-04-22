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
}
}
module.exports = {lengthsComparator};
