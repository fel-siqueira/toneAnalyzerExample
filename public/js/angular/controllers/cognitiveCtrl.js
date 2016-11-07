app.controller('cognitiveCtrl', ($scope, $http) => {
 function postText() {
   var data = $scope.texto;
  $http.post('/test', data).success( () => {
    console.log('POST ' + data);
  });
 } 
});
