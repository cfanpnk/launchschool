document.addEventListener('DOMContentLoaded', function() {
  var store = document.getElementById('store');

  var request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');
  request.send();

  request.addEventListener('load', function(event) {
    store.innerHTML = request.response;
  });

  store.addEventListener('click', function(event) {
    var target = event.target;
    if (target.tagName !== 'A') {
      return;
    }

    event.preventDefault();

    var request = new XMLHttpRequest();
    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));
    request.send();

    request.addEventListener('load', function(event) {
      store.innerHTML = request.response;
    });
  });

  store.addEventListener('submit', function(e) {
    var form = e.target;
    var submitRequest = new XMLHttpRequest();
    var data = new FormData(form);
    e.preventDefault();      
    submitRequest.open('POST', 'https://ls-230-web-store-demo.herokuapp.com' + form.getAttribute('action'));
    submitRequest.setRequestHeader('Authorization', 'token AUTH_TOKEN');
    submitRequest.send(data);
    submitRequest.addEventListener('load', function(e) {
      store.innerHTML = request.response;
    });
  });
});

