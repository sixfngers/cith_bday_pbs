
$(function()
{
	//var poster = document.getElementById('poster');
	var frame = document.getElementById('playerframe');
	/*
	var posterToggle = document.getElementById('poster_button')
	var controls = document.getElementById('test-video-controls');
	var playPauseButton = document.getElementById('test-video-play-pause');
	
	*/
	
	var videoElement = document.getElementById('videoelement');
	
	frame.addEventListener('click',togglePoster,false);
	/*
	videoElement.addEventListener('ended',videoEnded,false);
	videoElement.addEventListener('pause',videoPause,false);
	videoElement.addEventListener('play',videoPlay,false);
	*/
	
	
	function togglePoster()
	{
		
		/*
		poster.style.display = 'none';
		posterToggle.style.display = 'none';
		controls.style.display = 'block';
		
		*/
		
		videoElement.play();
	}
	/*
	function videoEnded()
	{ 
		poster.style.display = '';
		posterToggle.style.display = 'block';
		controls.style.display = 'none';
	}
	
	function videoPlay()
	{
		poster.style.display = 'none';
		controls.style.display = 'block';
		playPauseButton.className = "play-pause pause";
	}
	
	function videoPause()
	{
		poster.style.display = 'none';
		controls.style.display = 'block';
		playPauseButton.className = "play-pause play";
	}
	
	function togglePlayback()
	{
		var videoElement = document.getElementById('test-video');
	
		if(videoElement.paused)
		{
			videoElement.play();
		}
		else
		{
			videoElement.pause();
		}
	}
	*/
});
    