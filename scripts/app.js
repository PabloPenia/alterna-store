function notImplemented() {
	return alert('Function not implemented.')
}

const cartBtn = document.getElementById('cartBtn')
const userBtn = document.getElementById('userBtn')

cartBtn.addEventListener('click', () => showUi(cartBtn))
userBtn.addEventListener('click', () => showUi(userBtn))

function showUi(btn) {
	btn.nextElementSibling.style.display === 'block'
		? (btn.nextElementSibling.style.display = 'none')
		: (btn.nextElementSibling.style.display = 'block')
}
