'use strict';
const fs = require('fs');

module.exports = class Sample {
  run() {
    fs.readFileSync('some-file');
  }
}
