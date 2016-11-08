app.controller('cognitiveCtrl', ($scope, $http) => {

  $scope.postText = function() {
   data = JSON.stringify({texto: $scope.texto});
   console.log('Sent: ' + data);
   $http.post('/test', data).then(function(response){
     console.log('Received: ' + response.data);
   }, function(err) {
    console.log(err);
   }); 
 } 
});
