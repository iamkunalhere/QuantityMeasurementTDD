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
