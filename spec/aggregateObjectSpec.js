'use strict';
var Aggregate = require('../lib/Aggregate');

describe('Aggregate', () => {

  describe('constructor', () => {

    it('constructs an Aggregate', () => {
      expect(new Aggregate({name: "Travis"}).name).toEqual("Travis");
    });
  });
});
