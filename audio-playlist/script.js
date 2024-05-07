
function playItem(event) {
	
  document.getElementById('audio-player').src = event.target.dataset.url;
  document.getElementById('audio-player').play();
  
  const collection = document.getElementsByClassName('active')
  for(const playlistItem of collection) {
  	playlistItem.classList.remove('active');
  }
  event.target.classList.add('active');
  document.getElementById('current-song').textContent = event.target.textContent
}
