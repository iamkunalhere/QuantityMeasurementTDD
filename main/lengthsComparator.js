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
}
}

module.exports = {lengthsComparator};
