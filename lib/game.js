'use strict';
const Grid = require('./grid');
const fs = require('fs');

module.exports = class Game {
  constructor(seedFile) {
    this._seedFile = seedFile;
  }

  run() {
    const grid = new Grid(fs.readFileSync(this._seedFile, 'utf-8'));
    setInterval(() => {
      console.log('\x1B[2J\x1B[0f'); // clear screen and reset cursor to start
      console.log(grid.cells())
      grid.evolve();
    }, 500);
  }
}
