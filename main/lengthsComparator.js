const lengthsComparator = {

Feet: (feet) => {
    return feet*12;
},
Inch: (inch) => {
    return inch;
},
Yard: (yard) => {
    return yard*36;
}
}
module.exports = {lengthsComparator};
