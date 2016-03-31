self.addEventListener('message', function(event) {
  var data, xhr;

  data = JSON.parse(event.data);

  xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (
        xhr.status >= 200 && xhr.status < 300 ||
        xhr.status === 304 ||
        xhr.status === 1223
      ) {
        self.postMessage(
          JSON.stringify({
            type: 'success',
            responseText: xhr.responseText
          })
        );
      } else {
        self.postMessage(
          JSON.stringify({
            type: 'fail',
            statusText: xhr.statusText
          })
        );
      }
    }
  };

  xhr.open('GET', data.url);
  xhr.send(null);
}, false);
