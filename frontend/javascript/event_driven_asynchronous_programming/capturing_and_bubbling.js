function highlightThis(e) {
  console.log(this.className + ' ' + e.currentTarget.tagName)
  alert(this.className + ' ' + e.currentTarget.tagName);
}


document.addEventListener('DOMContentLoaded', function() {
  var divs = document.querySelectorAll('.pick');
  for(var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', highlightThis, true);
  }
})

