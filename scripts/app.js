import displayProducts from './displayProducts.js'

window.addEventListener('load', (e) => {
	const pathname = window.location.pathname
	switch (pathname) {
		case '/':
		case '/index.html':
			displayProducts('novedades', 'image')
	}
})

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
