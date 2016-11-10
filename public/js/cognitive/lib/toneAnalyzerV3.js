var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3(
  {
    username: '6a821d31-b91b-479a-99c2-3d1cc49caf51',
    password: 'ASx4N4PMbfkZ',
    version_date: '2016-05-19'
  }
);

exports.toneAnalyze = function(input, response){
  tone_analyzer.tone(
    {
      text: input
    },

    (err, tone) => {
      if(err)
        console.log(err);
      else
        response(JSON.stringify(tone, null, 2));
    }
  );
}
