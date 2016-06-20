function StaffController () {
  var vm = this;

  vm.name = 'Katherine'
  vm.email = 'test@gmail.com'
  vm.phone = '1112223333'
}

angular 
  .module('app')
  .controller('StaffController', StaffController);