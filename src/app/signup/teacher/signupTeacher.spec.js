describe('signupTeacher component', () => {
  beforeEach(module('app', $provide => {
    $provide.factory('signupTeacher', () => {
      return {
        templateUrl: 'app/signupTeacher.html'
      };
    });
  }));

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<signupTeacher></signupTeacher>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
