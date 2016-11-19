app.controller('toneAnalyzerCtrl', ($scope, $http) => {

  $scope.postText = function() {
   data = JSON.stringify({texto: $scope.texto});
   console.log('Sent: ' + data);
   $http.post('/test', data).then(function(response){
     console.log('Received: ' + response.data);
     $scope.important = JSON.parse(response.data).document_tone.tone_categories[0].tones;
     var toneValues = [];
     var toneNames = [];
     for(var i = 0; i < $scope.important.length; i++) {
      toneValues[i] = $scope.important[i].score;
      toneNames[i] = $scope.important[i].tone_name;
     }

     generateChart(toneValues, toneNames);

     console.log(toneValues);
     console.log(toneNames);
   }, function(err) {
    console.log(err);
   }); 
 } 
});
