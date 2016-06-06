'use strict';

class Aggregate {
  constructor(options) {
    if (options) {
      this.name = options.name ? options.name : undefined;
    }
  }

  attach(loc, data) {
    this[loc] = data;
  }
}

module.exports = Aggregate;
