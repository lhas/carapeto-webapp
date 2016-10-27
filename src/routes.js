angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/signup');

  $stateProvider
    .state('signup', {
      url: '/signup',
      component: 'signup'
    })
    .state('signupTeacher', {
      url: '/signup/teacher',
      component: 'signupTeacher'
    });
}
