function validate(event) {
	if (event.target.value.length === 0) {
		event.target.style.backgroundColor = 'red';
  }
  else {
  	event.target.style.backgroundColor = 'green';
  }
}

function togglePassword(event) {
  console.log(event.target)
  
  if (document.querySelector('.js-password-input').type === 'password') {
  	event.target.textContent = 'Hide'
    document.querySelector('.js-password-input').type = "text"
  }
  else {
  	event.target.textContent = 'Show'
    document.querySelector('.js-password-input').type = 'password'
  }
}


const colors = ['red', 'green', 'blue']
let index = 0

function changeColor() {
	const squareElement = document.getElementById('the-square')
  squareElement.style.backgroundColor = colors[index];
  squareElement.style.color = 'white';
  index = index + 1
}
