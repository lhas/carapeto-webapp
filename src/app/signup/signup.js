class SignupController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

angular
  .module('app')
  .component('signup', {
    templateUrl: 'app/signup//signup.html',
    controller: SignupController
  });

