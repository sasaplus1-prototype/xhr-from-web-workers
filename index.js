(function(){

  'use strict';

  var worker = new Worker('worker.js');

  worker.addEventListener('error', function(err) {
    console.error(err);
  }, false);

  worker.addEventListener('message', function(event) {
    console.log(event.data);
  }, false);

  worker.postMessage(
    JSON.stringify({
      url: 'index.json'
    })
  );

}());
