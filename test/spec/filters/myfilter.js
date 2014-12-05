'use strict';

describe('Filter: myfilter', function () {

  // load the filter's module
  beforeEach(module('sampleSublimeFolderApp'));

  // initialize a new instance of the filter before each test
  var myfilter;
  beforeEach(inject(function ($filter) {
    myfilter = $filter('myfilter');
  }));

  it('should return the input prefixed with "myfilter filter:"', function () {
    var text = 'angularjs';
    expect(myfilter(text)).toBe('myfilter filter: ' + text);
  });

});
