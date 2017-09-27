'use strict';
const proxyquire = require('proxyquire');

describe('Game', function() {
  let Game;
  let game;
  let Grid;
  let grid;
  let fs;

  beforeEach(() => {
    fs = jasmine.createSpyObj('fs', ['readFileSync']);
    grid = jasmine.createSpyObj('game', ['evolve', 'cells']);
    Grid = jasmine.createSpy('Grid').and.returnValue(grid);

    Game = proxyquire('../lib/game', {
      'fs': fs,
      './grid': Grid
    });

    game = new Game('/path/to/seed.txt');
  });

  describe('when run', () => {
    beforeEach(() => {
      fs.readFileSync.and.returnValue('seed contents');
      spyOn(global, 'setInterval').and.callFake((loop) => loop());
      spyOn(global.console, 'log');
      grid.cells.and.returnValue('grid cells');

      game.run();
    });

    it('reads the seed file in UTF-8 encoding', () => {
      expect(fs.readFileSync).toHaveBeenCalledWith('/path/to/seed.txt', 'utf-8');
    });

    it('creates a new grid with the seed contents', () => {
      expect(Grid).toHaveBeenCalledWith('seed contents');
    });

    it('ticks every half a second', () => {
      expect(global.setInterval).toHaveBeenCalledWith(jasmine.anything(), 500);
    });

    describe('during every tick', () => {
      it('clears the console and resets cursor to the start', () => {
        expect(console.log).toHaveBeenCalledWith('\x1B[2J\x1B[0f');
      });

      it('logs the cells of the grid', () => {
        expect(console.log).toHaveBeenCalledWith('grid cells');
      });

      it('evolves the grid', () => {
        expect(grid.evolve).toHaveBeenCalled();
      });
    })
  });
});
