describe('signup component', () => {
  beforeEach(module('app', $provide => {
    $provide.factory('signup', () => {
      return {
        templateUrl: 'app/signup.html'
      };
    });
  }));

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<signup></signup>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
