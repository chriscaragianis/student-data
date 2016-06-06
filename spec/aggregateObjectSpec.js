'use strict';
var Aggregate = require('../lib/Aggregate');

describe('Aggregate', () => {

  describe('constructor', () => {

    it('constructs an Aggregate', () => {
      expect(new Aggregate({name: "Travis"}).name).toEqual("Travis");
    });
  });

  describe('attach', () => {

    it('attaches an object', () => {
      var subject = new Aggregate();
      subject.attach('newData', {eyes: 'brown'});
      expect(subject.newData.eyes).toEqual('brown');
    });
  });
});
