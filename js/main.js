const submitBtn = document.querySelector('.rate-view--submit')
const rateCard = document.querySelector('.rate-view')
const btns = document.querySelectorAll('.rate-view__rating-section--rate')

const submitRate = () => {
	rateCard.classList.add('hidden')
}

// selectBtn.forEach(button =>
// 	button.addEventListener('click', e => {
// 		console.log('ok')
// 		selectBtn.classList.add('selected')
// 	})
// )

for (consts btn of btns) {


	btn.addEventListener('click', function selectBtn () {
		btn.classList.add('selected');
	});
}

submitBtn.addEventListener('click', submitRate)
