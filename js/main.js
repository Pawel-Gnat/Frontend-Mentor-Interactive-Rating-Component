const submitBtn = document.querySelector('.rate-view--submit')
const rateCard = document.querySelector('.rate-view')
const rateBtns = document.querySelectorAll('.rate-view__rating-section--rate')
const resultRate = document.querySelector('.result-view--result-text--rate')

for (let i = 0; i < rateBtns.length; i++) {
	rateBtns[i].addEventListener('click', () => {
		const rate = rateBtns[i].innerHTML

		for (let i = 0; i < rateBtns.length; i++) {
			rateBtns[i].classList.contains('selected')
			rateBtns[i].classList.remove('selected')
		}

		rateBtns[i].classList.add('selected')

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
