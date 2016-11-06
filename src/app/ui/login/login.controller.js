(function () {
  'use strict';

  angular
    .module('paoNaMaoWeb')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($scope, $location, $auth, toastr, $log, $localStorage, Account) {
    var vm = this;

    vm.login = function () {
      vm.user.grant_type = 'password';
      $auth.login(vm.user, {headers: {'Content-Type': 'application/json;charset=UTF-8'}})
        .then(function (response) {
          if (response != undefined) {
            Account.getProfile()
              .then(function (response) {
                $localStorage.current_user = response.data;
              });
            toastr.success('Login efetuado com sucesso');
            $location.path('/');
          } else {
            toastr.error('Erro no login, confira seus dados.');
          }

        })
        .catch(function (error) {
          $log.log(error);
          toastr.error('Erro no login, confira seus dados.');
        });
    };
    vm.authenticate = function (provider) {
      $auth.authenticate(provider)
        .then(function () {
          toastr.success('Login efetuado com ' + provider + '!');
          $location.path('/');
        })
        .catch(function (error) {
          $log.log(error);
          if (error.error) {
            toastr.error('Erro no login, confira seus dados.');
          } else if (error.data) {
            toastr.error('Erro no login, confira seus dados.');
          } else {
            toastr.error('Erro no login, confira seus dados.');
          }
        });
    };

  }
})();
