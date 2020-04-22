var assert = require('chai').assert;
var distance = require('../main/Feet');

it('given 0 feet and 0 feet should return equal', function() {
    let feet1 = distance.Feet(0.0);
    let feet2 = distance.Feet(0.0);
    assert.equal(feet1,feet2);
});