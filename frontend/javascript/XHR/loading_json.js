// var request = new XMLHttpRequest();
// request.open('GET', 'https://api.github.com/repos/rails/rails');
// request.responseType = 'json';
// request.addEventListener('load', function(event) {
//   var data = request.response;
//   console.log(request.status);
//   console.log(data.open_issues);
// });

// request.addEventListener('error', function(event) {
//   console.log('The request could not be completed!');
// });

// request.send();

var request = new XMLHttpRequest();
request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
var data = {
  name: 'Green pen',
  sku: 'GRN1234',
  price: 9999999
};
var json = JSON.stringify(data);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Authorization', 'token AUTH_TOKEN');
request.send(json);
request.addEventListener('load', function(event) {
  console.log(event.response);
});