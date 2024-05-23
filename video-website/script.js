const videoUrls = [
	'https://github.com/microsoft/AzureDeepStreamAccelerator/raw/7cb31cda33b9d3e6be0bda3f75d272e3187b9af1/rtsp-simulator/videos/dashcam.mp4',
  'https://github.com/microsoft/vscode-docs/raw/09ef6a0bca6e476cc0720e49982e44ca4e99ab45/blogs/2024/05/08/calculator.mp4',
  'https://github.com/microsoft/AzureDeepStreamAccelerator/raw/7cb31cda33b9d3e6be0bda3f75d272e3187b9af1/rtsp-simulator/videos/pedestrians.mp4',
];

function changeVideo(event) {
	const videoElement = document.getElementById('video-player')
  // for debugging (would remove after finding the problem)
  console.log(event.target.dataset.index)
  videoElement.src = videoUrls[event.target.dataset.index]
	videoElement.play();
}


//document.getElementById('video-player').style.border = '5px solid red';