'use strict';

class Aggregate {
  constructor(options) {
    if (options) {
      this.name = options.name ? options.name : undefined;
    }
  }

  attach(loc, data) {
    if (this[loc]) {
      return;
    }
    this[loc] = data;
  }

  detach(loc) {
    this[loc] = undefined;
  }
}

module.exports = Aggregate;
