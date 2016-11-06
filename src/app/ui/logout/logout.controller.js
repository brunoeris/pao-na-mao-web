(function() {
  'use strict';

  angular
    .module('paoNaMaoWeb')
    .controller('LogoutController', LogoutController);

  /** @ngInject */
  function LogoutController($location, $auth, toastr, $localStorage) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        $localStorage.$reset();
        toastr.info('Você foi deslogado do sistema.');
        $location.path('/login');
      });
  }
})();
