var assert = require('chai').assert;
var getLength = require('../main/lengthsComparator');
var getWeight = require('../main/weightComparator');
var getTempreture = require('../main/tempretureComparator');
var performedAddition = require('../main/performedAddition');

describe('Length quantity Tests', function() {

// test to check that feet and 0 feet is equal
it('given 0 feet and 0 feet should return equal', function() {
    assert.equal(getLength.lengthsComparator.Feet(0.0),getLength.lengthsComparator.Feet(0.0));
});

// test to check that 0 feet and 1 feet is not equal
it('given 0 feet and 1 feet should return not equal', function() {
    assert.notEqual(getLength.lengthsComparator.Feet(0.0),getLength.lengthsComparator.Feet(1.0));
});

// test to check if value is null to feet function
it('given null value to feet should return wrong input', function() {
    assert.isNull(null,getLength.lengthsComparator.Feet(null));
});

// test to check the given value is of number type
it('given value type should return number', function() {
    assert.typeOf(getLength.lengthsComparator.Feet(1.0),'Number');
});

// test to check that 0 inch and 0 inch is equal  
it('given 0 inch and 0 inch should return equal', function() {
    assert.equal(getLength.lengthsComparator.Inch(0.0),getLength.lengthsComparator.Inch(0.0));
});

// test to check that 0 inch and 1 inch is not equal
it('given 0 inch and 1 inch should return not equal', function() {
    assert.notEqual(getLength.lengthsComparator.Inch(0.0),getLength.lengthsComparator.Inch(1.0));
});

// test to check if value is null to Inch function
it('given null value to inch should return wrong input', function() {
    assert.isNull(null,getLength.lengthsComparator.Inch(null));
});

// test to check the given value is of number type
it('given value type should return number', function() {
    assert.typeOf(getLength.lengthsComparator.Inch(1.0),'Number');
});

// test to check feet and inch values if not equal
it('given values in feet and inch if not equal should return not equal', function() {
    assert.notEqual(getLength.lengthsComparator.Feet(1.0),getLength.lengthsComparator.Inch(1.0));
});

// test to check feet and inch values if equal
it('given values in feet and inch if equal should return equal', function() {
    assert.equal(getLength.lengthsComparator.Feet(1.0),getLength.lengthsComparator.Inch(12.0));
});

// test to check that 3 feet and 1 yard is equal
it('given 3 feet and 1 yard should return equal', function() {
    assert.equal(getLength.lengthsComparator.Feet(3.0),getLength.lengthsComparator.Yard(1.0));
});

// test to check that 1 feet and 1 yard is not equal
it ('given 1 feet and 1 yard should return not equal', function() {
    assert.notEqual(getLength.lengthsComparator.Feet(1.0),getLength.lengthsComparator.Yard(1.0));
});

// test to check that 1 inch and 1 feet is not equal
it('given 1 inch and 1 yard should return not equal', function() {
    assert.notEqual(getLength.lengthsComparator.Inch(1.0),getLength.lengthsComparator.Yard(1.0));
});

// test to check that 1 yard and 36 inch is equal
it('given 1 yard and 36 inch should return equal', function() {
    assert.equal(getLength.lengthsComparator.Yard(1.0),getLength.lengthsComparator.Inch(36.0));
});

// test to check that 36 inch and 1 yard is equal 
it('given 36 inch and 1 yard should return eqaul', function() {
    assert.equal(getLength.lengthsComparator.Inch(36.0),getLength.lengthsComparator.Yard(1.0));
});

// test to check 1 yard and 3 feet is equal  
it('given 1 yard and 3 feet should return equal', function() {
    assert.equal(getLength.lengthsComparator.Yard(1.0),getLength.lengthsComparator.Feet(3.0));
});

// test to check that 2 inch and 5 centimeter is equal 
it('given 2 inch and 5 centimeter should return equal', function(){
    assert.equal(getLength.lengthsComparator.Inch(2.0),getLength.lengthsComparator.Centimeter(5.0));
});

// test to check 2 inch and 2 inch addition is equal to 4 inch 
it('given 2 inch and 2 inch addition should return 4 inch', function() {
    let addition = performedAddition.Addition(getLength.lengthsComparator.Inch(2.0),getLength.lengthsComparator.Inch(2.0));
    assert.equal(4,addition);
});

// test to check 1 feet and 2 inch addition is equal to 14 inch
it('given 1 feet and 2 inch addtion should return 14 inch', function() {
    let addition = performedAddition.Addition(getLength.lengthsComparator.Feet(1.0),getLength.lengthsComparator.Inch(2.0));
    assert.equal(14,addition);
});

// test to check 1 feet and 1 feet addition is equal to 24 inch 
it('given 1 feet and 1 feet addtion should return 24 inch', function() {
    let addition = performedAddition.Addition(getLength.lengthsComparator.Feet(1.0),getLength.lengthsComparator.Feet(1.0));
    assert.equal(24,addition);
});

// test to check 2 inch and 2.5 centimeter addition is equal to 3 inch
it('given 2 inch and 2.5 centimeter addition should return 3 inch', function() {
    let addition = performedAddition.Addition(getLength.lengthsComparator.Inch(2.0),getLength.lengthsComparator.Centimeter(2.5));
    assert.equal(3,addition);
});

});

describe('Weight quantity Tests', function() {

// test to check 1 gallon and 3.78 liters is equal 
it('given 1 gallon and 3.78 liters should return equal', function() {
    assert.equal(getWeight.weightComparator.Gallon(1.0),getWeight.weightComparator.Liter(3.78));
});

// test to check 1 liter and 1000 ml is equal 
it('given 1 liter and 1000 ml should return equal', function() {
    assert.equal(getWeight.weightComparator.Liter(1.0),getWeight.weightComparator.Milliliter(1000));
});

// test to check 1 gallon and 3.78 liters addition is equal to 7.57 liters
it('given 1 gallon and 3.78 liters addition should return 7.57 liters', function() {
    let addition = performedAddition.Addition(getWeight.weightComparator.Gallon(1.0),getWeight.weightComparator.Liter(3.78));
    assert.equal(7.56,addition);
});

// test to check 1 liter and 1000 ml addition is equal to 2 liters
it ('given 1 liter and 1000 ml additon should return 2 liters', function() {
    let addition = performedAddition.Addition(getWeight.weightComparator.Liter(1.0),getWeight.weightComparator.Milliliter(1000));
    assert.equal(2,addition);
});

// test to check 1 kg and 1000 grams is equal
it('given 1 kg and 1000 grams should return equal', function() {
    assert.equal(getWeight.weightComparator.Kg(1.0),getWeight.weightComparator.Grams(1000));
});

// test to check 1 ton and 1000 kgs is equal 
it('given 1 ton and 1000 kgs should return equal', function() {
    assert.equal(getWeight.weightComparator.Ton(1.0),getWeight.weightComparator.Kg(1000));
});

// test to check 1 ton and 1000 grams addition is equal to 1001 kg
it('given 1 ton and 1000 grams addition should retun 1001 kg', function() {
    let addition = performedAddition.Addition(getWeight.weightComparator.Ton(1.0),getWeight.weightComparator.Grams(1000));
    assert.equal(1001,addition);
});

});

describe('Tempreture quantity Tests', function() {

// test to check 212 fahrenheit and 100 celsius is equal
it('given 212 fahrenheit and 100 celsius should return equal', function() {
    assert.equal(getTempreture.tempretureComparator.Fahrenheit(212),getTempreture.tempretureComparator.Celsius(100));
});

});