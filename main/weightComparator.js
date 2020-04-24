const weightComparator = {

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
}
}
    
module.exports = {weightComparator};
