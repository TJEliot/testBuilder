
/* You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

/*  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });*/

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num%2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});


describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var assert = chai.assert;
  it('has a prefix of 38 and a length of 14', function() {
    assert(detectNetwork('38345678901234') === "Diner's Club")     
  });

  it('has a prefix of 39 and a length of 14', function() {
    assert(detectNetwork('39345678901234') === "Diner's Club") 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = chai.assert;

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert; 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {

  var holder = detectNetwork('6534567890123456');
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should;
//  console.log("I'M IN THE MASTERCARD FUNCTION");
 
  it("It should have a prefix of 51 ", function() {
    (detectNetwork('5112345678901234')).should.equal('MasterCard');
  });
 
  it("It should have a prefix of 52 ", function() {
    (detectNetwork('5212345678901234')).should.equal('MasterCard');
  });
 
  it("It should have a prefix of 53 ", function() {
    (detectNetwork('5312345678901234')).should.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal("MasterCard");
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal("MasterCard");
  })
});




describe('Discover', function() {
  var should = chai.should();
  //var  holder = detectNetwork('6534567890123456');
  it("It should have a prefix of 65 and be 16 long", function(){
      detectNetwork('6534567890123456').should.equal("Discover");
  });
  it("has a prefix of 65 and a length of 19.", function(){
    detectNetwork("6534567890123456789").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 16", function(){
    detectNetwork("6011567890123456").should.equal("Discover");
  });
  it("has a prefix of 6011 and a length of 19", function(){
    detectNetwork("6011567890123456789").should.equal("Discover");
  });
  it("has a prefix of 644 and a length of 16", function(){
    detectNetwork("6444567890123456").should.equal("Discover");
  });
  it("has a prefix of 644 and a length of 19", function(){
    detectNetwork("6444567890123456789").should.equal("Discover");
  });
  it("has a prefix of " + 645 + " and a length of 16", function(){
    detectNetwork("" + "645" + "4567890123456").should.equal("Discover");
  });
  it("has a prefix of " + 645 + " and a length of 19", function(){
    detectNetwork("" + "645" + "4567890123456789").should.equal("Discover");
  });
  it("has a prefix of " + 646 + " and a length of 16", function(){
    detectNetwork("" + 646 + "4567890123456").should.equal("Discover");
  });
  it("has a prefix of " + 646 + " and a length of 19", function(){
    detectNetwork("" + 646 + "4567890123456789").should.equal("Discover");
  });
  it("has a prefix of " + 647 + " and a length of 16", function(){
    detectNetwork("" + 647 + "4567890123456").should.equal("Discover");
  });
  it("has a prefix of " + 647 + " and a length of 19", function(){
    detectNetwork("" + 647 + "4567890123456789").should.equal("Discover");
  });
  it("has a prefix of " + 648 + " and a length of 16", function(){
    detectNetwork("" + 648 + "4567890123456").should.equal("Discover");
  });
  it("has a prefix of " + 648 + " and a length of 19", function(){
    detectNetwork("" + 648 + "4567890123456789").should.equal("Discover");
  });
  it("has a prefix of " + 649 + " and a length of 16", function(){
    detectNetwork("" + 649 + "4567890123456").should.equal("Discover");
  });
  it("has a prefix of " + 649 + " and a length of 19", function(){
    detectNetwork("" + 649 + "4567890123456789").should.equal("Discover");
  });
});
  //


//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19

describe('Maestro', function() {
  var should = chai.should;
  for (var nums = '56789012'; nums.length <= 15; nums += '0') {
    (function (nums) {
      var testNum5018 = '5018' + nums;
      var testNum5020 = '5020' + nums;
      var testNum5038 = '5038' + nums;
      var testNum6304 = '6304' + nums;
      it('has a prefix of 5018 and a length of ' + (testNum5018.length).toString(), function() {
        //console.log("does putting this in here break the it.should.be");
        (detectNetwork(testNum5018)).should.equal('Maestro');
      });
      it('has a prefix of 5020 and a length of ' + (testNum5020.length).toString(), function() {
        (detectNetwork(testNum5020)).should.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ' + (testNum5038.length).toString(), function() {
        (detectNetwork(testNum5038)).should.equal('Maestro');
      });
      it('has a prefix of 6304 and a length of ' + (testNum6304.length).toString(), function() {
        (detectNetwork(testNum6304)).should.equal('Maestro');
      });
    })(nums);
  }
});

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

describe("China UnionPay", function(){
  var should = chai.should;
  for (var i="4567890123456"; i.length<20; i+= "1"){
      (function (i){
        var testNum624 = "624" + i;
        var testNum625 = "625" + i;
        var testNum626 = "626" + i;
        console.log(testNum624);
        it("has a prefix of 624 and a length of 16", function() {
          //detectNetwork("6244567890123456").should.equal("China UnionPay");
          detectNetwork("1234567890123456").should.equal("Unknown card type");
        });
        // it("has a prefix of 625 and a length of " + testNum625.length, function() {
        //   detectNetwork(testNum625).should.equal("China UnionPay");
        // });
        // it("has a prefix of 626 and a length of " + testNum626.length, function() {
        //   detectNetwork(testNum626).should.equal("China UnionPay");
        // });
      })(i);
  } 
});


//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
















/* describe("Maestro", function(){
  console.log("I AM IN THE MAESTRO FUNCTION");
  var should = chai.should();
  maesPrefixArray = ["5018", "5020", "5038", "6304"];
  maesLengthArray = [12,13,14,15,16,17,18,19];
  for(var i=0; i<maesPrefixArray.length; i++){
    var maesPref = maesPrefixArray[i];
    for(var j=0; j<maesLengthArray.length; j++){
      var maesLen = maesLengthArray[j]
      var paddedMaes = padder(maesPref, maesLen);
//      alert("the whole number is " + paddedMaes + " and its type is " + typeof paddedMaes);
      it(`has a prefix of ${maesPref} and the length of ${maesLen}`, function(){
          detectNetwork(paddedMaes).should.equal("Maestro");
      });
    };
  };
});

function padder(shortNum,lengthen){
  shortNum = "" + shortNum;
//  console.log("shortNum is " + shortNum)
  var howMany = lengthen - shortNum.length;
 // console.log("lengthen is " + lengthen + " so howMany is " + howMany);
  for (var i=0; i<howMany; i++){
   // console.log(i);
    shortNum += "1";
  }
  return shortNum;
}
*/