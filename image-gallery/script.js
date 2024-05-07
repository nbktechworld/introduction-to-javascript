const imageUrls = [
  "https://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Images.jpg",
  'https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg',
  "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg"
]
let currentIndex = 0
function changeImage() {
	currentIndex = (currentIndex + 1) % imageUrls.length
	document.querySelector('.the-image').src = imageUrls[currentIndex]
}
