#!/usr/bin/env node
'use strict';
setInterval(() => {
  console.log('\x1B[2J\x1B[0f'); // clear screen and reset cursor to start
  // write the game grid here
}, 500);
