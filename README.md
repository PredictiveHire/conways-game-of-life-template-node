# Conway's Game of Life Template - Node

Solution template for Conway’s Game of Life in Node.

## The Rules
(from [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life))

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or "populated" or "unpopulated".
Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.
At each step in time, the following transitions occur:
- Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system.
The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one).
The rules continue to be applied repeatedly to create further generations.

## Constraints
- read the simple input file from the `seeds` directory. It contains an 80 x 40 grid where `-` represents a dead cell and `*` represents a live one
- redisplay the entire grid on the screen each generation. Functions like `process.stdout.write`, `process.stdout.clearLine`, `process.stdout.cursorTo` might come in handy
- generations tick every 0.5 seconds
- the program can be exited using ctrl+c

## Testing
- [Jasmine](https://jasmine.github.io/) has been set up for testing
- [Proxyquire](https://github.com/thlorenz/proxyquire) has been set up for stubbing out dependencies
- See `sampleSpec.js` for an example
