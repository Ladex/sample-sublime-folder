'use strict';

describe('Controller: StreammanagementCtrl', function () {

  // load the controller's module
  beforeEach(module('sampleSublimeFolderApp'));

  var StreammanagementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StreammanagementCtrl = $controller('StreammanagementCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
