'use strict';

describe('Service: shareTag', function () {

  // load the service's module
  beforeEach(module('finalApp'));

  // instantiate service
  var shareTag;
  beforeEach(inject(function (_shareTag_) {
    shareTag = _shareTag_;
  }));

  it('should do something', function () {
    expect(!!shareTag).toBe(true);
  });

});
