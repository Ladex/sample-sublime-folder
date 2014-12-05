'use strict';

describe('Service: someServie', function () {

  // load the service's module
  beforeEach(module('sampleSublimeFolderApp'));

  // instantiate service
  var someServie;
  beforeEach(inject(function (_someServie_) {
    someServie = _someServie_;
  }));

  it('should do something', function () {
    expect(!!someServie).toBe(true);
  });

});
