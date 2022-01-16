var assert = require('assert');
var fbkata = require('../kata');

describe('FizzBuzz Code Kata', function() {
  describe('#fizzbuzz()', function() {
    it('Doit renvoyer le même nombre lorsque la valeur n\'est pas multiple de 3 ou 5', function() {
      assert.equal(1, fbkata.fizzbuzz(1));
      assert.equal(2, fbkata.fizzbuzz(2));
      assert.equal(4, fbkata.fizzbuzz(4));
    });
  });


  describe('#fizzbuzz()', function() {
    it('Doit renvoyer Fizz lorsque la valeur est multiple de 3 mais pas de 5', function() {
      assert.equal('Fizz', fbkata.fizzbuzz(3));
      assert.equal('Fizz', fbkata.fizzbuzz(9));
    });
  });


  describe('#fizzbuzz()', function() {
    it('Doit renvoyer Buzz lorsque la valeur est multiple de 5 mais pas de 3', function() {
      assert.equal('Buzz', fbkata.fizzbuzz(5));
      assert.equal('Buzz', fbkata.fizzbuzz(10));
    });
  });


  describe('#fizzbuzz()', function() {
    it('Doit renvoyer FizzBuzz lorsque la valeur est multiple de 3 et 5', function() {
      assert.equal('FizzBuzz', fbkata.fizzbuzz(15));
      assert.equal('FizzBuzz', fbkata.fizzbuzz(90));
    });
  });

});