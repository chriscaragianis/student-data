'use strict';

class Aggregate {
  constructor(options) {
    if (options) {
      this.name = options.name ? options.name : undefined;
      this.database = options.database ? options.database : {};
    }
  }

  attach(loc, data) {
    if (this[loc]) {
      return;
    }
    this[loc] = typeof data == 'object' ? data : this.database.get(data);
  }

  detach(loc) {
    this[loc] = undefined;
  }
}

module.exports = Aggregate;
