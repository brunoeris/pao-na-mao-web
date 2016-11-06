(function() {
  'use strict';

  angular
    .module('paoNaMaoWeb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $authProvider, $locationProvider, URL_BASE_API) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/ui/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/ui/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    $authProvider.loginUrl = URL_BASE_API + '/api/v1/oauth/token';
    $authProvider.signupUrl = URL_BASE_API + '/api/v1/users';
    $authProvider.baseUrl = URL_BASE_API;

    $authProvider.tokenName = 'access_token';
    $authProvider.tokenPrefix = 'satellizer';
    $authProvider.authHeader = 'Authorization';
    $authProvider.authToken = 'Bearer';
    $authProvider.storageType = 'localStorage';

    $authProvider.oauth2({
      name: 'paoNaMaoWeb',
      url: URL_BASE_API,
      redirectUri: '/',
      clientId: '9db24d0b14ee5524beb61d8a88808395cb56759e559135b91601e55af504701a',
      authorizationEndpoint: URL_BASE_API + 'oauth/authorize'
    });

    function skipIfLoggedIn($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        $location.path('/');
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

    function loginRequired($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }
  }

})();
