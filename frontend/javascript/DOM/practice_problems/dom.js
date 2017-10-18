// Question 1:
document.querySelector('h1').classList.add('heading');

// Question 2:
document.getElementById('list').style.listStyle='disc';

// Question 3:
document.getElementById('toggle').onclick = function(e) {
	e.preventDefault();
	var existingClass = document.getElementById('notice').getAttribute('class');
	console.log(existingClass);
	var newClass;
	if (existingClass === 'hidden') {
    newClass = 'main';
	} else {
		newClass = 'hidden';
  }
  document.getElementById('notice').setAttribute('class', newClass);
};

// Question 4:
document.getElementById('notice').onclick = function(e) {
  e.preventDefault();
  this.setAttribute('class', 'hidden');
};

// Question 5:
document.getElementById('multiplication').innerText = '117';

// Question 6:
document.body.setAttribute('id', 'styled');