class SignupTeacherController {
  constructor() {
    this.text = 'My brand new component!';
  }
}

angular
  .module('app')
  .component('signupTeacher', {
    templateUrl: 'app/signup/teacher/signupTeacher.html',
    controller: SignupTeacherController
  });

