//source: https://www.geeksforgeeks.org/how-to-convert-speech-into-text-using-javascript/
window.SpeechRecognition = window.SpeechRecognition
	|| window.webkitSpeechRecognition;
recognition.interimResults = true;
constwords = document.querySelector('.words');
words.appendChild(p);
recognition.addEventListener('result', e => {
	const transcript = Array.from(e.results)
		.map(result => result[0])
		.map(result => result.transcript)
		.join('')

	document.getElementById("p").innerHTML = transcript;
	console.log(transcript);
});
