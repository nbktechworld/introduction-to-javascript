
const paragraphElement = document.getElementById("paragraph")
paragraphElement.textContent = "New content"
paragraphElement.style.backgroundColor = 'yellow'

function changeSquareColor() {
  document.getElementById("the-square").style.backgroundColor = 'red'
}

let left = 0
let interval
function moveSquare() {
	interval = setInterval(function() {
    left = left + 10
    document.getElementById('the-square').style.left = left + 'px';
  }, 20)
	
}

function stopSquare() {
	clearInterval(interval)
}

function resetSquare() {
	document.getElementById('the-square').style.left = '0px'
}
