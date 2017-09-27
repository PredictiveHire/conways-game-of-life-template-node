#!/usr/bin/env node
'use strict';
const Game = require('./game');
new Game(process.argv[2]).run();
