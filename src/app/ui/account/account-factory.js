angular
  .module('paoNaMaoWeb')
  .factory('Account', Account);

  function Account($http, URL_BASE_API) {

        var o = {
          getProfile: function() {
            return $http.post(URL_BASE_API + '/api/v1/users/me');
          },
          updateProfile: function(profileData) {
            var data = { user: profileData }
            return $http({
                          method: 'PUT',
                          url: URL_BASE_API + '/api/v1/users',
                          skipAuthorization: false,
                          data: data
                        });
          },
          recoverPassword: function(recoverData) {
            var data = recoverData

            return $http({
                          method: 'POST',
                          url: URL_BASE_API + '/user/password',
                          skipAuthorization: true,
                          data: data,
                          headers: {'Content-Type': 'application/json;charset=UTF-8'}
                        });
          },
          resetPassword: function(resetData) {
            var data = resetData

            return $http({
                          method: 'PATCH',
                          url: URL_BASE_API + '/user/password',
                          skipAuthorization: true,
                          data: data,
                          headers: {'Content-Type': 'application/json;charset=UTF-8'}
                        });
          }
        };
        return o;
  }
