/* main.js */

const loadAudio = source => {
	var pauseButton = document.getElementById("pause");
	if (HTMLAudioElement) {
		let ad = new Audio(source);
		let result = ad.canPlayType("audio/mp3");
		if (result.match(/^(probably|maybe)$/)) {
			ad.play();
			ad.loop = true;
			pauseButton.addEventListener("click", () => {
				if (pauseButton.value == "play") {
					pauseButton.value = "pause";
					ad.play();
				} else {
					pauseButton.value = "play";
					ad.pause();
				}
			})
		}
	}
}

window.onload = () => {
	loadAudio("./test.mp3");
}
