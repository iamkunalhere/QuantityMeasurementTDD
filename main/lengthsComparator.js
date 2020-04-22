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
}
}
module.exports = {lengthsComparator};
