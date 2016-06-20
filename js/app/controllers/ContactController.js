function ContactController() {
  var vm = this;

  vm.name = 'Karlie Kloss'
  vm.email = 'klossy@gmail.com'
  vm.phone = '8888888888'

  this.changeName = function () {
    vm.name = 'Something else'
  }
}

angular 
  .module('app')
  .controller('ContactController', ContactController);