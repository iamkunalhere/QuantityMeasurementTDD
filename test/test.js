var assert = require('chai').assert;
var getLength = require('../main/lengthsComparator');

it('given 0 feet and 0 feet should return equal', function() {
    let feet1 = getLength.lengthsComparator.Feet(0.0);
    let feet2 = getLength.lengthsComparator.Feet(0.0);
    assert.equal(feet1,feet2);
});

it('given 0 feet and 1 feet should return not equal', function() {
    let feet1 = getLength.lengthsComparator.Feet(0.0);
    let feet2 = getLength.lengthsComparator.Feet(1.0);
    assert.notEqual(feet1,feet2);
});

it('given null value to feet should return wrong input', function() {
    let feet1 = getLength.lengthsComparator.Feet(null);
    assert.isNull(null,feet1);
});

it('given value type should return number', function() {
    let feet1 = getLength.lengthsComparator.Feet(1.0);
    assert.typeOf(feet1,'Number');
});

it('given 0 inch and 0 inch should return equal', function() {
    let inch1 = getLength.lengthsComparator.Inch(0.0);
    let inch2 = getLength.lengthsComparator.Inch(0.0);
    assert.equal(inch1,inch2);
});

it('given 0 inch and 1 inch should return not equal', function() {
    let inch1 = getLength.lengthsComparator.Inch(0.0);
    let inch2 = getLength.lengthsComparator.Inch(1.0);
    assert.notEqual(inch1,inch2);
});

it('given null value to inch should return wrong input', function() {
    let inch1 = getLength.lengthsComparator.Inch(null);
    assert.isNull(null,inch1);
});

it('given value type should return number', function() {
    let inch1 = getLength.lengthsComparator.Inch(1.0);
    assert.typeOf(inch1,'Number');
});

it('given values in feet and inch if not equal should return not equal', function() {
    let feet = getLength.lengthsComparator.Feet(1.0);
    let inch = getLength.lengthsComparator.Inch(1.0);
    assert.notEqual(feet,inch);
});

it('given values in feet and inch if equal should return equal', function() {
    let feet = getLength.lengthsComparator.Feet(1.0);
    let inch = getLength.lengthsComparator.Inch(12.0);
    assert.equal(feet,inch);
});

it('given 3 feet and 1 yard should return equal', function() {
    let feet = getLength.lengthsComparator.Feet(3.0);
    let yard = getLength.lengthsComparator.Yard(1.0);
    assert.equal(feet,yard);
});

it ('given 1 feet and 1 yard should return not equal', function() {
    let feet = getLength.lengthsComparator.Feet(1.0);
    let yard = getLength.lengthsComparator.Yard(1.0);
    assert.notEqual(feet,yard);
});

it('given 1 inch and 1 yard should return not equal', function() {
    let inch = getLength.lengthsComparator.Inch(1.0);
    let yard = getLength.lengthsComparator.Yard(1.0);
    assert.notEqual(inch,yard);
});

it('given 1 yard and 36 inch should return equal', function() {
    let yard = getLength.lengthsComparator.Yard(1.0);
    let inch = getLength.lengthsComparator.Inch(36.0);
    assert.equal(yard,inch);
});

it('given 36 inch and 1 yard should return eqaul', function() {
    let inch = getLength.lengthsComparator.Inch(36.0);
    let yard = getLength.lengthsComparator.Yard(1.0);
    assert.equal(inch,yard);
});

it('given 1 yard and 3 feet should return equal', function() {
    let yard = getLength.lengthsComparator.Yard(1.0);
    let feet = getLength.lengthsComparator.Feet(3.0);
    assert.equal(yard,feet);
});

it('given 2 inch and 5 centimeter should return equal', function(){
    let inch = getLength.lengthsComparator.Inch(2.0);
    let cm = getLength.lengthsComparator.Centimeter(5.0);
    assert.equal(inch,cm);
});

it('given 2 inch and 2 inch addition should return 4 inch', function() {
    let inch1 = getLength.lengthsComparator.Inch(2.0);
    let inch2 = getLength.lengthsComparator.Inch(2.0);
    let addition = getLength.lengthsComparator.Addition(inch1,inch2);
    assert.equal(4,addition);
});

it('given 1 feet and 2 inch addtion should return 14 inch', function() {
    let feet = getLength.lengthsComparator.Feet(1.0);
    let inch = getLength.lengthsComparator.Inch(2.0);
    let addition = getLength.lengthsComparator.Addition(feet,inch);
    assert.equal(14,addition);
});

it('given 1 feet and 1 feet addtion should return 24 inch', function() {
    let feet1 = getLength.lengthsComparator.Feet(1.0);
    let feet2 = getLength.lengthsComparator.Feet(1.0);
    let addition = getLength.lengthsComparator.Addition(feet1,feet2);
    assert.equal(24,addition);
});

it('given 2 inch and 2.5 centimeter addition should return 3 inch', function() {
    let inch = getLength.lengthsComparator.Inch(2.0);
    let cm = getLength.lengthsComparator.Centimeter(2.5);
    let addition = getLength.lengthsComparator.Addition(inch,cm);
    assert.equal(3,addition);
});

it('given 1 gallon and 3.78 liters should return equal', function() {
    let gallon = getLength.lengthsComparator.Gallon(1.0);
    let liter = getLength.lengthsComparator.Liter(3.78);
    assert.equal(gallon,liter);
});

it('given 1 liter and 1000 ml should return equal', function() {
    let liter = getLength.lengthsComparator.Liter(1.0);
    let ml = getLength.lengthsComparator.Milliliter(1000);
    assert.equal(liter,ml);
});

it('given 1 gallon and 3.78 liters addition should return 7.57 liters', function() {
    let gallon = getLength.lengthsComparator.Gallon(1.0);
    let liter = getLength.lengthsComparator.Liter(3.78);
    let addition = getLength.lengthsComparator.Addition(gallon,liter);
    assert.equal(7.56,addition);
});

it ('given 1 liter and 1000 ml additon should return 2 liters', function() {
    let liter = getLength.lengthsComparator.Liter(1.0);
    let ml = getLength.lengthsComparator.Milliliter(1000);
    let addition = getLength.lengthsComparator.Addition(liter,ml);
    assert.equal(2,addition);
});

it('given 1 kg and 1000 grams should return equal', function() {
    let kg = getLength.lengthsComparator.Kg(1.0);
    let grams = getLength.lengthsComparator.Grams(1000);
    assert.equal(kg,grams);
});

it('given 1 ton and 1000 kgs should return equal', function() {
    let ton = getLength.lengthsComparator.Ton(1.0);
    let kg = getLength.lengthsComparator.Kg(1000);
    assert.equal(ton,kg);
});

it('given 1 ton and 1000 grams addition should retun 1001 kg', function() {
    let ton = getLength.lengthsComparator.Ton(1.0);
    let grams = getLength.lengthsComparator.Grams(1000);
    let addition = getLength.lengthsComparator.Addition(ton,grams);
    assert.equal(1001,addition);
});

it('given 212 fahrenheit and 100 celsius should return equal', function() {
    let fahrenheit = getLength.lengthsComparator.Fahrenheit(212);
    let celsius = getLength.lengthsComparator.Celsius(100);
    assert.equal(fahrenheit,celsius);
});
