const barsWrapper = document.querySelector(".barsWrapper");

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function generateRandomBars() {
	for (let i = 0; i < 30; i++) {
		const bar = document.createElement("div");
		const randomHeight = getRandomArbitrary(40, 100);
		bar.classList.add("bar");
		bar.style.height = `${randomHeight}%`;
		barsWrapper.append(bar)
	}
}

generateRandomBars()

const date = document.querySelector(".date")

function setCurrentDate(element) {
	const date = new Date()
	const dateSpan = document.createElement("span")
	const timeSpan = document.createElement("span")
	
	if (element.children.length) {
		element.innerHTML = ""	
	}
	element.append(dateSpan, timeSpan)

	dateSpan.innerText = date.toLocaleDateString()
	timeSpan.innerText = date.toLocaleTimeString()
}

setInterval(() => {
	setCurrentDate(date)
}, 1000)

function closeModal() {
	const closeBtn = document.querySelector(".closeButton")

	closeBtn.addEventListener("click", function() {
		this.parentElement.style.display = "none"
	})
}

closeModal()
