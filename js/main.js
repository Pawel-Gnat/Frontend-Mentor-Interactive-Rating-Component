const submitBtn = document.querySelector('.rate-view--submit')
const rateCard = document.querySelector('.rate-view')
const rateBtns = document.querySelectorAll('.rate-view__rating-section--rate')
const resultRate = document.querySelector('.result-view--result-text--rate')

// Loop through all the buttons
for (let i = 0; i < rateBtns.length; i++) {
	// Listen for an event click on each button and get the clicked number value
	rateBtns[i].addEventListener('click', () => {
		const rate = rateBtns[i].innerHTML

		// Loop through the buttons to check for a contained class and remove them if such.
		for (let i = 0; i < rateBtns.length; i++) {
			rateBtns[i].classList.contains('selected')
			rateBtns[i].classList.remove('selected')
		}

		// Add selected class to highlight my rating button
		rateBtns[i].classList.add('selected')

		// Listen for an event click to go forward next card and display rating. Event won't start if any of buttons aren't selected.
		submitBtn.addEventListener('click', e => {
			if (rateBtns[i].classList.contains('selected')) {
				e.preventDefault()
				resultRate.innerHTML = rate
				rateCard.classList.add('hidden')
			} else {
				e.preventDefault()
			}
		})
	})
}
