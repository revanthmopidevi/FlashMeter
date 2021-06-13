const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function postFormDataAsJson({ url}) {

	const fetchOptions = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		}
	};

	const response = await fetch(url, fetchOptions);

	return response.json();
}


async function handleFormSubmit(event) {
	event.preventDefault();

	const url = '/app/words';
    console.log(url)

	try {
		const responseData = await postFormDataAsJson({ url });
        let phraseData = ""
        responseData.forEach(word => {
            phraseData = phraseData.concat(word)
            phraseData = phraseData.concat(" ")
        });
        const phrase = document.getElementById("phrase")
        phrase.innerHTML = phraseData
		console.log(phraseData)
		await sleep(1000)
		phrase.innerHTML = ""
		//window.location.reload()
	} catch (error) {
		console.error(error);
	}
}


window.onload = function() {
	const button = document.getElementById("flash");
	button.addEventListener("click", handleFormSubmit);
}