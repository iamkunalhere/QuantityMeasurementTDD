var assert = require('chai').assert;
var getLength = require('../main/lengthsComparator');

it('given 0 feet and 0 feet should return equal', function() {
    assert.equal(getLength.lengthsComparator.Feet(0.0),getLength.lengthsComparator.Feet(0.0));
});

it('given 0 feet and 1 feet should return not equal', function() {
    assert.notEqual(getLength.lengthsComparator.Feet(0.0),getLength.lengthsComparator.Feet(1.0));
});

it('given null value to feet should return wrong input', function() {
    assert.isNull(null,getLength.lengthsComparator.Feet(null));
});

it('given value type should return number', function() {
    assert.typeOf(getLength.lengthsComparator.Feet(1.0),'Number');
});

it('given 0 inch and 0 inch should return equal', function() {
    assert.equal(getLength.lengthsComparator.Inch(0.0),getLength.lengthsComparator.Inch(0.0));
});

it('given 0 inch and 1 inch should return not equal', function() {
    assert.notEqual(getLength.lengthsComparator.Inch(0.0),getLength.lengthsComparator.Inch(1.0));
});

it('given null value to inch should return wrong input', function() {
    assert.isNull(null,getLength.lengthsComparator.Inch(null));
});

it('given value type should return number', function() {
    assert.typeOf(getLength.lengthsComparator.Inch(1.0),'Number');
});

it('given values in feet and inch if not equal should return not equal', function() {
    assert.notEqual(getLength.lengthsComparator.Feet(1.0),getLength.lengthsComparator.Inch(1.0));
});

it('given values in feet and inch if equal should return equal', function() {
    assert.equal(getLength.lengthsComparator.Feet(1.0),getLength.lengthsComparator.Inch(12.0));
});

it('given 3 feet and 1 yard should return equal', function() {
    assert.equal(getLength.lengthsComparator.Feet(3.0),getLength.lengthsComparator.Yard(1.0));
});

it ('given 1 feet and 1 yard should return not equal', function() {
    assert.notEqual(getLength.lengthsComparator.Feet(1.0),getLength.lengthsComparator.Yard(1.0));
});

it('given 1 inch and 1 yard should return not equal', function() {
    assert.notEqual(getLength.lengthsComparator.Inch(1.0),getLength.lengthsComparator.Yard(1.0));
});

it('given 1 yard and 36 inch should return equal', function() {
    assert.equal(getLength.lengthsComparator.Yard(1.0),getLength.lengthsComparator.Inch(36.0));
});

it('given 36 inch and 1 yard should return eqaul', function() {
    assert.equal(getLength.lengthsComparator.Inch(36.0),getLength.lengthsComparator.Yard(1.0));
});

it('given 1 yard and 3 feet should return equal', function() {
    assert.equal(getLength.lengthsComparator.Yard(1.0),getLength.lengthsComparator.Feet(3.0));
});

it('given 2 inch and 5 centimeter should return equal', function(){
    assert.equal(getLength.lengthsComparator.Inch(2.0),getLength.lengthsComparator.Centimeter(5.0));
});

it('given 2 inch and 2 inch addition should return 4 inch', function() {
    let addition = getLength.lengthsComparator.Addition(getLength.lengthsComparator.Inch(2.0),getLength.lengthsComparator.Inch(2.0));
    assert.equal(4,addition);
});

it('given 1 feet and 2 inch addtion should return 14 inch', function() {
    let addition = getLength.lengthsComparator.Addition(getLength.lengthsComparator.Feet(1.0),getLength.lengthsComparator.Inch(2.0));
    assert.equal(14,addition);
});

it('given 1 feet and 1 feet addtion should return 24 inch', function() {
    let addition = getLength.lengthsComparator.Addition(getLength.lengthsComparator.Feet(1.0),getLength.lengthsComparator.Feet(1.0));
    assert.equal(24,addition);
});

it('given 2 inch and 2.5 centimeter addition should return 3 inch', function() {
    let addition = getLength.lengthsComparator.Addition(getLength.lengthsComparator.Inch(2.0),getLength.lengthsComparator.Centimeter(2.5));
    assert.equal(3,addition);
});

it('given 1 gallon and 3.78 liters should return equal', function() {
    assert.equal(getLength.lengthsComparator.Gallon(1.0),getLength.lengthsComparator.Liter(3.78));
});

it('given 1 liter and 1000 ml should return equal', function() {
    assert.equal(getLength.lengthsComparator.Liter(1.0),getLength.lengthsComparator.Milliliter(1000));
});

it('given 1 gallon and 3.78 liters addition should return 7.57 liters', function() {
    let addition = getLength.lengthsComparator.Addition(getLength.lengthsComparator.Gallon(1.0),getLength.lengthsComparator.Liter(3.78));
    assert.equal(7.56,addition);
});

it ('given 1 liter and 1000 ml additon should return 2 liters', function() {
    let addition = getLength.lengthsComparator.Addition(getLength.lengthsComparator.Liter(1.0),getLength.lengthsComparator.Milliliter(1000));
    assert.equal(2,addition);
});

it('given 1 kg and 1000 grams should return equal', function() {
    assert.equal(getLength.lengthsComparator.Kg(1.0),getLength.lengthsComparator.Grams(1000));
});

it('given 1 ton and 1000 kgs should return equal', function() {
    assert.equal(getLength.lengthsComparator.Ton(1.0),getLength.lengthsComparator.Kg(1000));
});

it('given 1 ton and 1000 grams addition should retun 1001 kg', function() {
    let addition = getLength.lengthsComparator.Addition(getLength.lengthsComparator.Ton(1.0),getLength.lengthsComparator.Grams(1000));
    assert.equal(1001,addition);
});

it('given 212 fahrenheit and 100 celsius should return equal', function() {
    assert.equal(getLength.lengthsComparator.Fahrenheit(212),getLength.lengthsComparator.Celsius(100));
});
