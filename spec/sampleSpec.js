'use strict';
const proxyquire = require('proxyquire');

describe('Sample', function() {
  let Sample;
  let sample;
  let fs;

  beforeEach(() => {
    fs = jasmine.createSpyObj('fs', ['readFileSync']);
    Sample = proxyquire('../lib/sample', {
      'fs': fs
    });

    sample = new Sample();
  });

  describe('when run', () => {
    beforeEach(() => {
      sample.run();
    });

    it('reads some file', () => {
      expect(fs.readFileSync).toHaveBeenCalledWith('some-file');
    });
  });
});
